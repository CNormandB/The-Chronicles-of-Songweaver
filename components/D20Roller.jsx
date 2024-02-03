import React, { useState } from 'react';

const D20Roller = ({ character, rollType }) => {
  const [result, setResult] = useState(null);

  const rollDice = () => {
    let modifier = 0;

    // Determine the appropriate modifier based on the roll type
    switch (rollType) {
      case 'strength':
        modifier = character.stats.strength;
        break;
      case 'dexterity':
        modifier = character.stats.dexterity;
        break;
      case 'intelligence':
        modifier = character.stats.intelligence;
        break;
      case 'charisma':
        modifier = character.stats.charisma;
        break;
      case 'constitution':
        modifier = character.stats.constitution;
        break;
      case 'wisdom':
        modifier = character.stats.wisdom;
        break;
      default:
        // Default to a generic D20 roll
        break;
    }

    // Ensure that the modifier is a valid number
    if (typeof modifier === 'number' && !isNaN(modifier)) {
      // Roll a 20-sided dice and add the modifier
      const randomNumber = Math.floor(Math.random() * 20) + 1 + modifier;
      setResult(randomNumber);
    } else {
      // Handle the case where the modifier is not a valid number
      setResult(`Invalid ${rollType} Modifier`);
    }
  };

  return (
    <div>
      <h2>{character.class} - {character.race}</h2>
      <p>Hit Points: {character.hitPoints}</p>
      <p>Armor Class: {character.armorClass}</p>
      <button onClick={rollDice}>Roll {rollType.charAt(0).toUpperCase() + rollType.slice(1)} Dice</button>
      {result !== null && (
        <p>
          Result: <strong>{result}</strong>
        </p>
      )}
    </div>
  );
};

export default D20Roller;