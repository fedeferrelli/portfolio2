import React from 'react';
import {Fade} from 'react-awesome-reveal';
import {Link} from 'react-router-dom'

function HomeMain() {
    return (

        <Fade duration="1000" triggerOnce className="w-full ">
      <main className="flex flex-col justify-center min-h-screen  w-full">
       
          <section className="bg-alternative p-4 rounded-lg ">
            <div className="w-full  text-secondary text-[100px] sm:leading-tight leading-[5rem] tracking-tight font-bold  hover:text-terciary duration-500 font-sans sm:text-center">
              Fede Mazza{" "}
              {/* <span className="block text-secondary text-3xl tracking-wider font-normal mt-2 sm:mt-0"> Front End Developer <span className="italic block text-terciary">&</span> Economista </span>  */}
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
              <button className="bg-terciary rounded-lg w-full font-bold hover:bg-terciary/70 duration-500 text-2xl uppercase py-3 px-6 text-primary">
                {" "}
                Portafolio{" "}
              </button>
            </Link>

            <div className="flex gap-2 mt-2 text-secondary">
              <Link to="contacto" className="w-1/2 border border-terciary rounded-lg overflow-hidden">
                <button className="font-light py-2 text-lg uppercase w-full h-full hover:bg-terciary hover:text-primary hover:font-bold duration-500">
                  {" "}
                  Contacto{" "}
                </button>
              </Link>

              <Link to="about" className="w-1/2 border border-terciary rounded-lg overflow-hidden">
                <button className="font-light py-2 text-lg uppercase w-full h-full hover:bg-terciary hover:text-primary hover:font-bold duration-500">
                  {" "}
                  Quien soy{" "}
                </button>
              </Link>

              {/* <button className="bg-primary border font-light border-terciary w-1/3 text-lg uppercase py-1 hover:bg-terciary hover:text-primary hover:font-bold duration-500"> <Link to="skills"> Skills</Link> </button> */}
            </div>
            <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      viewBox="0 0 30 30"
    >
      <path d="M15 3C8.373 3 3 8.373 3 15c0 5.623 3.872 10.328 9.092 11.63a1.751 1.751 0 01-.092-.583v-2.051h-1.508c-.821 0-1.551-.353-1.905-1.009-.393-.729-.461-1.844-1.435-2.526-.289-.227-.069-.486.264-.451.615.174 1.125.596 1.605 1.222.478.627.703.769 1.596.769.433 0 1.081-.025 1.691-.121.328-.833.895-1.6 1.588-1.962-3.996-.411-5.903-2.399-5.903-5.098 0-1.162.495-2.286 1.336-3.233-.276-.94-.623-2.857.106-3.587 1.798 0 2.885 1.166 3.146 1.481A8.993 8.993 0 0115.495 9c1.036 0 2.024.174 2.922.483C18.675 9.17 19.763 8 21.565 8c.732.731.381 2.656.102 3.594.836.945 1.328 2.066 1.328 3.226 0 2.697-1.904 4.684-5.894 5.097C18.199 20.49 19 22.1 19 23.313v2.734c0 .104-.023.179-.035.268C23.641 24.676 27 20.236 27 15c0-6.627-5.373-12-12-12z"></path>
    </svg>
          </section>
       
      </main>
      </Fade>
      
    );
}

export default HomeMain
