import React from "react";
import "./App.css";


import Cover from './Cover';
import About from './about';
import Experience from "./experience";
import Skill from './skill';
import Portfolio from './portfolio';
import Footer from './footer';



function App() {
  return (
    <>
      <Cover />
      {/* <About /> */}
      <Skill />
      <Experience />
      <Portfolio />
      <Footer />
    </>
  );
}

export default App;
