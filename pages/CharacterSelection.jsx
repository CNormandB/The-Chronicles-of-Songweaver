import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./CharacterSelection.css";
import Header from "../frontend/src/components/Header";
import background from "/Locations/tavern.jpg";

function ImageComponent() {
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <div>
      <Header />
      <img
        className="FemaleElfWizzard"
        src="/Characters/FemaleElfWizzard.png"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
        style={{
          opacity: hovered ? 0.7 : 1,
          cursor: "pointer",
        }}
      />
      <img
        className="MaleElfWizzard"
        src="/Characters/MaleElfWizzard.png"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
        style={{
          opacity: hovered ? 0.7 : 1,
          cursor: "pointer",
        }}
      />
      <img
        className="FemaleHalf-OrcBarbarian"
        src="/Characters/FemaleHalf-OrcBarbarian.png"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
        style={{
          opacity: hovered ? 0.7 : 1,
          cursor: "pointer",
        }}
      />
      <img
        className="MaleHalf-OrcBarbarian"
        src="/Characters/MaleHalf-OrcBarbarian.png"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
        style={{
          opacity: hovered ? 0.7 : 1,
          cursor: "pointer",
        }}
      />
      <img
        className="FemaleGnomeRanger"
        src="/Characters/FemaleGnomeRanger.png"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
        style={{
          opacity: hovered ? 0.7 : 1,
          cursor: "pointer",
        }}
      />
      <img
        className="MaleGnomeRanger"
        src="/Characters/MaleGnomeRanger.png"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
        style={{
          opacity: hovered ? 0.7 : 1,
          cursor: "pointer",
        }}
      />
    </div>
  );
}

function CharacterSelection() {
  return (
    <section
      className="CharacterSelection"
      styles={{ backgroundImage: `url(${background})` }}
    >
      <div className="Characters">
        <ImageComponent />
      </div>
    </section>
  );
}

export default CharacterSelection;
