import React, {useState} from 'react';
import {Fade} from 'react-awesome-reveal';
import NavSections from '../../utils/NavSections';
import {Link} from 'react-router-dom';
import projects from '../../utils/projects';
import ShowProject from './ShowProject';




function PortafolioMain() {


const navs = [{nav:"home", linkTo: "/"},
{nav:"about", linkTo: "/about"},
{nav:"contacto", linkTo: "/contacto"}]

const [index, setIndex] = useState(1)


    return (
      <Fade duration="1000" triggerOnce className="w-full pb-16">
        <main className="flex flex-col min-h-screen  w-full">
          <section className="bg-alternative p-4 flex  flex-col w-full">
            <h1 className="w-full   text-secondary text-4xl sm:leading-tight leading-[5rem] tracking-tight font-bold  font-sans text-center">
              Portafolio
            </h1>

            <p className="w-full my-8  m-auto max-w-prose text-secondary text-xl sm:leading-tight    font-sans text-center">
              Estos son alguno de los proyectos que he desarrollado de manera independiente
            </p>

            <div className="flex sm:mt-20  flex-col sm:flex-row justify-center items-center w-full sm:gap-20 gap-8 ">
             

              <div className="m-auto   text-secondary text-lg sm:text-center sm:leading-tight leading-[5rem] tracking-tight font-sans font-light">
              

         

                  {projects.map((project, index) => (
                   
/*                     <div
                      key={project.name}
                      className=" m-auto p-2 rounded-lg flex flex-col justify-between w-1/3 sm:w-1/3 sm:h-30"
                    >
                      
                     <img
                         src={`${project.image}`}
                        alt={project.image}
                         className="w-16 sm:w-16 m-auto " 
                      />
                      <h3 className="lowercase m-auto text-sm">
                        {" "}
                        {project.name}
                      </h3>
                    </div> */
<div key={project.image}>
<ShowProject project={project} index={index} />
</div>
                  ))} 


                </div>
              
            </div>
          </section>

          <NavSections navs={navs} />
        </main>
      </Fade>
    );
    
}

export default PortafolioMain