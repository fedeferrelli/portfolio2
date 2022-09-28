import React from "react";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import {BsArrowLeft} from "react-icons/bs"


function TipadoDinamicoDebil() {
  

  return (
    <Fade duration="1000" triggerOnce className="w-full">
      <main className="flex flex-col min-h-screen  w-full text-md bg-gray-200 text-left font-sans font-normal text-gray-800">
        <section className="bg-alternative p-4 flex  flex-col w-full ">
          <Link to="/blog">
            {" "}
            <button className="bg-terciary rounded-full w-auto font-normal hover:bg-terciary/70 duration-500 text-md py-2 text-primary px-3">
              {" "}
              <BsArrowLeft className="inline text-lg" /> Back to BLOG{" "}
            </button>
          </Link>

          <h1 className="mt-4 text-2xl font-semibold text-center">
          Chequeo de Tipos Dinámico y Tipado Débil en Javascript
          </h1>

          <h2 className="mt-2 max-w-prose">
          Se dice que JavaScript es un lenguaje orientado a objetos, interpretado, dinámico y débilmente tipado. Pero, ¿qué quiere decir eso? Veamos...
          </h2>

          <section className="mt-3">
            <h2 className="mt-2 max-w-prose underline underline-offset-2">
            Chequeo de Tipos Dinámico
            </h2>

            <p className="mt-2 max-w-prose">
            El chequeo de tipos en un proceso para verificar y hacer cumplir las restricciones de tipo que impone un lenguaje. Por ejemplo, si una variable espera un dato de tipo string y se le asigna un dato de tipo number y el lenguaje no lo permite, eso es descubierto durante el proceso de chequeo de tipos.             
            </p>



            <p className="mt-2 max-w-prose">
            El chequeo de tipos puede hacerse en dos momentos diferentes, de lo cual surge una clasificación:
              <li className="mt-2">Chequeo de tipos <strong>estático</strong>: este chequeo se realiza antes de la ejecución del programa. Si se pasa el test se compila y ejecuta todo el código. En caso de no pasarlo los bugs se “encierran” antes de la ejecución.</li>
              <li>Chequeo de tipos <strong>dinámico</strong>: este tipo de chequeo se realiza durante la ejecución del programa y, en este caso, el motor ejecuta línea a línea y se detiene si encuentra un error de tipo (no ejecuta lo siguiente).</li>
            </p>

            <p className="mt-2 bg-gray-800/5 p-4 rounded-md max-w-prose">
            Javascript (como php, python y ruby) utiliza chequeo de tipos dinámico. Es decir, inmediatamente antes de ejecutar una línea del código se chequea la consistencia de tipos y si pasa el test entonces se ejecuta y en caso contario se detiene la ejecución. Es justamente por eso que se dice que Javascript es un lenguaje dinámico.
            </p>

            
          </section>

          <section className="mt-3">
            <h2 className="mt-1 text-lg max-w-prose underline underline-offset-2">
            Severidad de Tipos y Coerción de Tipos
            </h2>

            <p className="mt-2 max-w-prose">
            Hasta aquí hemos visto que Javascript, como cualquier otro lenguaje, realiza un chequeo de tipos. Pero, ¿cómo determina si se está incurriendo en un error de tipos o no? ¿es muy restrictivo o, por el contario, muy laxo? Acá comienza a jugar la severidad del lenguaje respecto a los tipos.
              
            </p>

            <p className="mt-2 max-w-prose">
            Cada lenguaje tiene distintos niveles restrictivos para considerar si se está incurriendo en errores de tipos. Haciendo un ordenamiento desde los más restrictivos a los más flexibles se pueden mencionar: C#, Java, Python, Php y Javascript.
            </p>

            <p className="mt-2 max-w-prose">
            Algunos consideran que Javascript posee un tipado demasiado débil. Esto sumado al chequeo de datos dinámico implica que Javascript es un lenguaje dinámico débilmente tipado.
              
            </p>

            <p className="mt-2 max-w-prose">
            Cuando se dice que Javascript es débilmente tipado se está diciendo que, en realidad, permite operaciones entre variables con datos de diferentes tipos. Naturalmente, para poder hacer esto Javascript debe tener reglas acerca de como convertir datos para poder hacer operaciones con esas variables. Este fenómeno se denomina Coerción de Tipos.
            </p>

            <p className="mt-2 max-w-prose">
            Por ejemplo si se quiere sumar un number y un string, Javascript lo permite. Para ello convierte el number a un string, los concatena y devuelve un string. 
            </p>

            <p className="mt-2 max-w-prose">
            Por otro lado, si se restan un number y un string, se coerciona el string a number y devuelve un number. Si se resta un numero y un string que no sea un carácter numérico, se devuelve un dato number con valor NaN 
            </p>

            <p className="mt-2 max-w-prose">
            Se puede sumar un numero y un array. En ese caso Javascript coerciona ambos datos a string y los concatena.
            </p>

          </section>

          <section className="mt-3">
            <h2 className="mt-1 text-lg max-w-prose underline underline-offset-2">
            Coerción Explícita de tipos
            </h2>

            <p className="mt-2 max-w-prose">
            Esta flexibilidad que da la coerción de tipos tiene su lado riesgoso: podemos cometer un error que Javascript procesa como algo válido y no avisa. En definitiva, como desarrolladores debemos tener tomar precauciones para que esto no suceda.
            </p>

            <p className="mt-2 max-w-prose">
            Una alternativa muy utilizada es convertir explícitamente los tipo a asignar a las variables.
            </p>

            <p className="mt-2 max-w-prose">
            Si queremos asegurarnos que se va a pasar un dato de tipo string podemos utilizar <strong>String(dato)</strong>, <strong>dato + “”</strong> o <strong>(dato).toString()</strong>
            </p>

            <p className="mt-2 max-w-prose">
            Para datos de tipo numérico podemos utilizar <strong>Number(dato)</strong> o <strong>+dato</strong>
            </p>

            <p className="mt-2 max-w-prose">
            Finalmente, para booleanos se puede utilizar <strong>Boolean(dato)</strong> o <strong>!!“dato”</strong>
            </p>

          </section>

         

<section className="mt-3">
  <h2 className="w-full mt-1  text-lg sm:leading-tight font-normal font-sans text-left max-w-prose underline underline-offset-2">
  ¿Querés Saber Más?
  </h2>

  <p className="mt-2 max-w-prose">
  Si este tema te interesó acá te dejo un video de Sacha que me pareció muy bueno:
    
  </p>

  <iframe className="m-auto mt-6 w-full h-96" src="https://www.youtube.com/embed/0ei4nb49GKo" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

  

  
</section>

     
        </section>
      </main>
    </Fade>
  );
}

export default TipadoDinamicoDebil;
