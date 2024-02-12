--clear tables before seeding 
TRUNCATE TABLE options CASCADE;

-- Options

INSERT INTO options (option_id, option_name, destination_situation, option_text) VALUES
    (1, 'START GAME', 2, ' Your adventure begins!'),
    (2, 'INSPECT BODY', 3, ' Roll for intelligence'),
    (3, 'TALK TO THE INN OWNER', 4, ' You decide to ask Sagh Gazara about the deceased'),
    (4, 'GO BACK', 2, 'You return to the crowd'),
    (5, 'ROLL FOR INTELLIGENCE', NULL, ' special option examine the body'),
    (6, 'GO BACK', 2, ' You return to the crowd'),
    (7, 'GO TO THE HOME OF GEORGE GILLY', 6, ' Upon arrival to the blacksmiths home, you find it turned upside down'),
    (8, 'TALK TO OSWALD', 5, ' Oswald is impatient, this was not his case.'),
    (9, 'INVESTIGATE THE HOUSE (ROLL FOR INTELLIGENCE)', NULL, ' special roll for investigate house'),
    (10, 'INVESTIGATE LOCKBOX', 8, ' You take a closer look at the small, artless lockbox on the table'),
    (11, 'PICK THE LOCK (ROLL FOR DEXTERITY)', NULL, ' Special roll to pick lock'),
    (12, 'BREAK THE LOCK (ROLL FOR STRENGTH)', NULL, ' Special roll to break the lock'),
    (13, 'GO BACK', 6, 'You return to the entrance of the house'),
    (14, 'INVESTIGATE THE OUTSIDE OF THE HOUSE', 7, ' You decide to take a look outside the house.'),
    (15, 'FOLLOW THE TRACKS', 9, 'You decide to follow the trail of bootprints.'),
    (16, 'DETERMINE WHAT TYPE OF TRACKS THESE ARE (ROLL FOR WISDOM)', NULL, ' Special roll to determine what type of tracks they are'),
    (17, 'TALK TO OSWALD', 11, ' Oswald is irritated.'),
    (18, 'GO TO SER THAMES HOME', 12, ' You decide to go to Ser Thames home to investigate.'),
    (19, 'INVESTIGATE THE LETTER', 13, ' You take a closer look at the letter on the table'),
    (20, 'LOOK CLOSER (ROLL FOR INTELLIGENCE)', NULL, ' Special roll to read the second letter'),
    (21, 'GO BACK', 12, 'You return to the main entrance of the house.'),
    (22, 'RETURN TO THE GRAYMORE BEND', 14, ' You decide to return to the inn and rest for the night'),
    (23, 'GO TO THE HOME OF XALTH TASS', 17, ' You decide to go to Xalth Tass'' home to investigate her death');

-- Situations

