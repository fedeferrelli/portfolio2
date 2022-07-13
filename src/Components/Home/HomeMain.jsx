import React from "react";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";

function HomeMain() {
  return (
    <Fade duration="1000" triggerOnce className="w-full ">
      <main className="flex flex-col justify-between min-h-screen w-full relative">
      
      <div className="flex flex-col justify-center items-center m-auto">
          <section className="bg-alternative p-4 m-auto">

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

        <section className="m-auto w-full sm:w-[500px] ">
          <Link to="/portafolio">
            {" "}
            <button className="bg-terciary rounded-full w-full font-bold hover:bg-terciary/70 duration-500 text-2xl uppercase py-2 text-primary">
              {" "}
              Portafolio{" "}
            </button>
          </Link>

          <div className="flex gap-2 mt-2 text-secondary">
            <Link
              to="contacto"
              className="w-1/2 border border-terciary rounded-full overflow-hidden"
            >
              <button className="font-light py-2 text-lg uppercase w-full h-full hover:bg-terciary hover:text-primary hover:font-bold duration-500">
                {" "}
                Contacto{" "}
              </button>
            </Link>

            <Link
              to="about"
              className="w-1/2 border border-terciary rounded-full overflow-hidden"
            >
              <button className="font-light py-2 text-lg uppercase w-full h-full hover:bg-terciary hover:text-primary hover:font-bold duration-500">
                {" "}
                Quien soy{" "}
              </button>
            </Link>
          </div>
        </section>
        <div className="mt-12 sm:mb-2 text-center w-full sm:hidden">
         <a className="text-gray-400 text-center uppercase underline-offset-4 underline font-thin m-auto px-1" href="https://www.notion.so/Fede-Mazza-Mi-Blog-c6e5b7264ffd45a496802d100ca164bb" target="_blank"> blog </a>
         </div>
        </div>
       <div className="mb-5 sm:mb-2 text-center w-full hidden sm:flex">
         <a className="text-gray-400 hover:text-white duration-700 ease-in-out text-center uppercase underline underline-offset-4 font-thin cursor-pointer m-auto px-1" href="https://www.notion.so/Fede-Mazza-Mi-Blog-c6e5b7264ffd45a496802d100ca164bb" target="_blank"> blog </a>
         </div>
      </main>
     
    </Fade>
  );
}

export default HomeMain;
