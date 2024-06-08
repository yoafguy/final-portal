import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import AmaLogo from './blacklogo1.png';
import { FaBars, FaTimes } from 'react-icons/fa';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className='header'>
      <div className='nav'>
        <Link to='/home'>
          <img className='login__logo' src={AmaLogo} alt="AmaLogo" />
        </Link>
        
        {isMobile ? (
          <div className='menu-icon' onClick={toggleMenu}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </div>
        ) : (
          <Link to='/home'>
            <button className='nav-button'>Sign In</button>
          </Link>
        )}
      </div>
      {isMobile && menuOpen && (
        <div className='menu'>
          <Link to='/home'>
            <button className='nav-button'>Back to Home</button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Header;
