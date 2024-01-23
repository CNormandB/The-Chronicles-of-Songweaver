import React from 'react';
import './ScrollingBackground.css'; // Import the stylesheet

const ScrollingBackground = ({ children }) => {
  return (
    <div className="background-scroll-container">
      <div className="background-scroll-content">
        {children}
      </div>
    </div>
  );
};

export default ScrollingBackground;