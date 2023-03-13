import React from "react";
import { NavLink } from "react-router-dom"

export default function Navbar() {
 // const [isOpen, setOpen] = useState(false);

 // const Navbar = () => {const [isOpen, setOpen] = useState (false)}

  return (
    <header className="bg-gray-800 md:sticky top-0 z-10">
      <div className="container  flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="title-font font-medium text-white mb-4 md:mb-0">
          <a href="#about" className="ml-3 text-xl">
            Arjun Dadhwal
          </a>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-black-700	flex flex-wrap items-center text-base justify-center display-block">
        <a href="#skills" className="mr-5 hover:underline hover:text-white hover:bg-gray-900 items-center">
            Skills
          </a>

          <a href="#projects" className="mr-5 hover:text-white hover:bg-gray-900">
            Projects
          </a>
          <a
          href="#contact"
          className="mr-5 hover:text-white hover:bg-gray-900">
          Contact Me
        </a>
        <a
          href=""
          className="mr-5 hover:text-white hover:bg-gray-900">
          Blog
        </a>
        </nav>
      </div>
    </header>
  );
}
