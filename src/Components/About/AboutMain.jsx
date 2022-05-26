import React from 'react';
import {Fade} from 'react-awesome-reveal'

function AboutMain() {
    return (
        <main className="h-screen flex flex-col justify-between ">
            <Fade duration="1000" triggerOnce >
            <section className="bg-alternative p-4 rounded-lg">
<div className="w-full  text-secondary text-center text-3xl sm:leading-tight leading-[5rem] tracking-tight font-bold  hover:text-terciary duration-500 font-sans">
    ABOUT {/* <span className="block text-secondary text-3xl tracking-wider font-normal mt-2 sm:mt-0"> Front End Developer <span className="italic block text-terciary">&</span> Economista </span>  */}
</div>

<div className="w-full  text-secondary text-xl sm:text-3xl sm:text-center sm:leading-tight leading-[5rem] tracking-tight  font-sans">
    Front End Developer <span className="italic px-1 sm:bg-transparent text-terciary">&</span> Economista 
</div>





               
            
            </section>

            <section className="p-4 mt-8">
            <button className="bg-terciary w-full font-bold hover:bg-terciary/70 duration-500 text-2xl uppercase py-4 px-6 text-primary"> Portafolio </button>

            <div className="flex gap-2 mt-2 text-secondary">

            <button className="bg-primary border font-bold border-terciary w-1/3 text-lg uppercase py-4 hover:bg-terciary hover:text-primary duration-500"> Contacto </button>

            <button className="bg-primary border font-bold border-terciary w-1/3 text-lg uppercase py-4 hover:bg-terciary hover:text-primary duration-500"> Quien soy </button>

            <button className="bg-primary border font-bold border-terciary w-1/3 text-lg uppercase py-4 hover:bg-terciary hover:text-primary duration-500"> Skills </button>

            </div>

            </section>
            
            
            
            
            
            
            </Fade>
            
        </main>
    )
}

export default AboutMain
