import React, { useState, useRef } from "react";

import emailjs from "@emailjs/browser";

function ContactForm() {
  const [showOK, setShowOK] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ptrg1qg",
        "template_zbopz7c",
        form.current,
        "user_gbl4xl6Z4YWWGOY7je4Gb"
      )
      .then(
        (result) => {
          console.log(result.text);
          setShowOK(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const AcceptAndScrollToTop = () => {
    setShowOK(false);
   
  };

  return (
    <div className="m-auto max-w-[450px] w-11/12 mb-10 rounded-xs shadow-sm shadow-gray-400 bg-secondary/20 sm:bg-secondary/10">
      <form
        onSubmit={sendEmail}
        ref={form}
        className="sm:text-sm m-auto flex flex-col justify-center items-center p-10 drop-shadow-[0_35px_35px_rgba(0,0,0,0.75)]"
      >
        {showOK && (
          <div className="bg-primary absolute w-full h-full z-50 text-center flex flex-col justify-center items-center">
            <div className="w-full bg-secondary/5 rounded-lg border-secondary/50 h-full flex flex-col justify-center sm:w-3/4 sm:h-auto border  p-10 text-secondary">
              <h1 className="text-xl mb-4">
                <span className="text-3xl block ">
                  Gracias
                </span>{" "}
                por comunicarte conmigo
              </h1>
              <h2>
               me pondré en contacto a la brevedad
              </h2>
              <button
                className="w-full py-3 uppercase rounded-lg mt-8 bg-terciary text-primary text-lg font-bold font-sans drop-shadow-[0_0px_15px_rgba(0,0,0,0.5)]
         sm:terciary-90 ease-in-out duration-300"
                onClick={AcceptAndScrollToTop}
              >
                OK
              </button>
            </div>
          </div>
        )}
        <h1 className="w-full text-2xl text-center text-secondary">
         Enviame un mensaje
        </h1>

        <p className="mt-8 w-full text-secondary focus-within:text-terciary border border-t-transparent border-terciary ">
          <label
            htmlFor="nombre"
            className="w-full px-4  focus-within:text-terciary ease-in-out duration-300"
          >
           Nombre
          </label>

          <input
            id="nombre"
            name="nombre"
            type="mail"
            className="w-full h-8 sm:h-6 px-4 bg-transparent  outline-none border-terciary text-secondary font-mono"
          ></input>
        </p>

        <p className="mt-8 w-full text-white focus-within:text-terciary border border-t-transparent border-terciary ">
          <label
            htmlFor="mail"
            className="w-full px-4 ease-in-out duration-300"
          >
            Dirección de correo *
          </label>

          <input
            id="mail"
            name="email"
            type="email"
            required
            className="w-full h-8 px-4 bg-transparent  outline-none  text-secondary font-mono"
          ></input>
        </p>

        <p className="mt-8 w-full text-white focus-within:text-terciary border border-t-transparent border-terciary ">
          <label
            htmlFor="asunto"
            className="w-full px-4 ease-in-out duration-300"
          >
           Asunto
          </label>

          <input
            id="asunto"
            name="asunto"
            type="text"
            className="w-full h-8 px-4 bg-transparent  outline-none border-b-terciary text-secondary font-mono"
          ></input>
        </p>

        <p className="mt-8 w-full text-secondary focus-within:text-terciary border border-t-transparent border-terciary ">
          <label
            htmlFor="mensaje"
            className="w-full px-4 ease-in-out duration-300"
          >
           Mensaje *
          </label>

          <textarea
            id="mensaje"
            name="mensaje"
            rows="3"
            required
            className="w-full px-4 pt-1 bg-transparent  outline-none border-b-terciary text-secondary font-mono"
          ></textarea>
        </p>

        <input
          type="submit"
          value="enviar mensaje"
          className="bg-terciary w-full py-2 uppercase rounded-full mt-8 text-primary font-bold text-lg font-sans 
         sm:hover:bg-terciary/90  ease-in-out duration-300"
        ></input>
      </form>
    </div>
  );
}

export default ContactForm;
