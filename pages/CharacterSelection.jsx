import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./CharacterSelection.css";
import Header from "../frontend/src/components/Header";
import ImageComponent from "../components/CharacterSelectionImages";
import background from "/Locations/tavern.jpg";

function CharacterSelection() {
  return (
    <section className="CharacterSelection" style={{ backgroundImage: `url(${background})` }}>
      <Header />
      <div className="Characters">
        <ImageComponent imageSrc="/Characters/FemaleElfWizzard.png"/>
        <ImageComponent imageSrc="/Characters/MaleElfWizzard.png"/>
        <ImageComponent imageSrc="/Characters/FemaleHalf-OrcBarbarian.png"/>
        <ImageComponent imageSrc="/Characters/MaleHalf-OrcBarbarian.png"/>
        <ImageComponent imageSrc="/Characters/FemaleTeiflingRogue.png"/>
        <ImageComponent imageSrc="/Characters/MaleTeiflingRogue.png"/>
      </div>
    </section>
  );
}

export default CharacterSelection;