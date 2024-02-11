
-- Options
INSERT INTO options (option_id, option_name, destination_situation, option_text) VALUES
    (1, 'ASK AROUND', 2, 'you ask around town, who knows this guy and why did he die??'),
    (2, 'INSPECT BODY', 3, 'the body is a dead guy, damn'),
    (3, 'NOTIFY ERIN', 4, 'maybe we should tell his daughter? good idea'),
    (4, 'GO BACK', 1, 'U go back to the crowd'),
    (5, 'LOOK EVEN CLOSER (int check)', NULL , 'special option text will not be displayed, needs to go in special option case'), 
    (6, 'GO BACK', 1, 'U go back to the crowd'),
    (7, 'INSPECT SHACK', NULL, 'damn its turned up!'),
    (8, 'ASK OSWALD', NULL, 'oswald is impatient, this wasnt his case...');

-- Situations
INSERT INTO situations (situation_id, situation_text, image_link, option_1, option_2, option_3, option_4) VALUES
    (1, 'uh oh dead guy in town square?! what now???', 'https://plus.unsplash.com/premium_photo-1673543763961-e25a931b9e2a?q=80&w=1130&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 1, 2, 3, NULL),
    (2, 'u ask around, turns out,  he was the blacksmith guy it turns out', 'https://images.unsplash.com/photo-1624382085340-6df4bfc36cba?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 4, NULL, NULL, NULL),
    (3, 'yo look more thoroughly at the corpse', 'https://images.unsplash.com/photo-1542850802-8a047a726d4e?q=80&w=1286&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 5, 6, NULL, NULL),
    (4, 'you and the boys make ur way to the blacksmith shack to traumatize his daughter with some news', 'https://images.unsplash.com/photo-1604240729607-b6b0fec12d45?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 7, 8, NULL, NULL);

-- Users
INSERT INTO users (username, password, current_situation) VALUES
    ('player1', 'password123', 1),
    ('player2', 'securepass', 2),
    ('player3', 'gameon', 3);

-- Continue adding more seed data as needed.
