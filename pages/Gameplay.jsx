import React, { useState } from "react";
import Header from "/components/Header";
import "./Gameplay.css";

function Gameplay() {
  return (
    <div className="Gameplay">
      <div className="Story">
        <img src="/Locations/EndOfDay1.jpg" className="ArtFrame"></img>
        <div>
          <p className="TextSpace">Insert story description here</p>
          <div className="Buttons">
            <button>Option1</button>
            <button>Option2</button>
            <button>Option3</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gameplay;
