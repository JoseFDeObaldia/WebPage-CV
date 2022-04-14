import styles from "../scss/Home.module.scss";
import Typed from "typed.js";
import { useEffect, useRef } from "react";


const defaultConfig = {id: 0};

const Home = ( {config=defaultConfig} ) => {

    const el = useRef(null);

    useEffect(() => {
      const typed = new Typed(el.current, {
        strings: ["Maquetador Web", "Frontend Developer"], 
        startDelay: 2000,
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1200,
        loop: true,
        loopCount: false,
      });
  
      return () => {
        typed.destroy();
      };
    }, []);

    return (
        <section className={styles.background} id={config.id}>
            <div className={styles.opacity}>
                <div className={styles.home__card}>
                    <p className={styles.title}>Hola, soy</p>
                    <h1 className={styles.title && styles.titleBig}>Jose De Obaldia</h1>
                    <p className={styles.title}>y soy un, <span className={styles.typed} ref={el}></span></p>
                    {/* <button className={styles.button}>Descargar mi CV</button> */}
                </div>
            </div>
            <div className={styles.home__panel}></div>
        </section>
    );
}
export default Home;