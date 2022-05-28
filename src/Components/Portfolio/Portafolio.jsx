import React, {useState, useEffect} from 'react';
import ShowSectionName from '../../utils/ShowSectionName';
import PortafolioMain from './PortafolioMain';

function Portafolio() {

    const [showMain, setShowMain] = useState(false)

useEffect(() => {
        
        setTimeout(() => {
            setShowMain(true)
          }, 2000);
        
    }, [])

    return (
        <main className="flex w-full m-auto h-full">

        { showMain ? 

        <PortafolioMain/>

        :

        <ShowSectionName name="Portafolio"/>

        }



            
        </main>
    )
}

export default Portafolio