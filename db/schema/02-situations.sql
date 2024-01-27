DROP TABLE IF EXISTS users CASCADE;

CREATE TABLE situations (
  id SERIAL PRIMARY KEY NOT NULL,
  situation_text TEXT NOT NULL,
  image_path TEXT,
  option_1 TEXT,
  option_2 TEXT,
  option_3 TEXT,
  option_4 TEXT
)