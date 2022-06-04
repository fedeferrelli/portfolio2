import React, {useState} from 'react';
import {Fade} from 'react-awesome-reveal';
import NavSections from '../../utils/NavSections';

import twitter from './contactIcons/twitter.svg';
import linkedin from './contactIcons/linkedin.svg';
import email from './contactIcons/email.svg';
import github from '../../Components/About/stack/github.svg'


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

            <p className="w-full mb-8 sm:my-8  m-auto max-w-prose text-secondary text-xl sm:leading-tight    font-sans sm:text-center font-thin">
              Si queres podés enviarme un mensaje o contactarme por cualquiera de mis redes sociales. Todos los mensajes son bienvenidos y me esforzaré al máximo para poder corresponderlos.
            </p>
            </section>

            <section className="flex flex-col  justify-center items-center">

            <div className="flex flex-row justify-evenly items-center w-full max-w-[450px] py-4">

                <a href="https://www.linkedin.com/in/fede-mazza-75ab00231/" target="blank" rel="noreferrer"><img src={linkedin} alt="linkedin"/></a>

                <a href="https://github.com/fedeferrelli" target="blank" rel="noreferrer"><img src={github} alt="github" className="w-12"/></a>

                
                <a href="https://twitter.com/Fe__Dev__" target="blank" rel="noreferrer"><img src={twitter} alt="twitter"/></a>

                <a href="mailto:ferrelli.mazza@gmail.com" target="blank" rel="noreferrer"><img src={email} alt="email"/></a>
                
            </div>    

            <ContactForm/>

            </section>

           

            <NavSections navs={navs} />
      </main>
    </Fade>
  );
}

export default ContactMain
