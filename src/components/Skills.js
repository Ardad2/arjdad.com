import React from "react";
import {skills} from "../data";


export default function Skills() {
  return (
    <section id="skills" className="text-white-900 body-font bg-f5f5f5">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="text-center mb-10">
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-black mb-4">
            Skills
          </h1>
        </div>
      </div>
<div className="">

          {skills.map((skill) => (

<div>
<div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          <p className="text-black">Languages: </p>
          {skill.languages.map((languages) => (
            <div key={languages} className="p-2 ">
              <div className="bg-white rounded flex p-2 h-full">
                <span className="title-font font-medium text-black">
                  {languages}
                </span>
              </div>
            </div>
          ))}``
        </div>

        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
        <p className="text-black">Frameworks: </p>
          {skill.frameworks.map((frameworks) => (
            <div key={frameworks} className="p-2 sm:">
              <div className="bg-white rounded flex p-2 h-full">
                <span className="title-font font-medium text-black">
                  {frameworks}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
        <p className="text-black">Tools: </p>
          {skill.tools.map((tools) => (
            <div key={tools} className="p-2 sm:">
              <div className="bg-white rounded flex p-2 h-full">
                <span className="title-font font-medium text-black">
                  {tools}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
        <p className="text-black">Database Tech: </p>
          {skill.databasetech.map((databasetech) => (
            <div key={databasetech} className="p-2 ">
              <div className="bg-white rounded flex p-2 h-full">
                <span className="title-font font-medium text-black">
                  {databasetech}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-">
        <p className="text-black">Concepts: </p>
          {skill.concepts.map((concepts) => (
            <div key={concepts} className="p-2">
              <div className="bg-white rounded flex p-2 h-full">
                <span className="title-font font-medium text-black">
                  {concepts}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
        <p className="text-black">Others: </p>
          {skill.others.map((others) => (
            <div key={others} className="p-2">
              <div className="bg-white rounded flex p-2 h-full">
                <span className="title-font font-medium text-black">
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
