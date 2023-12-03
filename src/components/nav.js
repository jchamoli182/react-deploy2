import React, { useState } from "react";
import "./nav.css";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
      <nav className="main-nav">
        {/* 1st logo part  */}
        <div className='img'>
        <div className="logo">
        <img
          src="https://framerusercontent.com/images/MwRbsJrk7ItYxeL7mKvPzrq3g.png"
          alt="Logo"
          className="logo"
        />
         </div>
        </div>

        {/* 2nd menu part  */}
        <div className="new">
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }>
          <div>
          <ul>
            <li className="list-item">
            Features
            </li>
            <li>
            FAQ
            </li>
            <li>
            Pricing
            </li>
            <li>
            Testimonials
            </li>
          </ul>
          </div>
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
          {/* hamburget menu start  */}
          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu style={{color : 'black'}}/>
            </a>
          </div>
      </nav>

      {/* hero section  */}
      {/* <section className="hero-section">
        <p>Welcome to </p>
        <h1>Thapa Technical</h1>
      </section> */}
    </>
  );
};

export default Navbar;