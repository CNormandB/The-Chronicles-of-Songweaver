DROP TABLE IF EXISTS options CASCADE;

CREATE TABLE situations (
  option_id SERIAL PRIMARY KEY NOT NULL,
  option_name TEXT,
  destination_situation REFERENCES situations(situation_id),
  option_action_text TEXT
)