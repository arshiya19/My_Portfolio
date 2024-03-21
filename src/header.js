// Header.js
import React from "react";
import "./App.css";
import { Link } from 'react-router-dom';


function Header() {
    return (
        <header className="header .gantari">
            <ul>
                <li className="header-bar"> Home </li>
                <li className="header-bar"> About </li>
                <li className="header-bar"> Projects </li>
            </ul>
        </header>
    );
}

export default Header;





