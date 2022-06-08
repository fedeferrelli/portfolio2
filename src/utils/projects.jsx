import calculator from '../assets/img/images_projects/calculator_screen.jpg'
import cuotifica from '../assets/img/images_projects/cuotifica_screen.jpg'
import toDoList from '../assets/img/images_projects/toDoList_screen.jpg'
import menu_consumer from '../assets/img/images_projects/menu_consumer_screen.jpg'
import menu_client from '../assets/img/images_projects/menu_client_screen.jpg'
import criptoCotizador from '../assets/img/images_projects/criptoCotizador_screen.jpg'
import weatherApp from '../assets/img/images_projects/weatherApp_screen.jpg'
import miJardin from '../assets/img/images_projects/miJardin_screen.jpg'
import portfolio from '../assets/img/images_projects/portfolio_screen.jpg'


import react from '../Components/About/stack/react.svg'



const projects = [
  {
    name: "Financial Calculator",
    description_esp:
      "Con esta app podés calcular las variables de una operación de crédito típica: la tasa de interés, el monto a financiar, la cuota a pagar y los periodos de la operación.",
    description_eng:
    "This app will allow you to calculate the variables of a typical credit operation: the interest rate, credit's amount, the regular payment and the number of periods.",
    link: "https://claculadora-fedeferrelli.vercel.app/",
    code: "https://github.com/fedeferrelli/clac",
    image: calculator,
    stack: [
      'react',
      "react-dom",
      "react-fade-in",
      "react-router-dom",
      "react-scroll",
      "taildwind",
      "vite"
    ],
  },

  {
    name: "Cuotificador",
    description_esp:
      "¿Pagar en efectivo o cuotificar? Esta app te ayuda a calcular que es lo que más te conviene.",
    description_eng:
    "",
    link: "https://cuotificador-fedeferrelli.vercel.app/",
    code: "https://github.com/fedeferrelli/cuotificador",
    image: cuotifica,
    stack: [
      'react',
      "react-dom",
      "react-fade-in",
      "react-router-dom",
      "taildwind",
      "vite"
    ],
  },

  {
    name: "To Do List!",
    description_esp:
      "Esta aplicación creada con React permite administrar tareas. Es una manera fácil, divertida y eficiente de ordenar las cosas que tenés para hacer y aumentar la productividad de tu tiempo!",
    description_eng:
      "This application created with React allows you to manage tasks. It's an easy, fun and efficient way to organize the things you have to do and increase productivity!",
    link: "https://todo-list-fjfm.vercel.app/",
    code: "https://github.com/fedeferrelli/todo_list",
    image: toDoList,
    stack: [
      "React",
      "Firebase",
      "react-dom",
      "react-fade-in",
      "react-icons",
      "react-router-dom",
    ],
  },

  {
    name: "Menu Consumer POV",
    description_esp:
      "Esta aplicación permite visualizar y ordenar distintos platos de un menú. Está optimizada para versión mobile y forma parte de un set de aplicaciones para administar menues.",
    description_eng:
      "This application allows to view and order different dishes of a menu. It is optimized for mobile version and is part of a set of applications to manage menues.",
    link: "https://menu-fedeferrelli.vercel.app/",
    code: "https://github.com/fedeferrelli/menu",
    image: menu_consumer,
    stack: [
      "React",
      "Tailwind",
      "Firebase",
      "react-dom",
      "react-fade-in",
      "react-icons",
      "react-router-dom",
      "lodash"
    ],
  },

  {
    name: "Menu Client POV",
    description_esp:
      "Esta aplicación permite administrar distintos platos de un menú desde la perspectiva del cliente. Está optimizada para versión mobile y forma parte de un set de aplicaciones para administar menues.",
    description_eng:
      "This application allows managing different dishes of a menu from the customer's perspective. It is optimized for mobile version and is part of a set of applications to manage menues",
    link: "https://menu-cliente-fedeferrelli.vercel.app/",
    code: "https://github.com/fedeferrelli/menu_cliente",
    image: menu_client,
    stack: [
      "React",
      "Tailwind",
      "Firebase",
      "react-firebase-file-uploader",
      "react-router-dom",
      "react-icons",
      "lodash",
      "react-awesome-reveal",
      "formik",
      "yup"
    ],
  },

  {
    name: "Criptocotizador",
    description_esp:
      "Esta aplicación creada con React Native permite consultar las principales caracterísiticas de las primeras 100 criptomonedas (de acuerdo a su capitalización de mercado).",
    description_eng:
      "This application created with React Native allows you to consult the main characteristics of the first 100 cryptocurrencies (according to their market capitalization).",
    apk: "https://drive.google.com/file/d/1csGNH7VmeqfSFS1PhrPFgGi36tFt7Z3E/view?usp=sharing",
    code: "https://github.com/fedeferrelli/criptocotizador",
    image: criptoCotizador,
    stack: [
      "React Native",
      "react-dom",
      "react-native-chart-kit",
      "react-native-elements",
      "react-navigation",
      "axios",
      "expo",
    ],
  },

  {
    name: "Wheater App",
    description_esp:
      "Con esta aplicación se pueden agregar varias ciudades de cualquier parte del mundo, ubicarlas en el mapa y consultar el clima tanto actual como la previsión de la semana.",
    description_eng:
      "With this application you can add several cities from anywhere in the world, locate them on the map and check the current weather as well as the weekly forecast.",
    apk: "https://drive.google.com/file/d/1kLk5deQQww7zwBtHpSSgT_rxnWQ0OX3R/view",
    code: "https://github.com/fedeferrelli/weatherapp",
    image: weatherApp,
    stack: [
      "React Native",
      "react-dom",
      "async-storage",
      "picker",
      "navigation",
      "maps",
      "elements",
      "reanimated",
      "axios",
      "expo",
    ],
  },

  {
    name: "miJardín",
    description_esp:
      "Página diseñada para un emprendimiento familiar relacionado con la jardinería. Se pueden ver los servicios y distintas formas de contacto",
    description_eng:
      "Web Page developed for a family business related to gardening. You can see the services and different ways of contact",
    link: "https://mi-jardin.netlify.app/",
    code: "https://github.com/fedeferrelli/miJardin",
    image: miJardin,
    stack: [
      "React",
      "tailwind",
      "react-dom",
      "react-awesome-reveal",
      "react-icons",
      "react-router-dom",
      "react-scroll",
    ],
  },

  {
    name: "Portfolio",
    description_esp:
      "¿Por qué no agregar está mismísima página que estás mirando? Como podés ver, aquí constan mis datos personales, una breve muestra de lo que hago y formas de contactarse conmigo.",
    description_eng:
      "Why not to include the web page you are looking at? As you can see, here are personal information, the kind of things that I like to do and many ways to get in touch with me.",
    link: "https://portafolio-fedeferrelli.vercel.app/",
    code: "https://github.com/fedeferrelli/portfolio2",
    image: portfolio,
    stack: [
      "React",
      "react-awesome-reveal",

      "react-dom",

      "vite",

      "react-router-dom",

      "react-scroll",

      "tailwindcss", 
    ],
  },
];

export default projects;
