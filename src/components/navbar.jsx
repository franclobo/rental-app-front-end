import React, { useState, useEffect } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import Logo from './logo';
import Filter from './filter';
import '../styles/index.scss'


function ResponsiveAppBar() {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [navVisible, setNavVisible] = useState(false);

  const toggleNavVisibility = () => {
    setNavVisible(!navVisible);
  };

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowWidth <= 720;


  return (
    <>
      <GiHamburgerMenu className="hamburger" onClick={toggleNavVisibility} />
      {navVisible &&
    <div className="navbarContainer">
      <nav className="navbar">
        { isMobile }
        <Logo className="logo"/>
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
}
    </>
  );
}
export default ResponsiveAppBar;
