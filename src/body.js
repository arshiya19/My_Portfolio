import React, { useState, useEffect, useRef } from "react";
import Profilephoto from "./myprofile-pic.jpg";
import GitHubIcon from "./github.png";
import EmailIcon from "./email.png";
import LinkedinIcon from "./linkedin.png";


const textArray = ['a CS Grad!', 'a Technophile', 'into Machine Learning', 'into Frontend Development', 'into backend development', 'into Mobile App Development'];

function Body() {

    // const [svgDimensions, setSvgDimensions] = useState({ width: window.innerWidth, height: window.innerHeight });

    // useEffect(() => {
    //     const handleResize = () => {
    //         setSvgDimensions({ width: window.innerWidth, height: window.innerHeight });
    //     };

    //     window.addEventListener('resize', handleResize);

    //     return () => {
    //         window.removeEventListener('resize', handleResize);
    //     };
    // }, []);
    const rectHeight = 550; // Height of the rectangle
    const svgHeight = window.innerHeight; // Height of the SVG
    const rectY = (svgHeight - rectHeight) / 2;


    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentWordIndex(prevIndex => (prevIndex + 1) % textArray.length);
        }, 1000);
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
            {/* <FontAwesomeIcon className='gear logo-text' icon={faGear} style={{ color: '#C8102E', width: '50px', height: '50px' }} /> */}
            {/* <rect x={100} y={rectY} width={800} height={500} rx={20} ry={20} fill="#FBFFFE" fillOpacity="0.5" stroke="purple" strokeWidth="0.1" /> */}
            <circle
                cx={window.innerWidth - 800} cy={window.innerHeight / 2 - 313} r={10} strokeWidth="5" fill="white"
                style={{ animation: "spin 1s linear infinite" }}
            >
                <animate attributeName="stroke" values="red;blue;yellow;pink" dur="1.5s" repeatCount="indefinite" />
            </circle>

            {/* <style>
                {`
        @keyframes spin {
            0% {
                transform: rotate(0deg);
            }
            100% {
                transform: rotate(360deg);
            }
        }
        `}
            </style> */}
            <text x={655} y={100} fontSize="15" className=".gantari " fill="#283D7B" fontWeight="bold">
                Development in Progress
            </text>
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
            <a href="https://drive.google.com/file/d/1gICGydOLXjTSRpzP8MDhpIIFN6Tuy6r0/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
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
