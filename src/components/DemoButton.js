import React from 'react'
import './DemoButton.css'
const openLink = () => {
    window.open(
      'https://www.youtube.com/',
      '_blank'
    );
  };
const DemoButton = () => {
  return (
    <button className="demo-button" onClick={openLink}>
    <span className="button-text">Whatch Demo</span>
    <svg
      viewBox="0 0 20 20"
      fill="currentColor"
      width="24"
      height="24"
      color="var(--token-d23dd5a9-b486-4fa3-8394-2cd7943f28da, rgb(7, 6, 27))"
      className="svg-icon"
    >
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
        clipRule="evenodd"
      ></path>
    </svg>
  </button>
  )
}

export default DemoButton