import React from "react";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import NavSections from "../../utils/NavSections";



function BlogMain() {
  const navs = [
    { nav: "home", linkTo: "/" },
    { nav: "portafolio", linkTo: "/portafolio" },
    { nav: "contacto", linkTo: "/contacto" },
  ];

  const publicaciones = [{name: 'Valores versus Referencias en Javascript', link: '/valores_versus_referencias'}, {name: 'Chequeo de Tipos Dinámico y Tipado Débil en Javascript', link: '/tipado_dinamico_debil'}]

  return (
    <Fade duration="1000" triggerOnce className="w-full pb-16">
      <main className="flex flex-col min-h-screen  w-full">
        <section className="bg-alternative p-4 flex  flex-col w-full">
          <h1 className="w-full  text-secondary text-4xl sm:leading-tight leading-[5rem] tracking-tight font-bold  font-sans text-center">
            BLOG
          </h1>

          <div className="flex sm:mt-20  flex-col sm:flex-row justify-center items-center w-full sm:gap-20 gap-8 ">
            <div className="sm:w-1/2 flex flex-col  text-secondary text-lg sm:text-center sm:leading-lose  tracking-wider font-sans font-light m-auto gap-4">
              <p>
                Acá publico cosas que voy aprendiendo en el día a día para
                ayudar a otros y para estructurar mejor mi proceso de
                aprendizaje.
              </p>
            </div>
          </div>


          {
            publicaciones.map(e=>(

<Link to={e.link} key={e.name}>
            {" "}
            <div className="m-auto sm:w-10/12 w-full sm:max-w-[850px] my-4 shadow-sm shadow-gray-400 bg-secondary/20 sm:bg-secondary/10">
            <Fade
              duration="1250"
              triggerOnce
              className="flex flex-col justify-center m-auto "
            >
              <div>
                <div className="sm:w-full bg-secondary/5  m-auto rounded-xs border border-secondary/20 drop-shadow-[0_0px_15px_rgba(0,0,0,0.5)] h-full p-4">
                  <h1 className="text-left sm:text-center text-lg sm:text-2xl font-semibold text-secondary">
                    {e.name}
                    
                  </h1>
                </div>
              </div>
            </Fade>
          </div>
          </Link>



            ))
          }

          

          
        </section>

        <NavSections navs={navs} />
      </main>
    </Fade>
  );
}

export default BlogMain;
