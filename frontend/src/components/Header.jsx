import React from 'react';
import "./Header.css";

const Header = () => {
  return (
    <section className='Header'>
      <img src="HeaderLogo.png" className="Logo"></img>
      <p className='Greeting'>Hello **Player**</p>
    </section>
  );
};

export default Header;