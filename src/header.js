// Header.js
import React from "react";
import "./App.css";
import { Link } from 'react-router-dom';


function Header() {
    return (
        <header className="header cinzel-decorative-regular">
            <nav className="nav">
                <ul className="nav-list">
                    <li className="nav-item">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/projects">Projects</Link>
                    </li>
                </ul>
            </nav>

        </header>
    );
}

export default Header;





