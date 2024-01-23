import React from 'react';

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