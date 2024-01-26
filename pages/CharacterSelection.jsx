import React, { useState } from "react";
import "./CharacterSelection.css";
import Header from "../frontend/src/components/Header";
import ImageComponent from "../components/CharacterSelectionHandler";
import background from "/Locations/tavern.jpg";

function CharacterSelection() {
  return (
    <section className="CharacterSelection" style={{ backgroundImage: `url(${background})` }}>
      <Header />
       <p className="CharacterChoiceTitle">Choose Your Character!</p>
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