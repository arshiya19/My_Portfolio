// import React, { useRef, useEffect } from "react";
// import './App.css';
// import './header.js'
// import './body.js'
// import './footer.js'
// import Photo from './mylogo.png';
// import Header from "./header.js";
// import Body from "./body.js";
// import Footer from "./footer.js"
// import Aboutme from "./pages/Aboutme.js";
// import Projects from "./pages/projects.js"
// import particlesJS from "./particles.json"

// import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom';

// function App() {
//   /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
//   particlesJS.load('particles-js', 'assets/particles.json', function () {
//     console.log('callback - particles.js config loaded');
//   });

//   return (
//     <Router>
//       <div>
//         <Header />
//         <Routes>
//           <Route exact path="/Aboutme" component={Aboutme} />
//           <Route exact path="/project" component={Projects} />
//           {/* Add more routes as needed */}
//         </Routes>
//         <Footer />
//       </div>
//     </Router>
//   );
// }
// export default App;

// import React, { useRef, useEffect } from "react";
// import './App.css';
// import './header.js'
// import './body.js'
// import './footer.js'
// import Photo from './mylogo.png';
// import Header from "./header.js";
// import Body from "./body.js";
// import Footer from "./footer.js"
// import Aboutme from "./pages/Aboutme.js";
// import Projects from "./pages/projects.js"
// import particlesBackground from "./components/particlesBackground.js" 

// import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom';

// function App() {
//   return (
//     <Router>
//       <div>
//         <particlesBackground />
//         <Header />
//         <Routes>
//           <Route exact path="/Aboutme" component={Aboutme} />
//           <Route exact path="/project" component={Projects} />
//           {/* Add more routes as needed */}
//         </Routes>
//         <Footer />
//       </div>
//     </Router>
//   );
// }
// export default App;

// import React from "react";
// import './App.css';
// import Header from "./header.js";
// import Footer from "./footer.js";
// import Aboutme from "./pages/Aboutme.js";
// import Projects from "./pages/projects.js";
// import ParticlesComponent from "./components/particles.js";
// import Body from "./body.js";

// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// function App() {
//   return (
//     <Router>
//       <div>
//         <ParticlesComponent id="particles" />

//         <div className="content">
//           <Header />
//           <Body /> 
//           <Footer />
//         </div>
//       </div>
//     </Router>
//   );
// }

// export default App;

import React from "react";
import './App.css';
import Header from "./header.js";
import Footer from "./footer.js";
import Aboutme from "./pages/Aboutme.js";
import Projects from "./pages/projects.js";
import ParticlesComponent from "./components/particles.js";
import Body from "./body.js";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <ParticlesComponent id="particles" />
        <div className="content">
          <Header />
          <Routes>
            <Route path="/" element={<Body />} />
            <Route path="/About" element={<Aboutme />} />
            <Route path="Projects" element={<Projects />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;

// import React from "react";
// import './App.css';
// import Header from "./header.js";
// import Footer from "./footer.js";
// import Aboutme from "./pages/Aboutme.js";
// import Projects from "./pages/projects.js";
// import ParticlesComponent from "./components/particles.js";
// import Body from "./body.js";

// function App() {
//   return (
//     <div>
//       <Header />
//       <Body />
//       <Aboutme />
//       <Projects />
//       <Footer />
//     </div>
//   );
// }

// export default App;





