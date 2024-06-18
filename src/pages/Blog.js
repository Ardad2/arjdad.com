import React, { useEffect } from "react";

import Navbar from "../components/Navbar";
import Contact from "../components/Contact";
//import About from '../components/About';
import blogPlaceholder from "../components/blogPlaceholder";

export default function Blog() {

  useEffect( () => {document.title = 'Arjun Dadhwal - Software Developer'}, []);

  return (
    <main className="text-black dark:text-white bg-white-100 body-font dark:bg-23272f" >
      <Navbar />
      <blogPlaceholder/>
      <Contact />
    </main>
  );
}
