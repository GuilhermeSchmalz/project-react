import './style.css'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const navbar_options = {home: 'Mapcife', about: 'Sobre', items: 'Itens', login: 'Login'}

function NavBar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(!false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false)
    } else {
      setButton(true)
    }
  };

  useEffect(() => {
    showButton();
  });

  window.addEventListener('resize', showButton)

  return (
    <header>
      <nav className = 'navbar'>
        <div className = 'navbar-container'>
          <div className = 'menu-icon' onClick={handleClick}>
            <i className = {click ? 'fa-solid fa-x' : 'fa-solid fa-bars'}/>
          </div>
          <div className = 'navbar-title'>
            <Link to = '/' className = 'navbar-logo' onClick = {closeMobileMenu}>
              {navbar_options.home} <i className = 'fa-solid fa-map'/>
            </Link>
          </div>
          <ul className = {click ? 'nav-menu active' : 'nav-menu'}>
            <li className = 'nav-item'>
              <Link to = '/' className = 'nav-links' onClick = {closeMobileMenu}>
                {navbar_options.home}
              </Link>
            </li>
            <li className = 'nav-item'>
              <Link to = '/about' className = 'nav-links' onClick = {closeMobileMenu}>
                {navbar_options.about}
              </Link>
            </li>
            <li className = 'nav-item'>
              <Link to = '/items' className = 'nav-links' onClick = {closeMobileMenu}>
                {navbar_options.items}
              </Link>
            </li>
            <li className = 'nav-item'>
              <Link to = '/login' className = 'nav-links' onClick = {closeMobileMenu}>
                {navbar_options.login}
              </Link>
            </li>
          </ul>
        </div>        
    </nav>
    </header>      
  )
}

export default NavBar