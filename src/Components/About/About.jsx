import React, {useState, useEffect} from 'react';
import ShowSectionName from '../../utils/ShowSectionName';
import AboutMain from '../About/AboutMain';

function About() {

    const [showMain, setShowMain] = useState(false)

useEffect(() => {
        
        setTimeout(() => {
            setShowMain(true)
          }, 1000);
        
    }, [])

    return (
        <main className="flex w-full m-auto h-full">

        { showMain ? 

        <AboutMain/>

        :

        <ShowSectionName name="Acerca de Mí"/>

        }



            
        </main>
    )
}

export default About
