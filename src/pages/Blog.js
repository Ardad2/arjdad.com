import React, { useEffect } from "react";

import Navbar from "../components/Navbar";



export default function Blog() {

  useEffect( () => {document.title = 'Arjun Dadhwal - Software Developer'}, []);

  return (
    <main className="text-gray-400 bg-white-100 body-font " >
      <Navbar />
    </main>
  );
}
