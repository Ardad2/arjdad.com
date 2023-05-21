import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import About from "../components/About";
import Contact from "../components/Contact";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import Skills from "../components/Skills";


export default function Home() {

  useEffect( () => {document.title = 'Arjun Dadhwal - Software Developer'}, []);

  return (
    <main className="text-black dark:text-white bg-white-100 body-font dark:bg-23272f" >
      <Navbar />
      <About/>
      <Skills />
      <Projects/>
      <Contact />
    </main>
  );
}
