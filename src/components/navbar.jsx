import React, { useState, useEffect } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import Logo from './logo';
import Filter from './filter';


function ResponsiveAppBar() {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowWidth <= 720;



  return (
    <div className="navbarContainer">
      <nav className="navbar">
        {isMobile && <GiHamburgerMenu />}
        <Logo />
        <ul className="nav-links">
          <li>
            <a href="/" className="nav-link">
              Home
            </a>
          </li>
          <li>
            <a href="/signin" className="nav-link">
              Sign In
            </a>
          </li>
          <li>
            <a href="/signup" className="nav-link">
              Sign Up
            </a>
          </li>
        </ul>
        <Filter />
      </nav>
    </div>
  );
}
export default ResponsiveAppBar;