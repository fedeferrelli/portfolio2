import React, {useState} from 'react';
import {Fade} from 'react-awesome-reveal';
import NavSections from '../../utils/NavSections';


import ContactForm from './ContactForm';


function ContactMain() {

    const navs = [{nav:"home", linkTo: "/"},
{nav:"portafolio", linkTo: "/portafolio"},
{nav:"about", linkTo: "/about"}]

return (
    <Fade duration="1000" triggerOnce className="w-full pb-16">
      <main className="flex flex-col min-h-screen  w-full ">
      <section className="bg-alternative p-4 flex  flex-col w-full">
            <h1 className="w-full   text-secondary text-4xl sm:leading-tight leading-[5rem] tracking-tight font-bold  font-sans text-center">
              Contacto
            </h1>

            <p className="w-full my-8  m-auto max-w-prose text-secondary text-xl sm:leading-tight    font-sans text-center font-thin">
              Si queres podés enviarme un mensaje o contactarme por cualquiera de mis redes sociales. Todos los mensajes son bienvenidos y me esforzaré al máximo para poder corresponderlos.
            </p>
            </section>

            <section className="flex flex-col  justify-center items-center">

            <ContactForm/>

            </section>

           

            <NavSections navs={navs} />
      </main>
    </Fade>
  );
}

export default ContactMain
