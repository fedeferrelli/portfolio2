import React from 'react';
import {Fade} from 'react-awesome-reveal';
import NavSections from '../../utils/NavSections';
import {Link} from 'react-router-dom';
import Curriculum_esp from '../../assets/cvs/CV_Fede_Mazza_FED_esp.pdf';

import html from './stack/html.svg'
import css from './stack/css3.svg'
import javascript from './stack/javascript.svg'
import react from './stack/react.svg'
import react_native from './stack/react_native.svg'
import git from './stack/git.svg'
import github from './stack/github.svg'
import firebase from './stack/firebase.svg'
import tailwind from './stack/tailwindcss2.svg'



function AboutMain() {


const navs = [{nav:"home", linkTo: "/"},
{nav:"portafolio", linkTo: "/portafolio"},
{nav:"contacto", linkTo: "/contacto"}]

const stack = [{tecnologia: "html5", src: html},
{tecnologia: "css3", src: css},
{tecnologia: "javascript", src: javascript},
{tecnologia: "react", src: react},
{tecnologia: "react native", src: react_native},
{tecnologia: "git", src: git},
{tecnologia: "github", src: github},
{tecnologia: "tailwind", src: tailwind},
{tecnologia: "fireabse", src: firebase},
]

console.log(stack[0].src)

    return (
      <Fade duration="1000" triggerOnce className="w-full pb-16">
        <main className="flex flex-col min-h-screen  w-full">
          <section className="bg-alternative p-4 flex  flex-col w-full">
            <h1 className="w-full  text-secondary text-4xl sm:leading-tight leading-[5rem] tracking-tight font-bold  hover:text-terciary duration-500 font-sans sm:text-center scroll-smooth">
              Acerca de Mí
            </h1>

            <div className="flex sm:mt-20  flex-col sm:flex-row justify-center items-center w-full sm:gap-20 gap-8 ">
              <div className="sm:w-1/2 flex flex-col  text-secondary text-lg sm:text-center sm:leading-lose  tracking-wider font-sans font-light m-auto gap-4">
                <p>
                  Soy un apasionado por el desarrollo Front End que disfruto de
                  resolver problemas con soluciones creativas y robustas.
                </p>

                <p>
                  Estoy siempre en búsqueda de oportunidades que me permitan
                  seguir aprendiendo, enseñando y disfrutando de superar
                  desafíos personales trabajando en grupo.
                </p>

                <p>
                  Además soy economista con amplia experiencia en el campo de
                  las finanzas corportaivas.
                </p>

                <div className="flex mt-5">
                  <a href={Curriculum_esp} download className="m-auto w-full">
                    <button className="bg-terciary rounded-lg w-full font-bold hover:bg-terciary/70 duration-500 text-lg uppercase py-3 px-6 text-primary">
                      {" "}
                      Descargar CV{" "}
                    </button>
                  </a>
                </div>
              </div>

              <div className="sm:w-1/2 m-auto   text-secondary text-lg sm:text-center sm:leading-tight leading-[5rem] tracking-tight font-sans font-light">
              
                <h2 className="mb-2 sm:mb-6  text-secondary text-xl  text-center sm:leading-lose  tracking-wider font-sans font-bold  m-auto ">Tecnologías que utilizo</h2>

                <div className="flex flex-wrap w-full">

                  {stack.map((tech) => (
                   
                    <div
                      key={tech.src}
                      className=" m-auto p-2 rounded-lg flex flex-col justify-between w-1/3 sm:w-1/3 sm:h-30"
                    >
                      
                     <img
                         src={tech.src}
                        alt={tech.tecnologia}
                         className="w-16 sm:w-16 m-auto " 
                      />
                      <h3 className="lowercase m-auto text-sm">
                        {" "}
                        {tech.tecnologia}
                      </h3>
                    </div>
                  ))}


                </div>
              </div>
            </div>
          </section>

          <NavSections navs={navs} />
        </main>
      </Fade>
    );
    
}

export default AboutMain
