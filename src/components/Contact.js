import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";


export default function Contact() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "test", name, email, message }),
    })
      .then(() => alert("Message sent!"))
      .catch((error) => alert(error));
  }

  return (
    <section id="contact" className="text-white-900 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="text-center mb-20">
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Contact Me
          </h1> 
          <p className="mb-8 leading-relaxed text-grey">
          You can contact me on <a href="https://www.linkedin.com/in/arjundadhwal" className="text-white">LinkedIn</a> or <a href="mailto:adadhwal@asu.edu" className="text-white">send me an email</a> . I'll try to respond as soon as possible, hopefully within 24 hours. 
          </p>
        </div>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 	flex flex-wrap items-center text-base justify-center">
        <a href="#skills" className="mr-5 hover:text-white">
        <FaFacebook />
          </a>
          <a href="#projects" className="mr-5 hover:text-white">
          <FaTwitter />
          </a>
          <a
          href="#contact"
          className="mr-5 hover:text-white">
           <FaInstagram />
        </a>
        <a
          href=""
          className="mr-5 hover:text-white">
           <FaLinkedin />
        </a>
        <a
          href=""
          className="mr-5 hover:text-white">
           <FaGithub />
        </a>
        </nav>
        
      </div>

        </section>
  );
}
