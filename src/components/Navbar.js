import React, { useState } from "react";
import { Link } from "react-router-dom"

import { FaSun, FaMoon } from "react-icons/fa"
import useDarkMode from "../hooks/useDarkMode";



export default function Navbar() {
  const [isOpen, setOpen] = useState(false);

  return (
    <header className="bg-white dark:bg-23272f md:sticky top-0 z-10 backdrop-filter backdrop-blur-lg border-b dark:border-23272f border-gray-200 firefox:bg-opacity-90">
      <div className="container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center">

        <Link to="/" className="title-font font-medium text-white mb-4 md:mb-0 ml-3 text-xl text-gray-900 dark:text-white">
            Arjun Dadhwal
        </Link>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4  md:border-gray-700 flex flex-wrap items-center text-base justify-center ">
        <Link to="/Blog" className = "p-2 mr-4 inline-flex px-3 py-2 rounded-lg border-white dark:border-23272f text-gray-700 border rounded-full hover:bg-gray-200 duration-300 dark:text-white transition-colors" >
          Blog
        </Link>
        <Link to="/DSA" className = "p-2 mr-4 inline-flex px-3 py-2 rounded-lg border-white dark:border-23272f text-gray-700 border rounded-full hover:bg-gray-200 duration-300 dark:text-white transition-colors" >
          Data Structures and Algorithms
        </Link>
        <div className = "text-2xl button text-gray-700 dark:text-white">
                 <ThemeIcon/>
                </div>
        </nav>
      </div>

  
    </header>
    
  );
}

const ThemeIcon = () => {
  const [darkTheme, setDarkTheme] = useDarkMode();
  const handleMode = () => setDarkTheme(!darkTheme);
  return (
    <span onClick={handleMode}>
      {darkTheme ? (
        <FaSun size='24' className='top-navigation-icon' />
      ) : (
        <FaMoon size='24' className='top-navigation-icon' />
      )}
    </span>
  );
};
