import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Portafolio from './Components/Portfolio/Portafolio';
import Skills from './Components/Skills/Skills';
import Contact from './Components/Contact/Contact';

function App() {

  return (

    <main className="bg-primary min-h-screen flex px-1">
      <section className="max-w-[1200px] m-auto flex w-full">
      <Router>
      <Routes>
    <Route path='/' exact element={<Home/>} /> 

   <Route path='/about' exact element={<About/>}  />
   <Route path='/portafolio' exact element={<Portafolio/>}/>
   <Route path='/contacto' exact element={<Contact/>} />
   <Route path='/skills' exact element={<Skills/>}   />
      

      </Routes>
  
    </Router>



      </section>

    </main>  

    )
}

export default App
