DROP TABLE IF EXISTS users CASCADE;


CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  password TEXT NOT NULL,
  current_situation TEXT,
  reroll_attempts SMALLINT
)