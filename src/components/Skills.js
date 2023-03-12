import React from "react";
import {skills} from "../data";


export default function Skills() {
  return (
    <section id="skills" className="text-white-900 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="text-center mb-20">
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Skills
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
          </p>
        </div>
        




      </div>
<div className="">


          {skills.map((skill) => (

<div>
<div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          <p>Languages: </p>
          {skill.languages.map((languages) => (
            <div key={languages} className="p-2 ">
              <div className="bg-gray-800  flex p-2 h-full">
                <span className="title-font font-medium text-white">
                  {languages}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
        <p>Frameworks: </p>
          {skill.frameworks.map((frameworks) => (
            <div key={frameworks} className="p-2 sm:">
              <div className="bg-gray-800  flex p-2 h-full">
                <span className="title-font font-medium text-white">
                  {frameworks}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
        <p>Tools: </p>
          {skill.tools.map((tools) => (
            <div key={tools} className="p-2 sm:">
              <div className="bg-gray-800  flex p-2 h-full">
                <span className="title-font font-medium text-white">
                  {tools}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
        <p>Database Tech: </p>
          {skill.databasetech.map((databasetech) => (
            <div key={databasetech} className="p-2 ">
              <div className="bg-gray-800  flex p-2 h-full">
                <span className="title-font font-medium text-white">
                  {databasetech}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-">
        <p>Concepts: </p>
          {skill.concepts.map((concepts) => (
            <div key={concepts} className="p-2">
              <div className="bg-gray-800  flex p-2 h-full">
                <span className="title-font font-medium text-white">
                  {concepts}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
        <p>Others: </p>
          {skill.others.map((others) => (
            <div key={others} className="p-2">
              <div className="bg-gray-800  flex p-2 h-full">
                <span className="title-font font-medium text-white">
                  {others}
                </span>
              </div>
            </div>
          ))}
        </div>





        </div>



          ))}




          </div>

    </section>
  );
}
