import express from 'express';
const app = express();
const PORT = process.env.PORT || 5432;

import cors from 'cors'
app.use(cors());
app.use(express.json())

import pg from 'pg';
const { Pool } = pg;

////////////////////DO THIS /////////////////////////
const pool = new Pool({
  user: 'labber',
  host: 'localhost',
  database: 'text_gameboy_test',
  password: '123',
  port: 5432,
});
/////////////////////////////////////////////////////


// app.get('/', (req, res) => {
//   res.send('Hello from teh server my guy!');
// });

//get a single user----------------------------------------------
app.get('/', async(req, res) => {
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




//_____________________________________________________________________________
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} MY BEST FRIENDO`)
});