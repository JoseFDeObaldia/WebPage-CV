import Title from "./others/Title";
import styles from "../scss/Skills.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from "react";

var j = 0;

const Skills = ( {config} ) => {

    const [state, setState] = useState( config.cardsContent[0].title);
    const handleState = (e, name)=> {
        e.preventDefault();
        setState(name);
    }

    return(
        <section className="container pt-md-5 pt-2" id={config.id}>

            <Title title="Habilidades"/>

            <div className="container">
                <div className="row">
                    <div className="col-9 col-md-7">
                        <i className={styles.title}>Un poco más de información:</i>
                        
                        {
                            <>
                                <h6 className={styles.title2}>{config.cardsContent.map( item =>
                                    item.title == state ? item.title : null
                                )}</h6>
                                <hr className={styles.hr}/>
                                <p className={styles.text}>{config.cardsContent.map( item =>
                                    item.title == state ? item.text : null
                                )}</p>
                                <hr className={styles.hr}/>
                            </>
                        }

                    </div>
                    <div className="col-3 col-md-5">
                        <i className={styles.title}>Mis habilidades:</i>
                        <div className="row">
                            
                            {
                                config.cardsContent.map( item => 
                                
                                    <div key={item.title} className={"col-7 ms-3 ms-md-0 col-sm-6 col-md-4 p-0"}>
                                        <div className={item.title == state ? styles.cardActive : styles.card}
                                             onClick={e => handleState(e, item.title)}
                                        
                                        >
                                            <FontAwesomeIcon className={item.title == state ? styles.card__iconActive : styles.card__icon} icon={item.icon} />
                                        </div>
                                    </div>

                                )
                            }

                        </div>
                    </div>
                </div>
            </div>

            <div className="accordion mt-3 mb-5 pb-5" id="accordionFlushExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingOne">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            Otras Habilidades
                        </button>
                    </h2>
                    <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne"
                        data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">
                            Otras hablidades que podría destacar son proactividad y buena capacidad de dialogo. Además de conocimientos en Mátemáticas, Álgebra Lineal, Cálculo y Física.
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Skills;