import express from 'express';
import bcrypt from 'bcrypt'
const app = express();
const PORT = process.env.PORT || 5431;

import cors from 'cors'
app.use(cors());
app.use(express.json())

import pg from 'pg';
const { Pool } = pg;

////////////////////DO THIS /////////////////////////
const pool = new Pool({
  user: 'labber',
  host: 'localhost',
  database: 'chronicles_of_songweaver',
  password: 'labber', 
  port: 5432,
});
/////////////////////////////////////////////////////


// app.get('/', (req, res) => {
//   res.send('Hello from teh server my guy!');
// });

//get a single user----------------------------------------------
app.get('/', async(req, res) => {
  console.log('test')
try {
  const allUsers = await pool.query("SELECT * FROM users")
  res.json(allUsers.rows)
} catch (error) {
  console.log(error.message)
}
})

//get user data by id----------------------------------------------
app.get('/:id', async(req, res) => {
  const  id  = req.params.id

  try {
    const userData = await pool.query("SELECT * FROM users WHERE user_id = $1;", [id])
    res.json(userData.rows)

  } catch (error) {
    console.log(error.message)
  }
})


//get situation data-----------------------------------------------
app.get('/situation/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const query = `
      SELECT
        s.*,
        o1.option_name AS option_1_name,
        o2.option_name AS option_2_name,
        o3.option_name AS option_3_name,
        o4.option_name AS option_4_name,
        o1.destination_situation AS option_1_destination,
        o2.destination_situation AS option_2_destination,
        o3.destination_situation AS option_3_destination,
        o4.destination_situation AS option_4_destination,
        o1.option_text AS option_1_text,
        o2.option_text AS option_2_text,
        o3.option_text AS option_3_text,
        o4.option_text AS option_4_text
      FROM
        situations s
      LEFT JOIN options o1 ON s.option_1 = o1.option_id
      LEFT JOIN options o2 ON s.option_2 = o2.option_id
      LEFT JOIN options o3 ON s.option_3 = o3.option_id
      LEFT JOIN options o4 ON s.option_4 = o4.option_id
      WHERE
        s.situation_id = $1;
    `;

    const situationData = await pool.query(query, [id]);
    res.json(situationData.rows);
    

  } catch (error) {
    console.error(error.message);
    res.status(500).send('Internal Server Error');
  }
});


//get options array ////////////////////////////////////////////////////////
app.get('/options/:id', async(req, res) => {
  const { id } = req.params;

  try {
    const query = `
    SELECT
    option_id,
    option_name,
    destination_situation,
    option_text
FROM
    options
WHERE
    option_id IN (
        (SELECT option_1 FROM situations WHERE situation_id = $1),
        (SELECT option_2 FROM situations WHERE situation_id = $1),
        (SELECT option_3 FROM situations WHERE situation_id = $1),
        (SELECT option_4 FROM situations WHERE situation_id = $1)
    );
    `
    const optionsData = await pool.query(query, [id]);
    res.json(optionsData.rows);

  } catch (error) {
    console.log(error.message)
  }
})

//POST current_situation from users table////////////////////////////////////////
app.post('/update-situation/:userId', async (req, res) => {
  const  { userId } = req.params;
  const { currentSituation }  = req.body;
  // console.log(req.body)
  try {
    const query = 'UPDATE users SET current_situation = $1 WHERE user_id = $2;'
    await pool.query(query, [currentSituation, userId]);

    res.json({ message: "GAME SAVED" })
  } catch (error) {
    console.log(error.message)
    res.status(500).json({ error: "Internal Server Error" })
  }
})

//registration
app.get('/register', (req, res) => {
  console.log(req)
  res.render('register', {user_id: req.session && req.session.user_id});

});

app.post("/register", (req, res) => {
  console.log('test')
  const email = req.body.email;
  const password = req.body.password;
  const username = req.body.username;
  //checks for incomplete forms and sends error 400 if incomplete
  if (!email || !password || !username) {
    res.status(400);
    res.send("Please fill out both the email and password boxes!");
  }

  let userData = usersQuery.getUserByEmail(email);
  userData.then(function(result) {
    console.log(result.rows);
    if (result.rows.length = 0) {
      res.status(400);
      res.send("Email is already in use, please login");
    }
    else {
      const newPassword = bcrypt.hashSync(password, 10);
      usersQuery.addUser(username, email, newPassword).then(
        (user) => {
          req.session.user_id = user.rows[0].id;
          res.redirect("/characterselection");
        }
      );
    }
  })
    .catch((error) => {
      console.error(error);
    });
});

//login
app.get("/login", (req, res) => {
  console.log(req.session && req.session.user_id)
  res.render('login', {user_id: req.session && req.session.user_id});
});

const login = function(email, password) {
  return usersQuery.getUserByEmail(email)
    .then(user => {
      if (bcrypt.compareSync(password, user.rows[0].password)) {
        return user;
      }
      return null;
    });
};

app.post('/login', (req, res) => {
  const { email, password } = req.body;
  login(email, password)
    .then(user => {

      if (!user) {
        res.send({ error: "No account found with that email, please register to continue!"});
        return;
      }
      req.session.user_id = user.rows[0].id;
      //res.send({ user: { username: user.rows[0].username, email: user.rows[0].email, id: user.rows[0].id } });
      req.temp = "temp"
      console.log(req.session && req.session.user_id)
      res.redirect("/characterselection");
    })
    .catch(e => res.send(e));
});


//logout
app.post("/logout", (req, res) => {
  res.clearCookie('session');
  res.redirect("/");
});

//_____________________________________________________________________________
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} MY BEST FRIENDO`)
});
