// Header.js
import React from "react";
import "./App.css";
import Photo from "./mylogo.png";
import GitHubIcon from "./github.png";
import EmailIcon from "./email.png";
import LinkedinIcon from "./linkedin.png"
import customLogo from './logo.svg'; // Adjust the path if necessary


function Header() {
    return (
        <header className="header cinzel-decorative-regular">
            <nav className="nav">
                <ul className="nav-list">
                <li className="nav-item">Home   </li>
                <li className="nav-item">About Me</li>
                    <li className="nav-item">Projects</li>
                </ul>
            </nav>

        </header>
    );
}

export default Header;





