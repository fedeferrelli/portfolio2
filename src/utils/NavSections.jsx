import React from "react";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";

function NavSections(navs) {
  const navigator = navs.navs;

  return (
    <section className="flex flex-row  w-11/12 sm:w-[500px] ml-auto mr-auto fixed z-20 right-0 left-0  bottom-2 sm:bottom-2 border border-terciary/50 rounded-full overflow-hidden sm:shadow-md bg-primary shadow-md shadow-white/10">
      <Fade direction="down" delay="50" className="w-full ">
        <div className="flex text-secondary w-full h-full sm:bg-secondary/5">
          {navigator.map((nav) => (
            <Link to={nav.linkTo} key={nav.linkTo} className="w-1/3 border-r border-terciary">
              <button className="font-light py-2 sm:py-1 text-lg uppercase w-full h-full hover:bg-terciary hover:text-primary hover:font-bold duration-500 ">
                {nav.nav}
              </button>
            </Link>
          ))}
        </div>
      </Fade>
    </section>
  );
}

export default NavSections;
