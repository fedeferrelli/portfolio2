import React, {useState, useEffect} from 'react';
import ShowSectionName from './ShowSectionName';
import ContactMain from '../Components/Contact/ContactMain';

function Contact() {

    const [showMain, setShowMain] = useState(false)

useEffect(() => {
        
        setTimeout(() => {
            setShowMain(true)
          }, 1000);
        
    }, [])

    return (
        <main className="flex w-full m-auto h-full">

        { showMain ? 

        <ContactMain/>

        :

        <ShowSectionName name="Contacto"/>

        }



            
        </main>
    )
}

export default Contact
