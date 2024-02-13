import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <section className="Header">
      <img src="HeaderLogo.png" className="Logo"></img>
      <div className="RightSide">
        <p className="Greeting">Hello **Player**</p>
        <button className="Logout">Logout</button>
      </div>
    </section>
  );
};

export default Header;
