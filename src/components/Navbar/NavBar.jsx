import React, { useState } from 'react';
import './NavBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
const NavBar = () => {
const [isOpen, setIsOpen] = useState(false);
const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle the menu
  };
  return (
    <nav className="Nav-Container">
        <a className="title" href="/">
           Humnashin Khan
        </a>
        <button className="hamburger" onClick={toggleMenu}>
        <FontAwesomeIcon icon={isOpen ? faTimes : faBars} className="hamburger-icon" />
      </button>

        <div className={`Menu ${isOpen ? "open" : ""}`}> 
            <ul className="Menu-item">
               <li>
                <a href="#home"><span>Home</span></a>
                </li> 
                <li>
                <a href="#about">About</a>
                </li> 
                <li>
                <a href="#skill">Skill</a>
                </li> 
                <li>
                <a href="#projects">Project</a>
                </li> 
                <li>
                <a href="#contact">Contact</a>
                </li> 
            </ul>
        </div>
    </nav>
  );
}

export default NavBar;