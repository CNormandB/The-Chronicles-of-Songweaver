import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <section className="Header">
      <img src="HeaderLogo.png" className="Logo"></img>
      <div className="RightSide">
        <p className="Greeting">Hello Stephaie!</p>
        <button className="Logout"><a href='http://127.0.0.1:5173'>Logout</a></button>
      </div>
    </section>
  );
};

export default Header;
