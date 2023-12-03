import React from 'react';
import './FramerButton.css'; // Import the CSS file

const openLink = () => {
  window.open(
    'https://www.framer.com/?utm_source=https%3A%2F%2Fmanagewise.framer.website&utm_campaign=freeplanbadge',
    '_blank'
  );
};

const FramerButton = () => {
  return (
    <button className="framer-button" onClick={openLink}>
      <div className="icon-container">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="11"
          height="16"
          viewBox="0 0 11 16"
          fill="none"
          className="framer-svg"
        >
          <path
            d="M11 0L11 5.333L5.5 5.333L0 0ZM0 5.333L5.5 5.333L11 10.667L5.5 10.667L5.5 16L0 10.667Z"
            fill="rgb(34,34,34)"
          />
        </svg>
      </div>
      <span className="f-text">Made in Framer</span>
    </button>
  );
};

export default FramerButton;