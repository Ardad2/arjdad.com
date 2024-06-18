import React from "react";
import { Link } from "react-router-dom"


export default function blogPlaceHolder() {
  return (
    <section id="about" className="rounded-full">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center ">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium">
          Hey, I'm Arjun Dadhwal!👋🏻
          </h1>
          <br/>
          <br/>
          <p className="mb-8 leading-relaxed">

          I'm a 4+1 graduate student majoring in Computer Science at Arizona State University. I'm passionate about Software Development and enjoy learning more about my field by developing applications that solve real world problems.
          </p>
          <p className="mb-8 leading-relaxed">
          Actively seeking Full Time Software Engineering opportunities for the Summer of 2025.
          </p>
                  <Link to="https://drive.google.com/file/d/1ASG6yt-iyPQWGUIb6FP3H_5rGuz8HQB9/view?usp=sharing" className = "p-2 mr-4 inline-flex px-3 py-2 rounded-lg border-white dark:border-23272f text-gray-700 border rounded-full bg-gray-200 duration-300 dark:text-white transition-colors" >
          Resume
        </Link>
        </div>

        <div className="">
          <img
              className="shadow-lg rounded-full max-w-full h-auto align-middle border-solid border-grey-900 "
              alt="Arjun"
              src="https://i.imgur.com/3zDsMXv.jpg"
            />
        </div>
      </div>
    </section>
  );
}