// Header.js
import React from "react";
import "./App.css";
import Photo from "./mylogo.png";
import GitHubIcon from "./github.png";
import EmailIcon from "./email.png";
import LinkedinIcon from "./linkedin.png"


function Header() {
    return (
        <header className="header">
            <nav className="nav">
                <ul className="nav-list">
                <li className="nav-item">Home</li>
                <li className="nav-item">About</li>
                <li className="nav-item">Education</li>
                    <li className="nav-item">Skills</li>
                    <li className="nav-item">Projects</li>
                    <li className="nav-item">
                        <a href="https://github.com/arshiya19" target="_blank" rel="noopener noreferrer">
                        <img src={GitHubIcon} alt="GitHub" style={{ width: "25px", height: "25px" }} title= "GitHub" />
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="mailto:arshiyanaheed98@gmail.com">
                        <img src={EmailIcon} alt="GitHub" style={{ width: "25px", height: "25px" }} title= "Email" />
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="https://www.linkedin.com/in/arshiya-naheed-70956418a/" target="_blank" rel="noopener noreferrer">
                        <img src={LinkedinIcon} alt="GitHub" style={{ width: "25px", height: "25px" }} title= "LinkedIn"/>
                        </a>
                    </li>
                </ul>
            </nav>

        </header>
    );
}

export default Header;





