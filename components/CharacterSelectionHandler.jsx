import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./CharacterSelectionHandler.css"

function ImageComponent({ imageSrc, popupText }) {
  //State to manage popup and image opacity decrease on hover
  const [hovered, setHovered] = useState(false);
  const [selected, setSelected] = useState(false);

  // State to manage the visibility of the text box and submit button
  const [isVisible, setIsVisible] = useState(false);

  // State to store the value of the input field
  const [inputValue, setInputValue] = useState("");
  const [characterStats, setCharacterStats] = useState({
    strength: 0,
    dexterity: 0,
    constitution: 0,
    intelligence: 0, 
    wisdom: 0,
    charisma: 0, 
    race: "character race here",
    class: "character class",
  })

  // let characterStats = {
  //   strength: 1,
  //   dexterity: 1,
  //   constitution: 1,
  //   intelligence: 1, 
  //   wisdom: 1,
  //   charisma: 1
  // }

  //handler for on hover
  const handleMouseEnter = (e) => {
    const { src } = e.target;
    console.log(src)
    if (src === "http://127.0.0.1:5173/Characters/FemaleElfWizzard.png") {
      setCharacterStats({
        strength: 8,
        dexterity: 14,
        constitution: 12,
        intelligence: 16, 
        wisdom: 10,
        charisma: 10,
        race: "High-Elf",
        class: "Wizard",
      }) 
      // Additional actions or state updates can be added here
    } else if (src === "http://127.0.0.1:5173/Characters/MaleElfWizzard.png") {
      setCharacterStats({
        strength: 8,
        dexterity: 14,
        constitution: 12,
        intelligence: 16, 
        wisdom: 10,
        charisma: 10,
        race: "High-Elf",
        class: "Wizard",
      })   

  } else if (src === "http://127.0.0.1:5173/Characters/FemaleHalf-OrcBarbarian.png") {
    setCharacterStats({
      strength: 16,
      dexterity: 12,
      constitution: 14,
      intelligence: 8, 
      wisdom: 10,
      charisma: 10,
      race: "Half-Orc",
      class: "Barbarian",
    })   
  } else if (src === "http://127.0.0.1:5173/Characters/MaleHalf-OrcBarbarian.png") {
    setCharacterStats({
      strength: 16,
      dexterity: 12,
      constitution: 14,
      intelligence: 8, 
      wisdom: 10,
      charisma: 10,
      race: "Half-Orc",
      class: "Barbarian",
    })   
  } else if (src === "http://127.0.0.1:5173/Characters/FemaleTeiflingRogue.png") {
    setCharacterStats({
      strength: 8,
      dexterity: 14,
      constitution: 12,
      intelligence: 16, 
      wisdom: 10,
      charisma: 10,
      race: "Tiefling",
      class: "Rogue",
    })   
  } else if (src === "http://127.0.0.1:5173/Characters/MaleTeiflingRogue.png") {
    setCharacterStats({
      strength: 8,
      dexterity: 14,
      constitution: 12,
      intelligence: 16, 
      wisdom: 10,
      charisma: 10,
      race: "Tiefling",
      class: "Rogue",
    })   
  } 
    setHovered(true);
  }




  const handleMouseLeave = () => {
    setHovered(false);
  };

  //handler for when text box and submit button are visible
  const handleTextClick = () => {
    setIsVisible(!isVisible);
    setSelected(!selected)
  };

  const handleInputChange = (e) => {
    let value = e.target.value;
    value = value.slice(0, 15);
    setInputValue(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted:", inputValue);
  };

  //Popup control + information
  const CharacterInfoPopup = ({ showPopup, text }) => {
    if (!showPopup) return null;



    return (
      <div className="popup">
        <p>Character Race: {characterStats.race}</p>
        <p>Character Class: {characterStats.class}</p>

        <p>Character Stats: <br />Strength: {characterStats.strength} <br />Dexterity: {characterStats.dexterity} <br />Constitution: {characterStats.constitution} <br />Intelligence: {characterStats.intelligence} <br />Wisdom: {characterStats.wisdom} <br />Charisma: {characterStats.charisma}</p>

        {/* Conditional rendering of text box and submit button */}
        {isVisible && (
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              placeholder="Character Name..."
              className="CharacterNamer"
              autoFocus
            />
            <button type="submit" className="NameSubmitButton"> <a href='http://127.0.0.1:5173/gameplay'>Confirm</a></button>
          </form>
        )}
      </div>
    );
  };

  return (
    <div>
      <CharacterInfoPopup showPopup={hovered||selected} text={popupText} />
      <div>
        <img
          className="CharacterImage"
          src={imageSrc}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={handleTextClick}
          style={{
            opacity: hovered ? 0.7 : 1,
            cursor: "pointer",
            maxWidth: "70%",
          }}
        />
      </div>
    </div>
  );
}

export default ImageComponent;
