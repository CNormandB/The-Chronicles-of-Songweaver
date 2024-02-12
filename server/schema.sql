CREATE TABLE options (
    option_id SERIAL PRIMARY KEY,
    option_name TEXT NOT NULL,
    destination_situation INTEGER,
    option_text TEXT NOT NULL
);

CREATE TABLE situations (
    situation_id SERIAL PRIMARY KEY,
    situation_text TEXT NOT NULL,
    image_link TEXT,  
    option_1 INTEGER REFERENCES options(option_id),
    option_2 INTEGER REFERENCES options(option_id),
    option_3 INTEGER REFERENCES options(option_id),
    option_4 INTEGER REFERENCES options(option_id)
);

CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR(50) NOT NULL,
    current_situation INTEGER REFERENCES situations(situation_id)
);

-- After creating the tables, alter the situations table to modify the situation_text column
ALTER TABLE situations ALTER COLUMN situation_text TYPE TEXT;