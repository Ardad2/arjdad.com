import React from "react";
import { FaRegCaretSquareDown } from "react-icons/fa";
import { projects } from "../data";



function displayProjects(display) {
  if (display === "Show All")
  {
    return (<React.Fragment>
      {projects.map((project) => (



         <a href={project.link} key={project.image} className="sm:w-1/4 sm:h-1/4 p-2">
          <div className="flex relative">
            <img
              alt="gallery"
              className="shadow-lg rounded-md absolute inset-0 w-full h-full object-cover object-center"
              src={project.image}     
            />
            <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
              <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                {project.subtitle}
              </h2>
              <h1 className="title-font text-lg font-medium text-white mb-3">
                {project.title}
                <p className="leading-relaxed">{project.description}</p>
              </h1>
            </div>
          </div>
          <p>{project.title}</p>
        </a>

      )
      
      )}

</React.Fragment>)
  }
  else if (display != "Show All")
  {
  return (<React.Fragment>
          {projects.filter((project) => project.type === display) .map((project) => (


  
             <a href={project.link} key={project.image} className="sm:w-1/4 sm:h-1/4 p-2">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={project.image}     
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                    {project.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {project.title}
                  </h1>
                  <p className="leading-relaxed">{project.description}</p>
                </div>
              </div>
              <p>{project.title}</p>
            </a>

          )
          
          )}

  </React.Fragment>)
  }
  else {
    return (<p>Nope</p>)
  }
}

export default class Projects extends React.Component {

  constructor()
  {
    super(); 
    this.state = {
      displayState: "Show All"
    }
    }

  render () {
  return (
    <section id="projects" className="text-gray-900 bg-white-900 body-font rounded-lg">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-gray">
            Select Projects
          </h1>

          <div className="flex flex-row w-full">
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4	flex flex-wrap items-center  text-gray justify-center">

          <button onClick={() => {this.setState({displayState: "Show All"})}} className="mr-5 hover:text-blue-600">

<p>Show All</p>
</button>

        <button onClick={() => {this.setState({displayState: "frontEnd"})}} className="mr-5 hover:text-blue-600">
        <p>Front End</p>
          </button>


          <button onClick={() => {this.setState({displayState: "backEnd"})}} className="mr-5 hover:text-blue-600">
            
          <p>Back End</p>
          </button>

        <button onClick={() => {this.setState({displayState: "fullStack"})}} className="mr-5 hover:text-blue-600">

        <p>Full Stack</p>
        </button>
        
        <button onClick={() => {this.setState({displayState: "Mobile"})}} className="mr-5 hover:text-blue-600">
        <p>Mobile</p>
        </button>

        </nav>

        </div>

        </div>


        
        <div className="flex flex-wrap -m-4">
        {displayProjects(this.state.displayState)}

        </div>


      </div>
    </section>
  );
  }
}
