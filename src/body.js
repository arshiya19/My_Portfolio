import React, { useRef, useEffect } from "react";
import './App.css';
import './header.js'
import './App.js'
import Photo from './mylogo.png';
import Header from "./header.js";
import Profilephoto from "./myprofile-pic.jpg"
import GitHubIcon from "./github.png";
import EmailIcon from "./email.png";
import LinkedinIcon from "./linkedin.png"

function Body({ renderRandomFlowers }: { renderRandomFlowers: any }): React.JSX.Element {

    const numberOfFlowers = 250; // Adjust the number of flowers as needed
    const flowerRefs = useRef([]);

    useEffect(() => {
        flowerRefs.current = Array(numberOfFlowers).fill(null).map(() => ({
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight
        }));
    }, [numberOfFlowers]);

    const checkCollision = (x: number, y: number, index: number): boolean => {
        const collisionThreshold = 50; // Adjust this value as needed
        for (let i = 0; i < index; i++) {
            const flower = flowerRefs.current[i];
            if (
                Math.abs(x - flower.x) < collisionThreshold &&
                Math.abs(y - flower.y) < collisionThreshold
            ) {
                return true; // Collision detected
            }
        }
        return false; // No collision
    };

    const renderFlowers = (): JSX.Element[] => {
        const flowers: JSX.Element[] = [];

        for (let i = 0; i < numberOfFlowers; i++) {
            let newX, newY;

            do {
                newX = Math.random() * window.innerWidth - 100;
                newY = Math.random() * window.innerHeight - 100;
            } while (checkCollision(newX, newY, i));

            flowerRefs.current[i] = { x: newX, y: newY };

            flowers.push(
                <g key={i} transform={`translate(${newX} ${newY})`}>
                    <svg id="flowers" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1800 1125">
                        <g id="flower-C">
                            <path id="petal-0"
                                d="M1506.38,96c.7.36,1.66,1,2.21,3.39.41,1.78-.33,2.89-.64,4.15-.41,1.68-.93,5-1.21,6a2.7,2.7,0,0,1-.13.36,20.57,20.57,0,0,0,2.17-2.94,13.89,13.89,0,0,1,2.28-3c1.42-1.49,4.11-2.52,6.19-1.49.52.26,2.91,1.07,3.67,1.56a8.82,8.82,0,0,1,3.29,3.22A5.92,5.92,0,0,1,1525,111c-.08.59-.68,4-.79,4.78a6.34,6.34,0,0,1-2.6,2.86,6.26,6.26,0,0,1-4,1.3c-1.73.13-5.14.33-6.19.38h-.09c1.23.28,4,1,5.54,1.34,1.25.31,5.85,2,6,5.23a37.12,37.12,0,0,1,0,4.85,5.94,5.94,0,0,1-1.37,3.58c-1.15,1.35-4.13,2.85-7.67,3.54s-4.64-.47-5.79-2.17a22.25,22.25,0,0,1-2.17-3.43c-.68-1.51-1-3.07-1.68-4.15a4.41,4.41,0,0,1-.38-.79c.17,1.32.66,4.12.77,5.67a7.71,7.71,0,0,1-1,4.38c-1,2.24-1.44,2.3-3.13,3.07a22.31,22.31,0,0,1-4,1.24,6,6,0,0,1-3.83-.2,8.88,8.88,0,0,1-3.67-2.8c-.59-.68-1.74-2.93-2.07-3.41A5.49,5.49,0,0,1,1487,130a11.56,11.56,0,0,1,2.76-3.06,15.27,15.27,0,0,0,3.42-2.89,5,5,0,0,1,1.49-1.15l-.11,0a13.41,13.41,0,0,0-3.79,1.68,11.4,11.4,0,0,1-3.94,1.1,4.81,4.81,0,0,1-5.33-2.27c-.89-1.65-.36-3.1-1.32-5.15a10.6,10.6,0,0,1-1.47-6.42c0-1.51-.37-2.69,2.46-4.19,2.06-1.1,3.54-1.08,6-.76a8.33,8.33,0,0,1,4.3,1.76c1.38.85,3.43,2.32,4.45,3a2.85,2.85,0,0,1-.16-.25c-.64-1.08-1.05-1.43-2-2.78a10.7,10.7,0,0,1-1.55-4.61c-.49-3.3,1.23-5.52,1.89-6.73,1-1.91,1.48-3.24,3.33-3.76a6.68,6.68,0,0,1,4.21.27C1501.67,93.91,1505.28,95.41,1506.38,96Z"
                                transform="translate(115.14 14.02)" style={{ fill: "#fff" }} />
                            <path id="middle"
                                d="M1505.38,110.74a.62.62,0,0,1-.71.42,20.88,20.88,0,0,0-1.84,3.34c-.16.36-.3.72-.43,1.06a1.13,1.13,0,0,0,.22.93c.32.3.94.18,1.48,0s.93-.67,1.44-1.06c1-.74,1.95-1.44,2.51-1.83a.63.63,0,0,1,0-.33.61.61,0,1,1,.4.77.61.61,0,0,1-.17-.08c-.56.39-1.53,1.08-2.49,1.81-.51.39-1,.75-1.45,1.07a.41.41,0,0,0,0,.37.44.44,0,0,0,.38.19l.4-.13c.57-.19,1.06-.35,1.52-.47,1.82-.48,3-.81,3.6-1v-.05a.61.61,0,1,1,.4.77.6.6,0,0,1-.35-.28c-.61.19-1.77.51-3.56,1-.45.12-.94.28-1.5.46l-.51.16c-.13.1-.22.21-.21.3s.09.16.2.22c2.34.07,4.43.21,5.41.28a.62.62,0,1,1,0,.43c-1.09-.08-3.58-.25-6.25-.3a.76.76,0,0,0-.48.44.81.81,0,0,0,.16.68c1.89,1.31,3.9,2.56,4.69,3a.61.61,0,1,1-.2.39c-.7-.43-2.42-1.49-4.14-2.66a.52.52,0,0,0-.5.08.27.27,0,0,0-.06.16c.39.57.79,1.14,1.15,1.65a34.72,34.72,0,0,0,3.33,3.74.6.6,0,0,1,.44,0,.61.61,0,1,1-.77.4l0-.06a35.12,35.12,0,0,1-3.38-3.8c-.37-.51-.78-1.1-1.17-1.68a.41.41,0,0,0-.4-.06.29.29,0,0,0-.11.23l.15.43c.24.68.46,1.26.57,1.67a26.32,26.32,0,0,0,1,2.93.61.61,0,0,1,.65.79.61.61,0,1,1-1-.6,26.94,26.94,0,0,1-1-3c-.11-.39-.32-1-.56-1.64l-.18-.49a.87.87,0,0,0-.74-.39.7.7,0,0,0-.45.26c-.15.63-.31,1.35-.45,2.09a24.07,24.07,0,0,0-.42,3.53.61.61,0,1,1-.43,0,24,24,0,0,1,.43-3.6c.09-.51.2-1,.31-1.48a.3.3,0,0,0-.15-.22.2.2,0,0,0-.18,0l-.36.68c-.57,1.07-1.06,2-1.21,2.24-.67,1.11-1.5,2.52-1.94,3.26a.62.62,0,1,1-.37-.22c.43-.74,1.27-2.15,1.94-3.26.14-.24.63-1.15,1.2-2.22l.41-.78a.28.28,0,0,0-.05-.21.33.33,0,0,0-.31-.07l-1.13,1.12-2.13,2a.61.61,0,1,1-.38-.35l.09,0,2.13-2,1.1-1.09a1.48,1.48,0,0,0,.22-1.14,1.15,1.15,0,0,0-.88-.51l-.6.07a24.34,24.34,0,0,0-2.51.43.54.54,0,0,1,0,.11.61.61,0,1,1-.08-.54,24.39,24.39,0,0,1,2.57-.44l.58-.07a.39.39,0,0,0,.19-.32.69.69,0,0,0-.34-.46l-4.59-1.22a.61.61,0,1,1,.11-.42l4.93,1.31c.09,0,.15-.05.17-.11a.77.77,0,0,0-.13-.54l-.6-.49c-1-.84-1.71-1.42-2.14-1.74a.61.61,0,1,1,.26-.35c.44.33,1.17.91,2.16,1.76.24.2.49.4.75.6a1,1,0,0,0,1.4-1.1l-.09-.33-.45-1.66-.52-1.9-.12,0a.62.62,0,1,1,.54-.09l.37,1.33.46,1.7.16.6a.44.44,0,0,0,.39,0,.6.6,0,0,0,.29-.35l0-.35c0-.73.11-1.53.17-2.31.11-1.33.24-2.58.31-3.23a.61.61,0,0,1,.27-1.15.61.61,0,0,1,.16,1.2c0,.45-.12,1.16-.2,2-.1,1.1-.22,2.4-.28,3.53l0,.44a.28.28,0,0,0,.31.1c.1-.25.21-.52.32-.78a21.6,21.6,0,0,1,1.86-3.39.61.61,0,1,1,1.07-.19Z"
                                transform="translate(115.14 14.02)" style={{ fill: "#d1c6c1" }} />
                        </g>
                    </svg>
                </g>
            );
        }

        return flowers;
    };

    const rectHeight = 500; // Height of the rectangle
    const svgHeight = window.innerHeight; // Height of the SVG

    // Calculate the y position to center the rectangle vertically
    const rectY = (svgHeight - rectHeight) / 2;
    return (

        <svg id="flowers" xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 ${window.innerWidth} ${window.innerHeight}`}>
            {renderFlowers()}
            {/* <image xlinkHref={Profilephoto} x={window.innerWidth - 200} y={20} width="180" height="180" /> */}
            <circle cx={window.innerWidth - 300} cy={window.innerHeight / 2 - 50} r={180} fill="url(#photo)" stroke="purple" strokeWidth="2" />
            <defs>
                <pattern id="photo" width="100%" height="100%" patternContentUnits="objectBoundingBox">
                    <image xlinkHref={Profilephoto} width="1" height="1" preserveAspectRatio="xMidYMid slice" />
                </pattern>
            </defs>
            {/* <rect x={100} y={window.innerHeight / 2 - 200} width={800} height={500} fill="#F7F2FA" fillOpacity="0.5" stroke="purple" strokeWidth="3" /> */}
            <rect x={100} y={rectY} width={800} height={500} rx={20} ry={20} fill="#F7F2FA" fillOpacity="0.5" stroke="purple" strokeWidth="1" />
            <text x={270} y={rectY + 75} fontSize="50" class="cinzel-decorative-black" fill="#AA37AF" stroke="#100011" strokeWidth="0.7">
                Hi, I'm Arshiya Naheed.
            </text>
            <text x={100} y={rectY + 130} fontSize="26" fill="black" width="760" class="cinzel-decorative-regular" >
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
