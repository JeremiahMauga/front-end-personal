import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import 'font-awesome/css/font-awesome.min.css';
import LoginButton from './LoginButton'
import { getInventoryByID } from '../api/UserAPI';


const Navbar = ({ isLoggedIn, user, handleLogout }) => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);
  
  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            GameKnight &nbsp;
            <i class='fas fa-dragon' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/getgems'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Game Search
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/freegames'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Free Games
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/gamesonsale'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Games on Sale
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;