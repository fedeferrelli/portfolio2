import React from 'react';
import {Fade} from 'react-awesome-reveal';
import {Link} from 'react-router-dom'

function HomeMain() {
    return (

        <Fade duration="1000" triggerOnce className="w-full ">
      <main className="flex flex-col justify-center min-h-screen w-full">
       
          <section className="bg-alternative p-4 rounded-lg -mt-10">
            <div className="w-full  text-secondary text-[100px] sm:leading-tight leading-[5rem] tracking-tight font-bold  font-sans sm:text-center">
              Fede Mazza{" "}

            </div>

            <div className="w-full  text-secondary text-xl sm:text-3xl sm:text-center  sm:leading-tight leading-[5rem] tracking-tight font-sans font-light -mt-3">
              Front End Developer{" "}
              <span className="italic px-1 sm:bg-transparent text-terciary">
                &
              </span>{" "}
              Economista
            </div>
          </section>

          <section className="mt-2 w-full sm:w-[500px] ml-auto mr-auto">
            <Link to="/portafolio">
              {" "}
              <button className="bg-terciary rounded-full w-full font-bold hover:bg-terciary/70 duration-500 text-2xl uppercase py-2 text-primary">
                {" "}
                Portafolio{" "}
              </button>
            </Link>

            <div className="flex gap-2 mt-2 text-secondary">
              <Link to="contacto" className="w-1/2 border border-terciary rounded-full overflow-hidden">
                <button className="font-light py-2 text-lg uppercase w-full h-full hover:bg-terciary hover:text-primary hover:font-bold duration-500">
                  {" "}
                  Contacto{" "}
                </button>
              </Link>

              <Link to="about" className="w-1/2 border border-terciary rounded-full overflow-hidden">
                <button className="font-light py-2 text-lg uppercase w-full h-full hover:bg-terciary hover:text-primary hover:font-bold duration-500">
                  {" "}
                  Quien soy{" "}
                </button>
              </Link>

              {/* <button className="bg-primary border font-light border-terciary w-1/3 text-lg uppercase py-1 hover:bg-terciary hover:text-primary hover:font-bold duration-500"> <Link to="skills"> Skills</Link> </button> */}
            </div>
            
          </section>
         


       
      </main>
      </Fade>
      
    );
}

export default HomeMain
