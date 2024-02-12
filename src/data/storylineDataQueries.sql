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
    (22, 'TALK TO OSWALD', 14, 'Oswald appears to be lost in thought.'),
    (23, 'RETURN TO THE GRAYMORE BEND', 15, ' You decide to return to the inn and rest for the night'),
    (24, 'GO TO THE HOME OF XALTH TASS', 17, ' You decide to go to Xalth Tass'' home to investigate her death');
    (25, 'LOOK CLOSER AT THE BODY', 18, ' You decide take a closer look at the body');
    (26, 'TALK TO OSWALD', 19, ' Oswald is busy writing some things down');
    (27, 'TAKE A CLOSER LOOK AT WOUNDS (INTELLIGENCE CHECK)', NULL, ' special option to look more closely at the body');
    (28, 'DETERMINE WHAT CAUSED THE SLASHES (WISDOM CHECK)', NULL, ' special option to check what caused the cuts');
    (28, 'GO BACK', 17, ' You return to the main entrance of the house.');
    (29, 'INVESTIGATE THE HOUSE', 20, ' You decide to look around the house.');
    (30, 'TRY AND FIND HOW THE MURDERER GOT IN (ROLL FOR INTELLIGENCE)', NULL, ' Sepcial roll to find the point of entry.');
    (31, 'GO TO THE CHAPLE OF SELÛNE', 21, ' You take Oswalds advice and head to the nearby Chapel of Selûne.');
    (32, 'TALK TO FATHER DARAGOR ', 22, ' You introduce yourself to Father Daragor');
    (33, 'ASK ABOUT THE NEW CHAPLE LOCKS ', 23, ' You ask Father Daragor about the new locks he had installed');
    (34, 'ASK ABOUT HIS FEELINGS ON THE RECENT INFLUX OF FUNERAL SERVICES', 24, ' You are curious to know Father Daragors opinion on the recent murders.');
    (35, 'GO BACK', 21, ' You return to the main entrance.');
    (36, 'IS HE TELLING THE TRUTH? (WISDOM CHECK)', NULL, 'special option to see if father daragor is lying');
    (36, 'ASK TO INVESITAGE THE CHAPLE', 25, 'You ask Father Daragor if you can take a look around inside.');
    (37, 'TALK TO OSWALD', 26, 'Oswald is quitely observing.');
    (38, 'RETURN TO THE GRAYMORE BEND', 27, 'You decide to return to the Graymore Bend and turn in for the night.');
    (39, 'ASK WHO PASSED AWAY', 28, 'You ask Sagh who the body belongs to.');
    (40, 'GO TO THE ABANDONED BARN', 29, 'You journey to the abandoned barn.');


    



-- Situations