INSERT INTO situations (situation_id, situation_text, image_link, option_1, option_2, option_3, option_4) VALUES
    (1, ' Greetings, dear listeners, gather ''round as I, Songweaver, spin a tale of mystery and peril. In this quaint hamlet, where shadows cling to the walls and fear echoes in hushed whispers, you, my fellow adventurer, stand at the crossroads of a daunting quest. A series of vicious murders has cast a sinister pall over the village, and now the stage is set for your investigation.As the melody of my story unfolds, you step into the role of the investigator, a seeker of truth in the face of encroaching darkness. The hamlet''s secrets are woven into the very fabric of its existence, waiting for you to unravel the threads that bind this malevolent tale. The villagers, each a note in this haunting composition, possess fragments of the puzzle, concealed behind the curtain of their fears.In this harmonious dance between danger and cunning, heed my words and be wise. Collect the scattered notes of wisdom strewn across the village, for they may compose the very song that guides you through the crescendo of confrontation. Ready yourself, dear adventurer, for the climax awaits, where your mettle shall be tested against an unseen adversary.So, let the melody of investigation guide your steps, and may the rhythm of discovery fortify your resolve. In this hamlet''s lament, together we shall conduct the symphony of justice and unveil the melody of survival.', 'https://trello.com/1/cards/65aad863a07daa5f53e29be1/attachments/65aae69e2724256329682866/previews/65aae69f2724256329682ac2/download/Female_Halfling_Bard.png', 1, NULL, NULL, NULL),

    (2, ' A light mist drifts from the loamy sky above you. The drizzle quickly freezes into glass in the streets. In the middle of the small town’s square, Graymoor’s blacksmith, George Gilly, lies face down in the snow, still, and ashen.You stand around the latest victim, in the middle of the town, outside it''s only Inn, the Graymoor Bend. With them are a handful of the townsfolk, and the Coroner. Oswald, the Coroner, is in town specifically to investigate and tax the death of Ser Thames, a knight who lived in Graymoor, and the one who was first to wind up dead. Ser Thames was the closest thing Graymoor had to a sheriff. Oswald the Coroner has enlisted your help.', 'https://cdn.discordapp.com/attachments/1194709723820343336/1203839627958558740/E1_TownSquare.jpg?ex=65d28e05&is=65c01905&hm=3c8d091cc3169d46875518c454f023e5859f7b4276e539a164e2e79c9f144269&', 2, 3, NULL, NULL),

    (3, ' You look more thoroughly at the corpse', 'https://images.unsplash.com/photo-1542850802-8a047a726d4e?q=80&w=1286&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 5, 6, NULL, NULL),

    (4, ' Sagh Gazara: I remember seeing someone chatting with him. A mysterious figure, clad in dark hooded robes. Couldn''t discern their identity, but I''d guess it was a fellow, judging by their silhouette. You might want to check in on his house and have a word with his daughter, Eryn. It''s not an easy task, but it needs to be done.', 'https://cdn.discordapp.com/attachments/1194709723820343336/1203839628654682142/E1C2_Inn.jpg?ex=65d28e05&is=65c01905&hm=99c125c2ed752359dfdbcdf8baff58a46bf2a2349a5748c064c7f55eae420569&', 7, 8, NULL, NULL),

    (5, ' Oswald: Stop waisting time. We need to investage Ser Thames.', 'https://cdn.discordapp.com/attachments/1194709723820343336/1203839627958558740/E1_TownSquare.jpg?ex=65d28e05&is=65c01905&hm=3c8d091cc3169d46875518c454f023e5859f7b4276e539a164e2e79c9f144269&', 7, 6, NULL, NULL),

    (6, ' The doors and windows hang open, and the curtains shiver in the frigid wind. Snow has begun to creep onto the sills, and over the threshold, into the dark and empty home. As you enter, you find the floorboards in the kitchen have been pried up, and on the table next to them sits a small, artless lockbox.', 'https://cdn.discordapp.com/attachments/1194709723820343336/1203839629120376883/E2_BlacksmithsHouse.jpg?ex=65d28e05&is=65c01905&hm=dda31b831b4b05c1d8d4bd4a34a7c325bb569ccec30ac41ba6a8c63aded4e445&', 9, 14, 17, NULL),

    (7, ' You step out the back door of the house and notice a set of bootpints in the snow leading towards the woods.', 'https://cdn.discordapp.com/attachments/1194709723820343336/1203839658853929031/E2C1DC16_BootTracks.jpg?ex=65d28e0c&is=65c0190c&hm=2028d0e6c00a55e76082dd11f4acd642a463d77cff68984d6f1b49a83ba05067&', 15, 13, NULL, NULL),

    (8, ' You look closely at the lockbox, and examine the sturdy lock holding it firmly shut.', 'https://cdn.discordapp.com/attachments/1194709723820343336/1203839658618921060/E2C1_Lockbox.jpg?ex=65d28e0c&is=65c0190c&hm=1c5491b1a1330e7ec574b64e048f344882818a162cc71090519f0393cf0f7de3&', 11, 12, 13, NULL),

    (9, ' You follow the tracks for about an hour into the woods behind the house. The tracks quickly become muddled; mixed up with what appear to be the tracks of a giant dog.', 'https://cdn.discordapp.com/attachments/1194709723820343336/1203839658853929031/E2C1DC16_BootTracks.jpg?ex=65d28e0c&is=65c0190c&hm=2028d0e6c00a55e76082dd11f4acd642a463d77cff68984d6f1b49a83ba05067&', 16, 13, NULL, NULL),

    (11, ' Oswald: Stop messing around, we need to investage Ser Thames'' home.', 'https://cdn.discordapp.com/attachments/1194709723820343336/1203839691183357972/E2C1INT17WIZ12_KeyInRafters.jpg?ex=65d28e14&is=65c01914&hm=a20088e7ac495ef42274e6b6f0e1d28f3940ce93522716798ed640351d43cbf6&', 18, 13, NULL, NULL),

    (12, ' The late knight’s house is old, and well kept on the exterior. It’s obvious he had a penchant for gardening, and he was buried in his backyard, amongst some of his prized lilies. The door into the house is unlocked. The house is dusty and in disarray, but hasn’t been turned upside down like the blacksmith’s was. There is a drafting table with an unfinished  letter.', 'https://cdn.discordapp.com/attachments/1194709723820343336/1203839659155914803/E3_SerThamesHouse.jpg?ex=65d28e0d&is=65c0190d&hm=13afbacc56d7958827c02ccd6f89ccd7dbf0e2e415e4564d70f032c46aa7817b&', 19, NULL, NULL, NULL),

    (13, ' You look closely at the unfinished letter on the table. The letter reads: Dear Ulric, My old mentor, I pray this letter reaches you in time. After years of the seclusion I wanted from this town, something is afoot, and I fear it’s the shadow of that old curse you once told me about. I can’t prove anything yet, but I’ve started taking measures, and hopefully I’ll have what I need in two nights; something to defend myself with. Don’t fear, I wouldn’t be so stupid as to ask for it sent directly to me. My old contact in the Swords of the Lady will hide it near my house. That said, I need you to tell me if you remember t', 'https://cdn.discordapp.com/attachments/1194709723820343336/1203839659461967912/E3C1_Letters.jpg?ex=65d28e0d&is=65c0190d&hm=60a02b5e3597c73d922a4897256d47fc7f610759707fcabef68bfad3309fc3cf&', 20, 21, 22, NULL),

    (14, ' After a exhaustive day of investigation, you finally return to Graymore Bend, seeking the solace of much-needed rest. However, your reprieve is short-lived as Sagh Gazara disturbs your sleep with grim tidings – Xalth Tass, the locksmith, was discovered dead in her home at the break of dawn', 'https://cdn.discordapp.com/attachments/1194709723820343336/1203839628654682142/E1C2_Inn.jpg?ex=65d28e05&is=65c01905&hm=99c125c2ed752359dfdbcdf8baff58a46bf2a2349a5748c064c7f55eae420569&', 23, NULL, NULL, NULL);


-- Users

INSERT INTO users (username, password, current_situation) VALUES
    ('player1', 'password123', 1),
    ('player2', 'securepass', 2),
    ('player3', 'gameon', 3);
