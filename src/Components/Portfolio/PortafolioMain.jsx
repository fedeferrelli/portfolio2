import React, { useState } from "react";
import { Fade } from "react-awesome-reveal";
import NavSections from "../../utils/NavSections";
import projects from "../../utils/projects";
import ShowProject from "./ShowProject";

function PortafolioMain() {
  const navs = [
    { nav: "home", linkTo: "/" },
    { nav: "contacto", linkTo: "/contacto" },
   { nav: "about", linkTo: "/about" },
  ];

  const [index, setIndex] = useState(1);
  const [numberOfProjects, setNumberOfProjects] = useState(4);
  const [showMoreProjects, setShowMoreProjects] = useState(false);

  return (
    <Fade duration="1000" triggerOnce className="w-full pb-16">
      <main className="flex flex-col min-h-screen  w-full">
        <section className="bg-alternative p-4 flex  flex-col w-full">
          <h1 className="w-full   text-secondary text-4xl sm:leading-tight leading-[5rem] tracking-tight font-bold  font-sans text-center">
            Portafolio
          </h1>

          <p className="w-full sm:my-8 mb-8  m-auto max-w-prose text-secondary text-xl sm:leading-tight font-sans sm:text-center font-thin">
            Estos son algunos de los proyectos que he desarrollado de manera
            independiente
          </p>

          <div className="flex sm:mt-0  flex-col sm:flex-row justify-center items-center w-full sm:gap-20 gap-8 ">
            <div>
              {projects.slice(0, numberOfProjects).map((project, index) => (
                <div key={project.image} >
                  <ShowProject project={project} index={index} />
                </div>
              ))}

              {showMoreProjects && (
                <Fade>
                  {projects.slice(numberOfProjects).map((project, index) => (
                    <div key={project.image}>
                      <ShowProject
                        project={project}
                        index={index + numberOfProjects}
                      />
                    </div>
                  ))}
                </Fade>
              )}

              <div className="w-full flex -mt-5">
                <button
                  className="text-terciary/50 font-sans sm:hover:terciary/50 ease-in-out duration-300 w-full sm:w-auto px-4 py-1 m-auto uppercase"
                  onClick={() => setShowMoreProjects(!showMoreProjects)}
                >
                  {showMoreProjects
                    ? "ver menos proyectos"
                    : "ver más proyectos"}
                </button>
              </div>
            </div>
          </div>
        </section>

        <NavSections navs={navs} />
      </main>
    </Fade>
  );
}

export default PortafolioMain;
