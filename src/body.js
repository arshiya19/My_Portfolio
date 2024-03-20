import React from "react";
import Profilephoto from "./myprofile-pic.jpg";
import GitHubIcon from "./github.png";
import EmailIcon from "./email.png";
import LinkedinIcon from "./linkedin.png";

function Body() {
    const rectHeight = 550; // Height of the rectangle
    const svgHeight = window.innerHeight; // Height of the SVG

    // Calculate the y position to center the rectangle vertically
    const rectY = (svgHeight - rectHeight) / 2;

    return (
        <svg id="body" xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 ${window.innerWidth} ${window.innerHeight}`}>
            <circle cx={window.innerWidth - 300} cy={window.innerHeight / 2 - 50} r={180} fill="url(#photo)" stroke="purple" strokeWidth="0.2" />
            <defs>
                <pattern id="photo" width="100%" height="100%" patternContentUnits="objectBoundingBox">
                    <image xlinkHref={Profilephoto} width="1" height="1" preserveAspectRatio="xMidYMid slice" />
                </pattern>
            </defs>
            {/* <rect x={100} y={rectY} width={800} height={500} rx={20} ry={20} fill="#FBFFFE" fillOpacity="0.5" stroke="purple" strokeWidth="0.1" /> */}
            <text x={200} y={rectY + 65} fontSize="50" className=".gantari" fill="#283D7B" >
                Hi,There
            </text>
            <text x={200} y={rectY + 130} fontSize="50" className=".gantari" fill="#AA37AF" >
                I'm Arshiya Naheed.
            </text>
            <text x={100} y={rectY + 150} fontSize="26" fill="black" width="760" className="cinzel-decorative-regular" >
                <tspan x={150} dy="1.2em">
                    A master's student in CS with a focus on both <tspan fontStyle="italic">Machine Learning</tspan> and 
                </tspan>
                <tspan x={150} dy="1.2em">
                    <tspan fontStyle="italic">Full-stack Development. </tspan>I love creating user-friendly websites and 
                </tspan>
                <tspan x={150} dy="1.2em">
                    mobile apps, and I'm really passionate about machine learning. 
                </tspan>
                <tspan x={150} dy="1.2em">
                    In my free time, I enjoy playing around with data and models, 
                </tspan>
                <tspan x={150} dy="1.2em">
                    always looking for new ways to learn and improve.
                </tspan>
            </text>
            <g>
                {/* Thin line inside the box */}
                <line x1={150} y1={rectY + 390} x2={850} y2={rectY + 390} stroke="purple" strokeWidth="0.4" />

                {/* Icons */}
                <a href="https://github.com/arshiya19" target="_blank" rel="noopener noreferrer" >
                    <image href={GitHubIcon} x={450} y={rectY + 400} width="70" height="70" title="Visit GitHub" />
                </a>
                <a href="mailto:arshiyanaheed98@gmail.com">
                    <image href={EmailIcon} x={550} y={rectY + 400} width="70" height="70" />
                </a>
                <a href="https://www.linkedin.com/in/arshiya-naheed-70956418a/" target="_blank" rel="noopener noreferrer">
                    <image href={LinkedinIcon} x={350} y={rectY + 400} width="60" height="60" />
                </a>
            </g>
        </svg>
    );
}

export default Body;
