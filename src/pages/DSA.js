import React, { useEffect } from "react";

import Navbar from "../components/Navbar";
import Contact from "../components/Contact";



export default function DSA() {

  useEffect( () => {document.title = 'Arjun Dadhwal - Software Developer'}, []);

  return (
    <main className="text-gray-400 bg-white-100 body-font " >
      <Navbar />
      <Contact />
    </main>
  );
}
