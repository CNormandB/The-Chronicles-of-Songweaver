import React, { useState } from "react";
function ImageComponent({ imageSrc, popupText }) {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const CharacterInfoPopup = ({ showPopup, text }) => {
    if (!showPopup) return null;

    return (
      <div className="popup">
        <p>Character Race</p>
        <p>Character Class</p>
        <p>Character Story</p>
        <p>Character Stats</p>
      </div>
    );
  };

  return (
    <div>
      <CharacterInfoPopup showPopup={hovered} text={popupText} />
      <img
        className="CharacterImage"
        src={imageSrc}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          opacity: hovered ? 0.7 : 1,
          cursor: "pointer",
          maxWidth: "70%",
        }}
      />
    </div>
  );
}

export default ImageComponent;
