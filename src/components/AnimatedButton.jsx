import React from 'react';
import './AnimatedButton.css';

const AnimatedButton = ({ text, link }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="animated-button">
      {text}
    </a>
  );
};

export default AnimatedButton;
