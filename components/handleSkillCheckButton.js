import React, {useState} from "react";
// import characters from "./characters";


const handleSkillCheckButton = (optionId, characterClass, updateNarratorText) => {

  const characters = [
    {
      class: 'Barbarian',
      race: 'Half-Orc',
      stats: {
        strength: 4,
        dexterity: 1,
        constitution: 2,
        intelligence: -1,
        wisdom: 0,
        charisma: 0,
      },
      hitPoints: 12,
      armorClass: 14,
    },
    {
      class: 'Wizard',
      race: 'High-Elf',
      stats: {
        strength: -1,
        dexterity: 2,
        constitution: 1,
        intelligence: 4,
        wisdom: 0,
        charisma: 0,
      },
      hitPoints: 12,
      armorClass: 12,
    },
    {
      class: 'Rogue',
      race: 'Tiefling',
      stats: {
        strength: -1,
        dexterity: 2,
        constitution: 1,
        intelligence: 4,
        wisdom: 0,
        charisma: 0,
      },
      hitPoints: 12,
      armorClass: 12,
    },
  ];
  

  const D20Roller = (rollType, characterClass) => {
    const classStats = (charClass) => {
      return characters.find(characterItem => characterItem.class === charClass);
    }
  
    const modifierValue = classStats(characterClass).stats[rollType];
  
    const randomNumber = Math.floor(Math.random() * 20) + 1 + modifierValue;
    
    
    return randomNumber;
  };



  if (optionId === 5) {
    const rollResult5 = D20Roller("intelligence", characterClass);

    if (rollResult5 >= 10 && rollResult5 < 13) {
        updateNarratorText(`\nDICEROLL RESULT: ${rollResult5}\nIt appears that George was killed by a long laceration from his left shoulder blade to his right hip. It likely severed his spine, and could have been done with a sword or a dagger, but not with bare hands.`);
    } else if (rollResult5 > 13 && rollResult5 < 15) {
        updateNarratorText(`\nDICEROLL RESULT: ${rollResult5}\nIt appears that George was killed by a long laceration from his left shoulder blade to his right hip. It likely severed his spine, and could have been done with a sword or a dagger, but not with bare hands. You also notice a trail of blood, frozen between layers of snow, leading behind Graymore Bend. This suggests that he was attacked there and then chased out into the street.`);
    } else if (rollResult5 >= 15) {
        updateNarratorText(`\nDICEROLL RESULT: ${rollResult5}\nIt appears that George was killed by a long laceration from his left shoulder blade to his right hip. It likely severed his spine, and could have been done with a sword or a dagger, but not with bare hands. You also notice a trail of blood, frozen between layers of snow, leading behind Graymore Bend. This suggests that he was attacked there and then chased out into the street. Near the start of the bloody trail, you find a deep gouge, scored into the earth, as though someone has been digging for treasure with a mattock. On a hunch, you ask for a shovel, and start clearing snow away. A cold dread prickles up your back when you find another... and another... all in a trail toward the body. They’re footsteps, you’re sure of it, but so deep and far apart as to suggest whatever chased the poor blacksmith down was running at a speed you can only describe as inhuman.`);
    } else {
        updateNarratorText(`\nDICEROLL RESULT: ${rollResult5}\nYou fail to notice anything unusual about the body.`);
    }
}

if (optionId === 9) {
    const rollResult9 = D20Roller("intelligence", characterClass);

    if (rollResult9 >= 10 && rollResult9 < 13) {
        updateNarratorText(`\nDICEROLL RESULT: ${rollResult9}\nIt appears that someone was searching for something.`);
    } else if (rollResult9 >= 13) {
        updateNarratorText(`\nDICEROLL RESULT: ${rollResult9}\nIt appears that someone was searching for something. You also notice a set of bootprints leading away from the back of the house, in the snow.`);
    } else {
        updateNarratorText(`\nDICEROLL RESULT: ${rollResult9}\nYou fail to notice anything unusual about the house.`);
    }
}

if (optionId === 11) {
    const rollResult11 = D20Roller("dexterity", characterClass);

    if (rollResult11 >= 15) {
        updateNarratorText(`\nDICEROLL RESULT: ${rollResult11}\nWith deft fingers, you successfully pick the lock. You open the box to reveal wrapped in some linen, is a letter, and a silver elf arrowhead.\n\nThe letter reads: Dear Eryn. Now that you’re grown enough to leave on your own, I want you to have this. I found it in the woods one day, and I think it’s some sort of arrow. There’s an old tradition of plating lost arrowheads in silver to use as amulets; they say an Elf-Arrow can ward off witchcraft. So I thought I’d make it into one for you, to take on your travels, wherever they lead you. I’m not much of a jeweller, but I’d hope the charm proves that these old hands of mine can do more than rough work. Hopefully, it’ll always remind you of me. You’re the best thing that ever happened to me, Eryn.`);
    } else {
        updateNarratorText(`\nDICEROLL RESULT: ${rollResult11}\nYou fail to pick the lock.`);
    }
}

if (optionId === 12) {
    const rollResult12 = D20Roller("strength", characterClass);

    if (rollResult12 >= 15) {
        updateNarratorText(`\nDICEROLL RESULT: ${rollResult12}\nWith determination, you smash the lock and it breaks open. You open the box to reveal wrapped in some linen, is a letter, and a silver elf arrowhead.\n\nThe letter reads: Dear Eryn. Now that you’re grown enough to leave on your own, I want you to have this. I found it in the woods one day, and I think it’s some sort of arrow. There’s an old tradition of plating lost arrowheads in silver to use as amulets; they say an Elf-Arrow can ward off witchcraft. So I thought I’d make it into one for you, to take on your travels, wherever they lead you. I’m not much of a jeweller, but I’d hope the charm proves that these old hands of mine can do more than rough work. Hopefully, it’ll always remind you of me. You’re the best thing that ever happened to me, Eryn.`);
    } else {
        updateNarratorText(`\nDICEROLL RESULT: ${rollResult12}\nYou smash the lock with all your might, but it remains firmly in place. You fail to break it open.`);
    }
}

if (optionId === 16) {
  const rollResult20 = D20Roller("wisdom", characterClass);

  if (rollResult20 >= 10) {
      updateNarratorText(`\nDICEROLL RESULT: ${rollResult20}\nYou determin these tracks are from a wolf, but one much larger then normal.`);
  } else {
      updateNarratorText(`\nDICEROLL RESULT: ${rollResult20}\nYou fail to identify the tracks.`);
  }
}

if (optionId === 20) {
    const rollResult20 = D20Roller("intelligence", characterClass);

    if (rollResult20 >= 13) {
        updateNarratorText(`\nDICEROLL RESULT: ${rollResult20}\n you look closer at the stack of papers beside the first letter and notice impressions of a second letter. You pick up a piece charcoal from the nearby fireplace and rub it on the paper, revealing its contents. \n\nThe second letter reads: Dearest Cillian, I need the blade. Send it to Graymoor, but not to my house. I fear I need to work in secrecy, as anyone among us could harbor the curse. Instead, send it by courier to the woods near my house. There’s an oak tree with an owl carved into its trunk. Tell them to bury it at its foot. Have it delivered on the night of the full moon; any earlier, and my intent may be discovered. By Our Lady’s Grace, Cillian, I had hoped I'd never have use of it.`);
    } else {
        updateNarratorText(`\nDICEROLL RESULT: ${rollResult20}\nYou fail to notice anything new.`);
    }
}

if (optionId === 27) {
  const rollResult20 = D20Roller("intelligence", characterClass);

  if (rollResult20 >= 13) {
      updateNarratorText(`\nDICEROLL RESULT: ${rollResult20}\n You discover that it looks like the implement that did it had prongs, like a fork. Two shallow cuts run perpendicular to the fatal slash`);
  } else {
      updateNarratorText(`\nDICEROLL RESULT: ${rollResult20}\nYou fail to notice anything new.`);
  }
}

if (optionId === 28) {
  const rollResult20 = D20Roller("wisdom", characterClass);

  if (rollResult20 >= 13) {
      updateNarratorText(`\nDICEROLL RESULT: ${rollResult20}\n You determine these wounds are most likely be the work of claws, though of immense size.`);
  } else {
      updateNarratorText(`\nDICEROLL RESULT: ${rollResult20}\nYou fail to notice anything new.`);
  }
}

if (optionId === 31) {
  const rollResult20 = D20Roller("intelligence", characterClass);

  if (rollResult20 >= 10 && rollResult20 < 17) {
    updateNarratorText(`\nDICEROLL RESULT: ${rollResult20}\nYou determine the second-story window was the point of entry.`);
  } else if (rollResult20 >= 17) {
    updateNarratorText(`\nDICEROLL RESULT: ${rollResult20}\nYou determine the second-story window was the point of entry. Jumping to reach that height would not be impossible, but would require above-average height.`);
  } else {
    updateNarratorText(`\nDICEROLL RESULT: ${rollResult20}\nYou fail to notice anything new.`);
  }
}

if (optionId === 37) {
  const rollResult20 = D20Roller("wisdom", characterClass);

  if (rollResult20 >= 15) {
      updateNarratorText(`\nDICEROLL RESULT: ${rollResult20}\n As you converse with Father Daragor, you sense his guardedness, like a veil over his words. However, Despite your suspicions, there is no concrete evidence to challenge his story. With a sigh of resignation, you accept the inability to uncover the truth, at least for now.`);
  } else {
      updateNarratorText(`\nDICEROLL RESULT: ${rollResult20}\nYou fail to notice anything suspicious about Father Daragor's statement.`);
  }
}

if (optionId === 45) {
  const rollResult20 = D20Roller("intelligence", characterClass);

  if (rollResult20 >= 10) {
      updateNarratorText(`\nDICEROLL RESULT: ${rollResult20}\n You discover that these wounds were likely the work of something with giant claws.`);
  } else {
      updateNarratorText(`\nDICEROLL RESULT: ${rollResult20}\nYou fail to determine what caused these wounds`);
  }
}

if (optionId === 46) {
  const rollResult20 = D20Roller("wisdom", characterClass);

  if (rollResult20 >= 10) {
      updateNarratorText(`\nDICEROLL RESULT: ${rollResult20}\n You discover this was likely the work of something with giant claws, however, if it was the work of an animal the corpse would likely be at least partially eaten, but there are no teeth marks anywhere.`);
  } else {
      updateNarratorText(`\nDICEROLL RESULT: ${rollResult20}\nYou fail to determine what could have killed him`);
  }
}

if (optionId === 54) {
  const rollResult20 = D20Roller("wisdom", characterClass);

  if (rollResult20 >= 13) {
      updateNarratorText(`\nDICEROLL RESULT: ${rollResult20}\n You determine this is certainly the trail of a wolf, but one bigger than any should be.`);
  } else {
      updateNarratorText(`\nDICEROLL RESULT: ${rollResult20}\nYou fail to determine what could have made these tracks.`);
  }
}

if (optionId === 65) {
  const rollResult20 = D20Roller("intelligence", characterClass);

  if (rollResult20 >= 15) {
      updateNarratorText(`\nDICEROLL RESULT: ${rollResult20}\n You decover a single strand of silver hair. Who could have left this behind?`);
  } else {
      updateNarratorText(`\nDICEROLL RESULT: ${rollResult20}\nYou fail to find anything substantial.`);
  }
}

  
  console.log('handle skill check function RAN!')
}

export default handleSkillCheckButton;
