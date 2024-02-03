
import React from 'react';
import D20Roller from '../components/D20Roller';
import characters from '../src/data/characters';

const D20RollerPage = () => {
    return (
        <div>
          <h1>D&D Character App</h1>
    
          {characters.map((character, index) => (
            <D20Roller key={index} character={character} rollType="strength" />
            // You can change "strength" to other roll types as needed
          ))}
        </div>
      );
    };

export default D20RollerPage;
