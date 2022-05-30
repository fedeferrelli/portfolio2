import React from "react";

import { Fade } from "react-awesome-reveal";

function ShowProject({ project, index, language='esp' }) {
  const {
    name,
    description_esp,
    description_eng,
    link,
    apk,
    code,
    image,
    stack,
  } = project;
  const reindex = index + 1;
console.log(name)
  return (
    <div className="m-auto sm:w-10/12 w-full mb-6 rounded-xs overflow-hidden  shadow-sm shadow-gray-400">
      <Fade

       
       duration="1250" 
        triggerOnce
        className="flex flex-col justify-center m-auto "
      >

        <Fade>
        <div className=" sm:w-full bg-secondary/5  m-auto rounded border border-secondary/20 drop-shadow-[0_0px_15px_rgba(0,0,0,0.5)] h-full">
          <h1 className="text-center text-2xl sm:text-xl font-bold my-3 flex flex-row justify-center items-center text-secondary">
            <span className="w-6 h-6 mr-1 rounded-full text-primary  bg-terciary  text-sm  text-center items-center flex flex-row justify-center">
              {reindex}
            </span>
            {name}
          </h1>

          <section className="flex flex-col sm:flex-row ">

          <div className="relative w-full h-[420px] sm:max-h-[350px] overflow-hidden">
           {/*  <div className="absolute w-full h-full bg-secondary/90 text-primary duration-700 opacity-0 hover:opacity-95 flex flex-col justify-evenly items-center ">
              <p className=" px-4 py-2 font-mono sm:px-8 text-center">
                {language === "esp" ? description_esp : description_eng}
              </p>

              <div className="flex flex-wrap justify-center  h-auto item-center w-full ">
                {stack.map((item) => (
                  <div
                    key={Math.random()
                      .toString(36)
                      .replace(/[^a-z]+/g, "")
                      .substr(0, 5)}
                    className="py-0.5 px-3 text-sm shadow-md shadow-gray-700
            rounded-full border border-terciary m-1.5 text-terciary "
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div> */}

            <div className="w-full p-2 sm:max-h-[320px] rounded-lg overflow-hidden">
              <img
                src={image}
                alt={image}
                className="w-full -z-20"
              />
            </div>
          </div>

          <div className="w-full flex flex-col justify-between items-center py-2 sm:max-h-[320px]">


 <p className=" px-4 py-2 font-mono sm:px-8 text-center hidden sm:flex">
                {language === "esp" ? description_esp : description_eng}
              </p>


              <div className="hidden sm:flex flex-wrap justify-center  h-auto item-center w-full">
                {stack.map((item) => (
                  <div
                    key={Math.random()
                      .toString(36)
                      .replace(/[^a-z]+/g, "")
                      .substr(0, 5)}
                    className="py-0.5 px-3 text-sm rounded-full border border-terciary m-1.5 text-terciary "
                  >
                    {item}
                  </div>
                ))}
              </div>


              <div className="w-full px-2 flex flex-col gap-2 sm:gap-0 sm:flex-row justify-evenly items-center">

            <a
              href={link ? link : apk}
              rel="noreferrer"
              target="_blank"
              className="bg-terciary px-6 py-0 sm:py-2 rounded-lg text-primary font-sans
         sm:hover:terciary/50  ease-in-out duration-300 w-full sm:w-2/5 "
            >
              {" "}
              <button className="uppercase text-center w-full">
                {link ? "site" : "apk"}
              </button>
            </a>

            <a
              href={code}
              rel="noreferrer"
              target="_blank"
              className="bg-terciary  px-6 py-0 sm:py-2 rounded-lg text-primary font-sans
         sm:hover:terciary/50  ease-in-out duration-300 w-full sm:w-2/5"
            >
              {" "}
              <button className="uppercase text-center w-full">Code</button>
            </a>
          </div>
          </div>
          </section>
        </div>
        </Fade>
      </Fade>
    </div>
  );
}

export default ShowProject;
