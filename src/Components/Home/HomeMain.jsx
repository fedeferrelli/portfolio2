import React from 'react';
import {Fade} from 'react-awesome-reveal';
import {Link} from 'react-router-dom'

function HomeMain() {
    return (
        <main >
            <Fade duration="1000" triggerOnce >
            <section className="bg-alternative p-4 rounded-lg">
<div className="w-full  text-secondary text-[100px] sm:leading-tight leading-[5rem] tracking-tight font-bold  hover:text-terciary duration-500 font-sans">
    Fede Mazza {/* <span className="block text-secondary text-3xl tracking-wider font-normal mt-2 sm:mt-0"> Front End Developer <span className="italic block text-terciary">&</span> Economista </span>  */}
</div>

<div className="w-full  text-secondary text-xl sm:text-3xl sm:text-center sm:leading-tight leading-[5rem] tracking-tight font-sans font-light -mt-3">
    Front End Developer <span className="italic px-1 sm:bg-transparent text-terciary">&</span> Economista 
</div>





               
            
            </section>

            <section className="p-4 mt-8">
            <Link to="/portafolio"> <button className="bg-terciary w-full font-bold hover:bg-terciary/70 duration-500 text-2xl uppercase py-3 px-6 text-primary"> Portafolio </button>
            </Link>

            <div className="flex gap-2 mt-2 text-secondary">

            <button className="bg-primary border font-light border-terciary w-1/2 text-lg uppercase py-1 hover:bg-terciary hover:text-primary hover:font-bold duration-500"> <Link to="contacto"> Contacto</Link> </button>

            <button className="bg-primary border font-light border-terciary w-1/2 text-lg uppercase py-1 hover:bg-terciary hover:text-primary hover:font-bold duration-500 "><Link to="about"> Quien soy</Link> </button>
            
            {/* <button className="bg-primary border font-light border-terciary w-1/3 text-lg uppercase py-1 hover:bg-terciary hover:text-primary hover:font-bold duration-500"> <Link to="skills"> Skills</Link> </button> */}

            </div>

            </section>
            
            
            
            
            
            
            </Fade>
            
        </main>
    )
}

export default HomeMain
