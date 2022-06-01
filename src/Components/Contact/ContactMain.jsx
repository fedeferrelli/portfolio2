import React, {useState} from 'react';
import {Fade} from 'react-awesome-reveal';


import calculator from '../../assets/img/images_projects/calculator.jpg'
import cuotifica from '../../assets/img/images_projects/cuotifica.jpg'
import toDoList from '../../assets/img/images_projects/toDoList.jpg'
import menu_consumer from '../../assets/img/images_projects/menu_consumer.jpg'
import menu_client from '../../assets/img/images_projects/menu_client.jpg'
import criptoCotizador from '../../assets/img/images_projects/criptoCotizador.jpg'
import weatherApp from '../../assets/img/images_projects/weatherApp.jpg'
import miJardin from '../../assets/img/images_projects/miJardin.jpg'
import portfolio from '../../assets/img/images_projects/portfolio.jpg'


function ContactMain() {

const images = [calculator, cuotifica, toDoList, menu_client, menu_consumer, criptoCotizador, weatherApp, miJardin, portfolio];

const [main, setMain] = useState(0)
const [mainDown, setMainDown] = useState(images.length-1)
const [mainUp, setMainUp] = useState(1)

const setNumberDown = () => {

    if (main === 0)
    
    {setMain(images.length-1);
        setMainDown(mainDown-1);
    setMainUp(mainUp-1)}

    else if (main===1)
    {setMain(0);
         setMainDown(images.length-1);
        setMainUp(1)}

        else if (main===images.length-1)
        {setMain(main-1);
             setMainDown(mainDown-1);
            setMainUp(images.length-1)}

    else {
        setMain(main-1);
         setMainDown(mainDown-1);
        setMainUp(mainUp-1)
    }    

}

const setNumberUp = () => {

    if (main === images.length-1)
    
    {setMain(0)}

    else {setMain(main+1)}

}


    return (
        <main className="w-full flex flex-row justify-center -gap-5 relative ">
 
 <div className="bg-yellow-300 w-1/3 h-80 absolute -left-10 top-0 bottom-0 m-auto opacity-30" >
     
 <img src={images[mainDown]} alt={images[mainDown]} className="overflow-hidden w-full h-80"/>

 </div>

 <div className="bg-yellow-500 w-1/2 z-10 m-auto h-96 relative shadow-md shadow-slate-700">

        <div className="absolute overflow-hidden shadow-lg w-20 h-20 -left-10 top-0 bottom-0 m-auto rounded-full bg-slate-300 border-2 border-slate-400" onClick={()=>setNumberDown()}></div>

<img src={images[main]} alt={images[main]} className="overflow-hidden w-full h-96"/>
        
        
        <div className="absolute  w-20 h-20 -right-10 top-0 bottom-0 m-auto rounded-full bg-slate-300 border-2 border-slate-400" onClick={()=>setNumberUp()}></div>


 </div>

 <div className="bg-yellow-300 w-60 h-40 absolute -right-10 top-0 bottom-0 m-auto opacity-30">

 <img src={images[mainUp]} alt={images[mainUp]} className="overflow-hidden w-full h-40"/>

 </div>
            
        </main>
    )
}

export default ContactMain
