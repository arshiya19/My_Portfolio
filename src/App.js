import React, { useRef, useEffect } from "react";
import './App.css';
import './header.js'
import './body.js'
import './footer.js'
import Photo from './mylogo.png';
import Header from "./header.js";
import Body from "./body.js";
import Footer from "./footer.js"
import Aboutme from "./pages/Aboutme.js";
import Projects from "./pages/projects.js"
import { BrowserRouter as Router, Route,Routes, Switch } from 'react-router-dom';

function App() {
  const renderRandomFlowers = () => {
    // Define how you want to render random flowers
    // For now, just return null
    return null;
  };
  return (
    <Router>
      <div>
        <Header />
        <Body renderRandomFlowers={renderRandomFlowers} />
        <Routes>
          <Route exact path="/Aboutme" component={Aboutme} />
          <Route exact path="/project" component={Projects} />
          {/* Add more routes as needed */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
export default App;
