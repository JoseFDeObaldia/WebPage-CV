import Head from 'next/head'
import Header from '../components/Header';
import Script from 'next/script'

import { faUser, faLocationDot, faFlag, faEnvelopeOpenText, faCalendar } from '@fortawesome/free-solid-svg-icons';
import { faHtml5, faCss3Alt, faSass, faJs, faBootstrap, faGithub, faReact, faNodeJs, faTelegram, faWhatsapp, faLinkedin, faInstagram, faGoogle, } from '@fortawesome/free-brands-svg-icons';

import Home from '../components/Home';
import AboutMe from '../components/AboutMe';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
import Footer from '../components/Footer';


const sectionHome = {
  id: "Inicio"
};
const sectionAboutMe = {
  id: "SobreMi",
  cardsContent: [
    {title: "Nombre", comment: "José De Obaldía", icon: faUser},
    {title: "Locacion", comment: "Chaco, Argentina", icon: faLocationDot},
    {title: "Nacionalidad", comment: "Argentina", icon: faFlag},
    {title: "Correo Electronico", comment: "josedeobaldia19@gmail.com", icon: faEnvelopeOpenText},
    {title: "Edad", comment: "20 años", icon: faCalendar},
  ],
  text1: "Soy un estudiante universitario con un gran interés por la programación y el desarrollo web que actualmente esta en búsqueda de un trabajo como desarrollador front-end. Soy una persona proactiva y con gran atención al detalle, mis objetivos son aumentar mis conocimientos y aprender sobre nuevas tecnologías.",
  text2: "¡Estoy muy emocionado por empezar a trabajar en esta área y poner a prueba mis habilidades!"
};
const sectionSkills = { 
  id: "Habilidades",
  cardsContent: [
    {title: "HTML 5", 
     text: "Manejo avanzado del lenguaje de marcado HTML 5 utilizando buenas prácticas semánticas, además de código limpio y ordenado. Utilizando la modularizacion para de este modo, generar código seccionado y reutilizable.",
     icon: faHtml5},
    {title: "CSS 3", 
     text: "Manejo avanzado de Hojas de estilo en CSS, utilizando la metodología BEM y aplicando Grid o FlexBox según la maquetación que se requiera.",
     icon: faCss3Alt},
    {title: "SASS",
     text: "Uso de nesting, mixins, functions y variables en SASS para generar código reutilizable. Uso de SASS nativo en Next.js utilizando módulos.",
     icon: faSass},
    {title: "JavaScript",
     text: "Manejo avanzado de javascript utilizando POO o programación funcional según se necesite, manejo de peticiones a APIs mediantes AJAX, Fecth y AXIOS", 
     icon: faJs},
    {title: "Bootstrap 5",
     text: "Manejo avanzado del framework de diseño Bootrstrap 5, trabajo orientado principalmente a su uso en componentes (Accordions, Toasts, Sliders, Menus, etc.).", 
     icon: faBootstrap},
    {title: "GitHub",
     text: "Manejo de la plataforma de GitHub para la administración de respositorios de Código en la nube.", 
     icon: faGithub},
    {title: "React.js",
     text: "Manejo de componentes en React haciendo uso de Content, Router, Redux y las librerias de Formik, Yup y styled-components. Conocimiento en Next.js. Manejo básico de componentes de clases (en caso de ser necesario).", 
     icon: faReact},
    {title: "Node.js",
     text: "Manejo del lenguaje de back-end Node.js. Manejo de paquetes, npm, y archivos JSON.", 
     icon: faNodeJs}
  ],
};
const sectionContact = {
  id: "Contacto", 
  cardsContent: [
    {title: "telegram", icon: faTelegram, link: "https://t.me/JoseDeObaldia"},
    {title: "gmail", icon: faGoogle, link: "mailto:josedeobaldia19@gmail.com"},
    {title: "whatsapp", icon: faWhatsapp, link: "https://wa.me/5493624041997"},
    {title: "linkedin", icon: faLinkedin, link: "https://www.linkedin.com/in/josedeobaldia19/"},
    {title: "instagram", icon: faInstagram, link: "https://www.instagram.com/jose_deobaldia/"}
  ]
};

export default function All() {
  return (
    
    <div>
      <Head>
        <title>CURRICULUM | José De Obaldia</title>
        <link rel="icon" href="/icono.icon" />
      </Head>

      <Header />
      <main data-bs-spy="scroll" data-bs-offset="0" tabIndex="0">
          <Home config={sectionHome}/>
          <AboutMe config={sectionAboutMe}/>
          <Skills config={sectionSkills} />
          <Contact config={sectionContact}/>
          <Footer />
      </main>

      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" />
    </div>
  )
}
