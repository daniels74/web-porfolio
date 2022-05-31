import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import "./Navbar.css"
//import { Link } from 'react-router-dom';

const Navbar = () => {

const [navLinkOpen, navLinkToggle] = React.useState(false);

function handleNavLinksToggle() {
    navLinkToggle(!navLinkOpen)
}

  return (
    <nav>
        <div className="logo">
            <a href="/" className="puff-in-center">
                <FontAwesomeIcon icon="fa-solid fa-user-astronaut" />
                Daniel Flores Hurtado
            </a>
        </div>
        <ul className= {navLinkOpen ? "navlinks active" : "navlinks"}>
            <li className="link">
                <a href="About" className="fade-in">About</a>
            </li>
            <li className="link">
                <a href="Projects" className="fade-in">Projects</a>
            </li>
            <li className="link">
                <a href="Contact" className="fade-in">Contact</a>
            </li>
        </ul>
        <div className="hamburger-toggle" onClick={handleNavLinksToggle} >
            <FontAwesomeIcon icon={"bars"}></FontAwesomeIcon>
        </div>
    </nav>
  )
}

export default Navbar