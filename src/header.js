import React from "react";
import { Link } from 'react-scroll';
import "./App.css";

function Header() {
    return (
        <header className="header .gantari" style={{ position: "fixed", top: 0, left: 0, width: "100%", zIndex: 100 }}>
            <ul>
                <li className="header-bar"><Link to="home" smooth={true} duration={1000}>Home</Link></li>
                <li className="header-bar"><Link to="about" smooth={true} duration={1000}>About</Link></li>
                <li className="header-bar"><Link to="projects" smooth={true} duration={1000}>Projects</Link></li>
            </ul>
        </header>
    );
}

export default Header;







