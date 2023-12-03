import React, { useState } from 'react';
import './Navbar.css'; // Import your CSS file for Navbar styling
import { GiHamburgerMenu } from "react-icons/gi";

function Navbar() {
  const [showMediaIcons, setShowMediaIcons] = useState(false);

  return (
    <div className="navbar">
      <div className='img'>
        <img
          src="https://framerusercontent.com/images/MwRbsJrk7ItYxeL7mKvPzrq3g.png"
          alt="Logo"
          className="logo"
        />
      </div>
      <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }>
        <div className='Links' >
        <a href="#">Features</a>
        <div className="dot"></div>
        <a href="#">FAQ</a>
        <div className="dot"></div>
        <a href="#">Pricing</a>
        <div className="dot"></div>
        <a href="#">Testimonials</a>
        <div className='template'>
          <a
            href="https://templatesunit.lemonsqueezy.com/checkout/buy/181cb12c-ca54-44c6-bebd-46e3b656defc"
            target="_blank"
            rel="noopener"
            className="buy-template"
          >
            <div className='text-framer'><p className='text-buy'>Buy Template</p></div>
          </a>
        </div>
        </div>
      </div>
      <div className="hamburger-menu" onClick={() => setShowMediaIcons(!showMediaIcons)}>
        <GiHamburgerMenu />
      </div>
    </div>
  );
}

export default Navbar;