INSERT INTO situations (situation_id, situation_text, image_link, option_1, option_2, option_3, option_4) VALUES
    (1, ' Welcome, listeners, as I, Songweaver, spin a tale of mystery. In this village, shadows linger and fear whispers. You, adventurer, embark on a quest. Murders shroud the village, setting the stage for your investigation. Step into the role of truth-seeker amidst darkness. Villagers hold fragments of the puzzle. Gather wisdom, for it guides you through confrontation. Ready yourself for the climax, where your mettle is tested. Let investigation''s melody guide, and discovery fortify. Together, we conduct justice''s symphony and unveil survival''s melody.', 'https://trello.com/1/cards/65aad863a07daa5f53e29be1/attachments/65aae69e2724256329682866/previews/65aae69f2724256329682ac2/download/Female_Halfling_Bard.png', 1, NULL, NULL, NULL),

    (2, ' A light mist drifts from the loamy sky above you. The drizzle quickly freezes into glass in the streets. In the middle of the small town’s square, Graymoor’s blacksmith, George Gilly, lies face down in the snow, still, and ashen.You stand around the latest victim, in the middle of the town, outside it''s only Inn, the Graymoor Bend. With them are a handful of the townsfolk, and the Coroner. Oswald, the Coroner, is in town specifically to investigate and tax the death of Ser Thames, a knight who lived in Graymoor, and the one who was first to wind up dead. Ser Thames was the closest thing Graymoor had to a sheriff. Oswald the Coroner has enlisted your help.', 'https://cdn.discordapp.com/attachments/1194709723820343336/1203839627958558740/E1_TownSquare.jpg?ex=65d28e05&is=65c01905&hm=3c8d091cc3169d46875518c454f023e5859f7b4276e539a164e2e79c9f144269&', 2, 3, NULL, NULL),

    (3, ' You look more thoroughly at the corpse', 'https://cdn.discordapp.com/attachments/1194709723820343336/1203839689363165254/E4C1DC10_XalythBodyx.jpg?ex=65d28e14&is=65c01914&hm=979b28def7ae680cfb221ff3ef9450b87660218d3155735a1b14d4539f5f4db7&', 5, 6, NULL, NULL),

    (4, ' Sagh Gazara: I remember seeing someone chatting with him. A mysterious figure, clad in dark hooded robes. Couldn''t discern their identity, but I''d guess it was a fellow, judging by their silhouette. You might want to check in on his house and have a word with his daughter, Eryn. It''s not an easy task, but it needs to be done.', 'https://cdn.discordapp.com/attachments/1194709723820343336/1203839628654682142/E1C2_Inn.jpg?ex=65d28e05&is=65c01905&hm=99c125c2ed752359dfdbcdf8baff58a46bf2a2349a5748c064c7f55eae420569&', 7, 8, NULL, NULL),

    (5, ' Oswald: Stop waisting time. We need to investage Ser Thames.', 'https://cdn.discordapp.com/attachments/1194709723820343336/1203839627958558740/E1_TownSquare.jpg?ex=65d28e05&is=65c01905&hm=3c8d091cc3169d46875518c454f023e5859f7b4276e539a164e2e79c9f144269&', 7, 6, NULL, NULL),

    (6, ' The doors and windows hang open, and the curtains shiver in the frigid wind. Snow has begun to creep onto the sills, and over the threshold, into the dark and empty home. As you enter, you find the floorboards in the kitchen have been pried up, and on the table next to them sits a small, artless lockbox.', 'https://cdn.discordapp.com/attachments/1194709723820343336/1203839629120376883/E2_BlacksmithsHouse.jpg?ex=65d28e05&is=65c01905&hm=dda31b831b4b05c1d8d4bd4a34a7c325bb569ccec30ac41ba6a8c63aded4e445&', 9, 14, 17, NULL),

    (7, ' You step out the back door of the house and notice a set of bootpints in the snow leading towards the woods.', 'https://cdn.discordapp.com/attachments/1194709723820343336/1203839658853929031/E2C1DC16_BootTracks.jpg?ex=65d28e0c&is=65c0190c&hm=2028d0e6c00a55e76082dd11f4acd642a463d77cff68984d6f1b49a83ba05067&', 15, 13, NULL, NULL),

    (8, ' You look closely at the lockbox, and examine the sturdy lock holding it firmly shut.', 'https://cdn.discordapp.com/attachments/1194709723820343336/1203839658618921060/E2C1_Lockbox.jpg?ex=65d28e0c&is=65c0190c&hm=1c5491b1a1330e7ec574b64e048f344882818a162cc71090519f0393cf0f7de3&', 11, 12, 13, NULL),

    (9, ' You follow the tracks for about an hour into the woods behind the house. The tracks quickly become muddled; mixed up with what appear to be the tracks of a giant dog.', 'https://cdn.discordapp.com/attachments/1194709723820343336/1203839658853929031/E2C1DC16_BootTracks.jpg?ex=65d28e0c&is=65c0190c&hm=2028d0e6c00a55e76082dd11f4acd642a463d77cff68984d6f1b49a83ba05067&', 16, 13, NULL, NULL),

    (11, ' Oswald: Stop messing around, we need to investage Ser Thames'' home.', 'https://cdn.discordapp.com/attachments/1194709723820343336/1203839691183357972/E2C1INT17WIZ12_KeyInRafters.jpg?ex=65d28e14&is=65c01914&hm=a20088e7ac495ef42274e6b6f0e1d28f3940ce93522716798ed640351d43cbf6&', 18, 13, NULL, NULL),

    (12, ' The late knight’s house is old, and well kept on the exterior. It’s obvious he had a penchant for gardening, and he was buried in his backyard, amongst some of his prized lilies. The door into the house is unlocked. The house is dusty and in disarray, but hasn’t been turned upside down like the blacksmith’s was. There is a drafting table with an unfinished  letter.', 'https://cdn.discordapp.com/attachments/1194709723820343336/1203839659155914803/E3_SerThamesHouse.jpg?ex=65d28e0d&is=65c0190d&hm=13afbacc56d7958827c02ccd6f89ccd7dbf0e2e415e4564d70f032c46aa7817b&', 19, NULL, NULL, NULL),

    (13, ' You look closely at the unfinished letter on the table. The letter reads: Dear Ulric, My old mentor, I pray this letter reaches you in time. After years of the seclusion I wanted from this town, something is afoot, and I fear it’s the shadow of that old curse you once told me about. I can’t prove anything yet, but I’ve started taking measures, and hopefully I’ll have what I need in two nights; something to defend myself with. Don’t fear, I wouldn’t be so stupid as to ask for it sent directly to me. My old contact in the Swords of the Lady will hide it near my house. That said, I need you to tell me if you remember t', 'https://cdn.discordapp.com/attachments/1194709723820343336/1203839659461967912/E3C1_Letters.jpg?ex=65d28e0d&is=65c0190d&hm=60a02b5e3597c73d922a4897256d47fc7f610759707fcabef68bfad3309fc3cf&', 20, 21, 22, NULL),

    (14, ' Oswald: Hmm, that letter is quite intresting. I doubt there is anything further to investigate here. We should return to the inn for the night. ', 'https://cdn.discordapp.com/attachments/1194709723820343336/1203839659461967912/E3C1_Letters.jpg?ex=65d28e0d&is=65c0190d&hm=60a02b5e3597c73d922a4897256d47fc7f610759707fcabef68bfad3309fc3cf&', 23, 21, NULL, NULL);

    (15, ' After a exhaustive day of investigation, you finally return to Graymore Bend, seeking the solace of much-needed rest. However, your reprieve is short-lived as Sagh Gazara disturbs your sleep with grim tidings – Xalth Tass, the locksmith, was discovered dead in her home at the break of dawn', 'https://cdn.discordapp.com/attachments/1194709723820343336/1203839690302562355/EndOfDay1.jpg?ex=65d28e14&is=65c01914&hm=d2b2e94cde19df6ed281e0741eb436d5421040328a8448115b6ca757e46e2c4f&', 24, NULL, NULL, NULL);

    (17, ' You arrive at the home of Xalyth Tass. Eldariel the Apothecary found the body. They had agreed to come by early in the morning and help Xalyth pack, as her paranoia had finally convinced her to stay out of town for a while. The door is broken, but Eldariel admits to doing that themselves. When they arrived, the door was locked, and the key was in the keyhole on the inside, where it still sits.', 'https://cdn.discordapp.com/attachments/1194709723820343336/1203839659747057664/E4_XalythHouse.jpg?ex=65d28e0d&is=65c0190d&hm=c64d793b6ee98818012c337f3b17342b930f109f76825bd92e4d0bb865d80bc1&', 25, 26, NULL, NULL);

    (18, ' It appears that Xalyth was also killed via a slash to the back.', 'https://cdn.discordapp.com/attachments/1194709723820343336/1203839691443675156/E4C1DC17XalythBody.jpg?ex=65d28e14&is=65c01914&hm=7485608dacbbee98b416742a5372e2e2ce010161d92af22d7fd5c86876ccdf41&', 27, 28, 29, NULL);
    
    (19, ' Oswald: This is quite concerning. We really need to find this murderer. Perhaps we should pay a visit to the Chapel of Selûne, she was highered by them after all.', 'https://cdn.discordapp.com/attachments/1194709723820343336/1203839659747057664/E4_XalythHouse.jpg?ex=65d28e0d&is=65c0190d&hm=c64d793b6ee98818012c337f3b17342b930f109f76825bd92e4d0bb865d80bc1&', 28, 31, NULL, NULL);

    (20, ' You look around the house and discover a stack of Xalyth''s business books. You discover that she was hired by the local Chapel of Selûne to help install the giant lock that George Gilly was hired to make. She had made a note that the chaple could be locked from the inside and would make the building impenetrable from the outside.', 'https://cdn.discordapp.com/attachments/1194709723820343336/1203839658018996335/E4C2_XalythBooks.png?ex=65d28e0c&is=65c0190c&hm=dddb6de1004b2984b54e4ec478c1993cf6e374b01487d5cab8168ef7da4772b8&', 30, 28, NULL, NULL);

    (21, ' As you approach the Chapel of Selûne, you see the congregation deep in preparation for the Feast of the Moon, busying themselves refilling small bowls of milk, out on the steps. A stray cat prowls from a distance, eyeing the milk a preistess tips out. Above you, a banner unfurls, hanging above the door; deep blue trimmed with silver. On it, an invitation to the whole town of Greymoor to attend the feast, two nights from now. Father Daragor meets you outside.', 'https://cdn.discordapp.com/attachments/1194709723820343336/1203839689854029834/E5_ChapelOfSelune.png?ex=65d28e14&is=65c01914&hm=7133f2710811426b3961ddd23846e9780ce1e16c4c838e98ba05afea5dcf3c19&', 30, 28, NULL, NULL);

    (22, ' Father Daragor is an older, weathered man, in his forties or fifties. Silver haired, with a scar on his jaw, and a set of fake teeth. He is as helpful and forward as possible. Father Daragor: I’ll do whatever I can to help. I hope the chapel can be a sanctuary. As it should be, in these dark times.', 'https://cdn.discordapp.com/attachments/1194709723820343336/1203839689854029834/E5_ChapelOfSelune.png?ex=65d28e14&is=65c01914&hm=7133f2710811426b3961ddd23846e9780ce1e16c4c838e98ba05afea5dcf3c19&', 33, 34, 35, 38);

    (23, ' Father Daragor: My dear inquirer, indeed, the recent installment of heightened security measures surrounding our Chaple is a matter of recent implementation. I do not withhold this information; it is my duty to provide clarity amidst uncertainty. However, I must assert that these directives emanated from the esteemed Curia, the governing body of our revered church. Their decision was a response to reports of marauding Gnolls, whose incursions wrought havoc upon a distant temple within the kingdom''s expanse. Such unfortunate events necessitated a prudent reassessment of our security protocols, prompting the Curia''s directive to fortify our defenses. Though the circumstances are lamentable, we must remain steadfast in our commitment to safeguarding our sacred spaces and preserving the sanctity of our rites.', 'https://cdn.discordapp.com/attachments/1194709723820343336/1203839689854029834/E5_ChapelOfSelune.png?ex=65d28e14&is=65c01914&hm=7133f2710811426b3961ddd23846e9780ce1e16c4c838e98ba05afea5dcf3c19&', 34, 36, 35, 38);

    (24, ' Father Daragor: My child, the recent influx of funeral services weighs heavily upon my heart. Each passing soul adds to the sorrow that grips our community. I express deep regret at witnessing this somber procession of farewells. However, I maintain hope that you, as a beacon of light and resolve, can unravel the mysteries behind these untimely departures. May the guidance of the divine illuminate your path as you seek to bring solace and understanding to our troubled town', 'https://cdn.discordapp.com/attachments/1194709723820343336/1203839689854029834/E5_ChapelOfSelune.png?ex=65d28e14&is=65c01914&hm=7133f2710811426b3961ddd23846e9780ce1e16c4c838e98ba05afea5dcf3c19&', 33, 36, 35, 38);

    (25, ' Father Daragor: My child, I commend your resolve in seeking resolution to this matter. However, today our chapel is abuzz with preparations for the feast. I''m afraid I must kindly request that you refrain from disturbing the congregation today.', 'https://cdn.discordapp.com/attachments/1194709723820343336/1203839689854029834/E5_ChapelOfSelune.png?ex=65d28e14&is=65c01914&hm=7133f2710811426b3961ddd23846e9780ce1e16c4c838e98ba05afea5dcf3c19&', 33, 34, 35, 38);

    (26, ' Oswald: This is all very suspicious, but I highly doubt we are going to get any further anwsers here. Perhaps we should return to the inn for the night.', 'https://cdn.discordapp.com/attachments/1194709723820343336/1203839689854029834/E5_ChapelOfSelune.png?ex=65d28e14&is=65c01914&hm=7133f2710811426b3961ddd23846e9780ce1e16c4c838e98ba05afea5dcf3c19&', 35, 38, NULL, NULL);

    (27, ' You return to the inn and rest for the night. You are once again woken by Sagh with even more bad news. Sagh: Sorry to wake you, but- you''ve got another body, up at the abandoned barn. That Kalkian fella''s come in pretty shook up about it. And you''re not gonna like who it is.', 'https://cdn.discordapp.com/attachments/1194709723820343336/1203839690302562355/EndOfDay1.jpg?ex=65d28e14&is=65c01914&hm=d2b2e94cde19df6ed281e0741eb436d5421040328a8448115b6ca757e46e2c4f&', 39, 40, NULL, NULL);

    (28, ' Sagh relpy''s with a grim expression. Sagh: You''d better go to the barn and look', 'https://cdn.discordapp.com/attachments/1194709723820343336/1203839628654682142/E1C2_Inn.jpg?ex=65d28e05&is=65c01905&hm=99c125c2ed752359dfdbcdf8baff58a46bf2a2349a5748c064c7f55eae420569&', 40, NULL, NULL, NULL);

-- Users

INSERT INTO users (username, password, current_situation) VALUES
    ('player1', 'password123', 1),
    ('player2', 'securepass', 2),
    ('player3', 'gameon', 3);
