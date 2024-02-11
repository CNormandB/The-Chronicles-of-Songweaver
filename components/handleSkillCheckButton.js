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
    const rollResult = D20Roller("intelligence", characterClass);

    if (rollResult >= 10 && rollResult < 13) {
        updateNarratorText(`\nDICEROLL RESULT: ${rollResult}\nIt appears that George was killed by a long laceration from his left shoulder blade to his right hip. It likely severed his spine, and could have been done with a sword or a dagger, but not with bare hands.`);
    } else if (rollResult > 13 && rollResult < 15) {
        updateNarratorText(`\nDICEROLL RESULT: ${rollResult}\nIt appears that George was killed by a long laceration from his left shoulder blade to his right hip. It likely severed his spine, and could have been done with a sword or a dagger, but not with bare hands. You also notice a trail of blood, frozen between layers of snow, leading behind Graymore Bend. This suggests that he was attacked there and then chased out into the street.`);
    } else if (rollResult >= 15) {
        updateNarratorText(`\nDICEROLL RESULT: ${rollResult}\nIt appears that George was killed by a long laceration from his left shoulder blade to his right hip. It likely severed his spine, and could have been done with a sword or a dagger, but not with bare hands. You also notice a trail of blood, frozen between layers of snow, leading behind Graymore Bend. This suggests that he was attacked there and then chased out into the street. Near the start of the bloody trail, you find a deep gouge, scored into the earth, as though someone has been digging for treasure with a mattock. On a hunch, you ask for a shovel, and start clearing snow away. A cold dread prickles up your back when you find another... and another... all in a trail toward the body. They’re footsteps, you’re sure of it, but so deep and far apart as to suggest whatever chased the poor blacksmith down was running at a speed you can only describe as inhuman.`);
    } else {
        updateNarratorText(`\nDICEROLL RESULT: ${rollResult}\nYou fail to notice anything unusual about the body.`);
    }
}
  
  console.log('handle skill check function RAN!')
}

export default handleSkillCheckButton;
