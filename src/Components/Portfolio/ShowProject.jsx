import React, { useState } from "react";

import { Fade } from "react-awesome-reveal";

function ShowProject({ project, index}) {
  const {
    name,
    description_esp,
    link,
    apk,
    code,
    image,
    stack,
  } = project;
  const reindex = index + 1;

  const [showDescription, setShowDescription] = useState(false);

  return (
    <div className="m-auto sm:w-10/12 w-full sm:max-w-[850px] mb-10 rounded-xs shadow-sm shadow-gray-400 bg-secondary/20 sm:bg-secondary/10">
      <Fade
        duration="1250"
        triggerOnce
        className="flex flex-col justify-center m-auto "
      >
        <div>
          <div className=" sm:w-full bg-secondary/5  m-auto rounded border border-secondary/20 drop-shadow-[0_0px_15px_rgba(0,0,0,0.5)] h-full">
            <h1 className="text-center text-2xl sm:text-2xl font-bold mt-3 flex flex-row justify-center items-center text-secondary">
              <span className="w-6 h-6 mr-1 rounded-full text-primary  bg-terciary  text-sm  text-center items-center flex flex-row justify-center">
                {reindex}
              </span>
              {name}
            </h1>
            <div className="hidden sm:flex flex-wrap justify-center sm:py-2 h-auto item-center w-full">
              {stack.map((item) => (
                <div
                  key={Math.random()
                    .toString(36)
                    .replace(/[^a-z]+/g, "")
                    .substr(0, 5)}
                  className="py-0.5 px-3 text-xs rounded-full border border-terciary/50 m-1.5 text-terciary/50 "
                >
                  {item}
                </div>
              ))}
            </div>
            <div
              className=" sm:hidden w-40 m-auto text-center text-terciary/50 rounded-full px-2 py-1 my-2 mb-2 border border-terciary"
              onClick={() => setShowDescription(!showDescription)}
            >
              {!showDescription ? "ver descripción" : "ver imagen"}
            </div>

            <section className="flex flex-col sm:flex-row">
              <div className="w-full flex  sm:max-h-[350px] overflow-hidden">
                <div className="w-full m-auto sm:max-h-[320px] overflow-hidden">
                  {!showDescription ? (
                    <div
                      className="flex px-4  overflow-hidden"
                      onClick={() => setShowImage(true)}
                    >
                      <img
                        src={image}
                        alt={image}
                        className="rounded-lg m-auto "
                      />
                    </div>
                  ) : (
                    <Fade>
                      <div className="w-full  flex flex-col justify-evenly items-center py-2 gap-4 m-auto">
                        <p className=" px-4 py-1 font-mono sm:px-8 text-center flex text-secondary max-w-prose">
                          {description_esp}
                        </p>
                        <div className="flex flex-wrap justify-center h-auto item-center w-full">
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
                        </div>{" "}
                      </div>
                    </Fade>
                  )}
                </div>
              </div>

              <div className="w-full flex flex-col justify-evenly items-center py-0 ">
                <div className="px-4 py-2 font-mono sm:px-8 text-center hidden sm:flex justify-center items-center text-secondary">
                  <p className="">{description_esp}</p>
                </div>

                <div className="w-full px-4 py-2 sm:py-2 flex flex-col gap-2 sm:gap-4 sm:flex-row justify-evenly  items-center">
                  <a
                    href={link ? link : apk}
                    rel="noreferrer"
                    target="_blank"
                    className="sm:bg-terciary overflow-hidden  rounded-full text-terciary sm:text-primary font-sans
sm:hover:terciary/50 border border-terciary ease-in-out duration-300 w-full sm:w-1/2"
                  >
                    {" "}
                    <button className="uppercase text-center py-2 sm:py-1 w-full ">
                      {" "}
                      {link ? "site" : "apk"}
                    </button>
                  </a>

                  <a
                    href={code}
                    rel="noreferrer"
                    target="_blank"
                    className="sm:bg-terciary overflow-hidden  rounded-full text-terciary sm:text-primary font-sans
sm:hover:terciary/50 border border-terciary ease-in-out duration-300 w-full sm:w-1/2"
                  >
                    {" "}
                    <button className="uppercase text-center py-2 sm:py-1 w-full ">
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </section>
          </div>
        </div>
      </Fade>
    </div>
  );
}

export default ShowProject;
