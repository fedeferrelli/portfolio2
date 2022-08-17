import React from "react";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import {BsArrowLeft} from "react-icons/bs"


function ValoresVersusDiferencias() {
  

  return (
    <Fade duration="1000" triggerOnce className="w-full pb-16">
      <main className="flex flex-col min-h-screen  w-full">
        <section className="bg-alternative p-4 flex  flex-col w-full text-white">
          <Link to="/blog">
            {" "}
            <button className="bg-terciary rounded-full w-auto font-normal hover:bg-terciary/70 duration-500 text-md py-2 text-primary px-3">
              {" "}
              <BsArrowLeft className="inline text-lg" /> Back to BLOG{" "}
            </button>
          </Link>

          <h1 className="w-full mt-4  text-secondary text-2xl sm:leading-tight font-semibold  font-sans text-center">
            Valores vs Referencias en Javascript
          </h1>

          <h2 className="w-full my-1  text-secondary text-md sm:leading-tight font-normal font-sans text-left max-w-prose">
            En Javascript las variables pueden tener asignaciones de diferentes
            tipos: por valores o por referencia. Esta distinción es muy
            importante dado que toda la lógica de un programa puede cambiar
            sustancialmente dependiendo del tipo de asignación.
          </h2>

          <p className="w-full mt-2  text-secondary text-sm font-thin font-sans text-left max-w-prose">
            En Javascript tenemos dos grandes grupos de tipo de datos:
            <li>Datos Primitivos y</li>
            <li>Objetos.</li>
            Estos datos son los que se pueden asignar a las variables cada vez que se crean.
          </p>

          <section className="mt-3">
            <h2 className="w-full mt-1  text-secondary text-lg sm:leading-tight font-normal font-sans text-left max-w-prose underline underline-offset-2">
            Asignación de valores vía Datos Primitivos
            </h2>

            <p className="w-full mt-2  text-secondary text-sm font-thin font-sans text-left max-w-prose">
              Los datos Primitivos son un tipo de dato básico dado que no poseen
              propiedades ni métodos y son inmutables. Existen 7 tipo de datos
              Primitivos:
              <li>String,</li>
              <li>Number,</li>
              <li>Boolean,</li>
              <li>null,</li>
              <li>undefined,</li>
              <li>symbol y</li>
              <li>bigint</li>
              <li>Objetos.</li>
              Estos datos son los que se pueden asignar a las variables cada vez
              que se crean.
            </p>

            <p className="w-full mt-2  text-secondary text-sm font-thin font-sans text-left max-w-prose">
              Al momento de crear una variable y asignarle un valor Primitivo,
              el motor de Javascript crea un pequeño contenedor en la memoria de
              la computadora que guardará ese valor asignado. Si se cambia el
              valor entonces en ese contenedor se descartará el valor previo y
              se guardará el nuevo.
            </p>

            <p className="w-full mt-2  text-secondary text-sm font-thin font-sans text-left max-w-prose">
              Ahora bien, si se crea una segunda variable y se le asigna el
              valor que tiene la primera se creará una copia del valor de la
              primera variable y se le asignará a la variable nueva.
            </p>

            <p className="w-full mt-2 bg-white/5 p-4 rounded-sm  text-secondary text-sm font-thin font-sans text-left max-w-prose">
              Si se utiliza una variable que tiene asignado un valor primitivo
              para asignar el valor de otra variable, se crea una copia del
              valor pero no queda ninguna relación entre las variables: las
              variables en Javascript son totalmente independientes.
            </p>

            <p className="w-full mt-2  text-secondary text-sm font-thin font-sans text-left max-w-prose">
            Posteriormente, si modificamos el valor asignado a la segunda variable entonces la modificación solo operará sobre el valor de la segunda variable: la primera variable ‘ni se enterará’ del cambio.
            </p>
          </section>

          <section className="mt-3">
            <h2 className="w-full mt-1  text-secondary text-lg sm:leading-tight font-normal font-sans text-left max-w-prose underline underline-offset-2">
            Asignación de valores vía Objetos
            </h2>

            <p className="w-full mt-2  text-secondary text-sm font-thin font-sans text-left max-w-prose">
            El concepto de Objeto es de suma importancia de Javascript dado que es un lenguaje orientado, justamente, a objetos. Se dice que todo lo que no sea un valor primitivo es un Objeto.
              
            </p>

            <p className="w-full mt-2  text-secondary text-sm font-thin font-sans text-left max-w-prose">
            Los Objetos son datos complejos que pueden guardar varios tipos de datos, admiten inclusiones y eliminaciones, etc., es decir, son mutables. Además poseen propiedades y métodos cuya utilización son el alma de Javascript.
            </p>

            <p className="w-full mt-2  text-secondary text-sm font-thin font-sans text-left max-w-prose">
            Algunos Objetos que vienen de forma predeterminada en Javascript son:
              <li>object,</li>
              <li>array, y</li>
              <li>function</li>
              
            </p>

            <p className="w-full mt-2  text-secondary text-sm font-thin font-sans text-left max-w-prose">
            Este tipo de valores no ocupa un espacio determinado en la memoria como los valores primitivos. En realidad el motor de Javascript almacena los Objetos en un tipo especial de memoria dinámica: heap. Este espacio de memoria es mucho más grande que la pila en la que se almacenan los valores primitivos, pero también es más costoso el acceso (en términos de tiempo).
            </p>

            <p className="w-full mt-2  text-secondary text-sm font-thin font-sans text-left max-w-prose">
            Cada vez que se crea una variable y se le asigna un Objeto, el motor de Javascript almacenará ese Objeto en la memoria heap y creará una referencia para saber en que lugar de la memoria está guardado: esa dirección de memoria es la que se asigna a la variable.
            </p>

            <p className="w-full mt-2 bg-white/5 p-4 rounded-sm  text-secondary text-sm font-thin font-sans text-left max-w-prose">
            Cuando se crea un objeto el motor de Javascript lo guarda en la memoria dinámica e inmediatamente crea una clave que sirve como una dirección de memoria que apunta a ese Objeto y se lo asigna a la variable en cuestión. Este tipo de asignación se denomina asignación por referencia.
            </p>

            <p className="w-full mt-2  text-secondary text-sm font-thin font-sans text-left max-w-prose">
            Si se asigna una variable a través del valor de otra variable que apunta hacia un Objeto entonces ambas variables van a estar ‘apuntando’ al mismo espacio de memoria, es decir lo que se copia entre variables es la referencia a la memoria heap. Esto último reviste mayor importancia: si algunas de las variables genera un cambio en el objeto, entonces ambas variables reflejaran el cambio.
            </p>

            <p className="w-full mt-2 bg-white/5 p-4 rounded-sm  text-secondary text-sm font-thin font-sans text-left max-w-prose">
            Si existen 2 ó mas variables que apunten a la misma dirección de memoria (en la que habita un Objeto) entonces cuando el Objeto cambie ese cambio se mostrará al invocar cualquiera de las variables mencionadas.
            </p>
          </section>

          <section className="mt-3">
            <h2 className="w-full mt-1  text-secondary text-lg sm:leading-tight font-normal font-sans text-left max-w-prose underline underline-offset-2">
            Conclusión
            </h2>

            <p className="w-full mt-2  text-secondary text-sm font-thin font-sans text-left max-w-prose">
            Hemos observado como funcionan las asignaciones a variables a través de los dos grupos de valores de Javascript: datos Primitivos y Objetos. Los datos Primitivos se guardan en memoria y se asignan “directamente” a las variables mientras que los Objetos poseen una dirección en la memoria dinámica a través de la cual acceden las variables que apuntan hacia ellos.
              
            </p>

            <p className="w-full mt-2  text-secondary text-sm font-thin font-sans text-left max-w-prose">
            Este aspecto es muy importante y muchos de los bugs que se ven a diario obedecen a no tener en claro esta distinción. Al asignar a una variable un valor a través de otra variable es de suma importancia entender cual es el valor asignado a la variable original.
            </p>

            <p className="w-full mt-2  text-secondary text-sm font-thin font-sans text-left max-w-prose">
            Si ese valor se asignó a través de de un dato Primitivo entonces la segunda variable recibe ese valor mediante una copia en un nuevo contenedor de la memoria (es como si se hubiese escrito nuevamente el valor literal). Al contrario, si la variable original tiene asignada una dirección de referencia hacia el espacio de la memoria dinámica en la que se guardó un Objeto entonces lo que se asigna a la nueva variable es, justamente, esa dirección de referencia: existirán ahora dos variables que ‘apuntan’ a un único Objeto. Naturalmente, si ese Objeto cambia entonces ambas variables mostrarán el cambio al ser invocadas.
              
            </p>

            <p className="w-full mt-2  text-secondary text-sm font-thin font-sans text-left max-w-prose">
            Finalmente, la lógica anterior se mantiene inalterada cuando se pasan valores como parámetros a funciones. Si el valor que se pasa es un Primitivo entonces los cambios realizados dentro de la función no se ‘trasladarán’ a la variable original que está fuera de la función. En cambio si lo que se pasa como parámetro es una referencia a un Objeto entonces la variable que ‘apunta’ a ese Objeto mostrará las modificaciones que el Objeto sufra dentro de la función.
            </p>

            
          </section>

         

<section className="mt-3">
  <h2 className="w-full mt-1  text-secondary text-lg sm:leading-tight font-normal font-sans text-left max-w-prose underline underline-offset-2">
  ¿Querés Saber Más?
  </h2>

  <p className="w-full mt-2  text-secondary text-sm font-thin font-sans text-left max-w-prose">
  Si este tema te interesó acá te dejo un video de Sacha que me pareció muy bueno:
    
  </p>

  <iframe className="m-auto mt-6 w-auto sm:w-[560px] sm:h-[315px]" src="https://www.youtube.com/embed/AvkyOrWkuQc" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

  

  
</section>

     
        </section>
      </main>
    </Fade>
  );
}

export default ValoresVersusDiferencias;
