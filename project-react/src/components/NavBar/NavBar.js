import './style.css'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const navbar_options = [
  {path: 'map', name: 'Mapa'},
  {path: 'about', name: 'Sobre'},
  {path: 'place-registry', name: 'Items'},
  {path: 'places', name: 'Locais'}
]

function NavBar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(!false);

  function showButton() {
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
              Mapcife <i className = 'fa-solid fa-map'/>
            </Link>
          </div>
          <ul className = {click ? 'nav-menu active' : 'nav-menu'}>
            {navbar_options.map((item) => {
              return (
                <li className = 'nav-item'>
                  <Link to = {item.path} className = 'nav-links' onClick = {closeMobileMenu}>
                    {item.name}
                  </Link>
                </li>
              );})}
          </ul>
        </div>        
    </nav>
    </header>      
  )
}

export default NavBar