import React, { useEffect } from "react";

import Navbar from "../components/Navbar";
import Contact from "../components/Contact";
import blogPlaceholder from '../components/About2';


export default function Blog() {

  useEffect( () => {document.title = 'Arjun Dadhwal - Software Developer'}, []);

  return (
    <main className="text-gray-400 bg-white-100 body-font " >
      <Navbar />
      <blogPlaceholder/>
      <Contact />
    </main>
  );
}
