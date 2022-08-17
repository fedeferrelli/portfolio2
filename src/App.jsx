import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Portafolio from "./Components/Portfolio/Portafolio";
import Skills from "./Components/Skills/Skills";
import Contact from "./Components/Contact/Contact";
import Blog from "./Components/Blog/Blog";


import ValoresVersusDiferencias from "./Components/Blog/publicaciones/ValoresVsReferencias";

function App() {
  return (
    <main className="bg-primary min-h-screen flex px-1">
      <section className="max-w-[1200px] m-auto flex w-full">
        <Router>
          <Routes>
           <Route path="/" exact element={<Home />} /> 
           
            <Route path="/about" exact element={<About />} />
            <Route path="/portafolio" exact element={<Portafolio />} />
            <Route path="/contacto" exact element={<Contact />} />
            <Route path="/skills" exact element={<Skills />} />

            <Route path="/blog" exact element={<Blog/>} />
            <Route path="/valores_versus_referencias" exact element={<ValoresVersusDiferencias />} />

          </Routes>
        </Router>
        
      </section>
    </main>
  );
}

export default App;
