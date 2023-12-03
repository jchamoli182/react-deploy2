import React from 'react';
import './ButtonComponent.css'; // Import the CSS file for styling

const openLink = () => {
    window.open(
      'https://templatesunit.lemonsqueezy.com/checkout',
      '_blank'
    );
  };


const Button = () => {
  return (
    <button className="custom-button" onClick={openLink}>
      <span className="content">
        <span className="text">Get Started</span>
        <span className="arrow">
          <svg
            viewBox="0 0 20 20"
            fill="currentColor"
            width="24"
            height="24"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </span>
      </span>
    </button>
  );
};

export default Button;