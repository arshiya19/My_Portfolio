import React, { useState, useEffect, useRef } from "react";
import Profilephoto from "./myprofile-pic.jpg";
import GitHubIcon from "./github.png";
import EmailIcon from "./email.png";
import LinkedinIcon from "./linkedin.png";
import { Typed } from "react-typed";
import { Link } from "react-router-dom";


const textArray = ['a CS Grad!','a Technophile','into Machine Learning','into Frontend Development', 'into backend development', 'into Mobile App Development'];
    const rectHeight = 550; // Height of the rectangle

function Body() {
    
    const svgHeight = window.innerHeight; // Height of the SVG

    // Calculate the y position to center the rectangle vertically
    const rectY = (svgHeight - rectHeight) / 2;
    const [currentWordIndex, setCurrentWordIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentWordIndex(prevIndex => (prevIndex + 1) % textArray.length);
        }, 2000);

        return () => clearInterval(intervalId);
    }, []);
    


    return (
        <svg id="body" xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 ${window.innerWidth} ${window.innerHeight}`}>
            <circle cx={window.innerWidth - 300} cy={window.innerHeight / 2 - 50} r={180} fill="url(#photo)" stroke="#FF0000" strokeWidth="0.9" />
            <defs>
                <pattern id="photo" width="100%" height="100%" patternContentUnits="objectBoundingBox">
                    <image xlinkHref={Profilephoto} width="1" height="1" preserveAspectRatio="xMidYMid slice" />
                </pattern>
            </defs>
            {/* <rect x={100} y={rectY} width={800} height={500} rx={20} ry={20} fill="#FBFFFE" fillOpacity="0.5" stroke="purple" strokeWidth="0.1" /> */}
            <text x={200} y={rectY + 65} fontSize="50" className=".gantari" fill="#283D7B" fontWeight="bold">
                Hey,
            </text>
            <text x={200} y={rectY + 130} fontSize="50" className=".gantari" fill="#283D7B" fontWeight="bold">
                I'm
            </text>
            <text x={280} y={rectY + 130} fontSize="50" className=".gantari" fill="#AA37AF" fontWeight="bold">
                Arshiya Naheed.
            </text>
            <text x={200} y={rectY + 185} fontSize="30" fill="#283D7B" fontWeight="bold">
            I Am 
            </text>
            <text x={270} y={rectY + 185} fontSize="30" fill="#AA37AF" fontWeight="bold">
             {textArray[currentWordIndex]}
            </text>
            <a href="https://drive.google.com/file/d/1Pu8tUYPxhBfjA7gz3VyMky7ajKHxQn5x/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                <rect x={200} y={rectY + 250} width={135} height={50} fill="#7D03AB" rx={10} ry={10} />
                <text x={215} y={rectY + 280} fontSize="20" fill="white" className=".gantari" fontWeight="bold">
                    My Resume
                </text>
            </a>
            <g>
                {/* Thin line inside the box */}
                <line x1={150} y1={rectY + 350} x2={750} y2={rectY + 350} stroke="purple" strokeWidth="0.4" />

                {/* Icons */}
                <a href="https://github.com/arshiya19" target="_blank" rel="noopener noreferrer" >
                    <image href={GitHubIcon} x={450} y={rectY + 370} width="70" height="70" title="Visit GitHub" />
                </a>
                <a href="mailto:arshiyanaheed98@gmail.com">
                    <image href={EmailIcon} x={550} y={rectY + 370} width="70" height="70" />
                </a>
                <a href="https://www.linkedin.com/in/arshiya-naheed-70956418a/" target="_blank" rel="noopener noreferrer">
                    <image href={LinkedinIcon} x={350} y={rectY + 370} width="60" height="60" />
                </a>
            </g>
        </svg>
    );
}

export default Body;
