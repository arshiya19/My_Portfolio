import React, { useRef, useEffect } from "react";
import './App.css';
import './header.js'
import './body.js'
import './footer.js'
import Photo from './mylogo.png';
import Header from "./header.js";
import Body from "./body.js";
import Footer from "./footer.js"
import Profilephoto from "./myprofile-pic.jpg"

function App() {
  const renderRandomFlowers = () => {
    // Define how you want to render random flowers
    // For now, just return null
    return null;
  };
  return (
    <div>
      <Header />
      <Body renderRandomFlowers={renderRandomFlowers} />
      <div className="profile-picture">
                <img src={Profilephoto} alt="Your Picture" />
            </div>
      <Footer />
    </div>
  );
}
export default App;
