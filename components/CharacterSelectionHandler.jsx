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

  //handler for on hover
  const handleMouseEnter = () => {
    setHovered(true);
  };

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
        <p>Character Race</p>
        <p>Character Class</p>
        <p>Character Story</p>
        <p>Character Stats</p>
        <p> <a href='http://127.0.0.1:5173/gameplay'> select wizard </a></p>
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
            <button type="submit" className="NameSubmitButton">Confirm</button>
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
