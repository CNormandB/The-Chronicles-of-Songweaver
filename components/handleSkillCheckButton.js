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

    if (rollResult > 10) {
      // console.log(`you rolled ${rollResult}, success+ good work!`);
      updateNarratorText(`\nDICEROLL RESULT: ${rollResult}\nyou PASS!!`)
    } else {
      // console.log(`you rolled ${rollResult}, FAILURE!!!!`);
      updateNarratorText(`\nDICEROLL RESULT: ${rollResult}\n you FAIL UNFORTUNATELY !!`)
    }
  }
  
  console.log('handle skill check function RAN!')
}

export default handleSkillCheckButton;
