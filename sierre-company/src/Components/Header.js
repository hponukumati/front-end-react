import React from 'react';

import logo from './logo-white.png';
/*import { useSpring, animated } from 'react-spring';*/


const Header = () => {
    /*const fadeAnimation = useSpring({
      from: { opacity: 0 },
      to: { opacity: 1 },
      config: { duration: 1000 },
    });
     <h1>Sierre.</h1>*/

  return (
    <div className='header'>
      <nav className="navbar">
      <div className="logo-container">
          <img src={logo} alt="Sierre." className='logo'/>
      </div>
        <ul className="nav-links">
          <li className="nav-item">Home</li>
          <li className="nav-item">Portfolio</li>
          <li className="nav-item">Services</li>
          <li className="nav-item">Contact</li>
        </ul>
      </nav>
      <div className="hero">
        <h2 className="hero-title">Capture Beauty. Inspire Life.</h2>
        <p className="hero-subtitle">Join us in capturing the world's beauty through photography.</p>
        <button className="hero-button">Explore More</button>
      </div>
      </div>
  );
};

export default Header;
