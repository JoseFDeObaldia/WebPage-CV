import Title from "./others/Title";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../scss/Contact.module.scss";

const Contact = ({config}) => {
    return (
        <section className="container pt-md-5 pt-2 mb-5 pb-5" id={config.id}>
                <div className={styles.center}>
                    <Title title={config.id}/>
                    <p className={styles.text}>Puedes contactarme por cualquiera de los siguientes links. ¡Espero tu mensaje!</p>
                    <div className="d-flex align-items-center justify-content-center my-5 py-5">
                        {
                            config.cardsContent.map(item =>   
                                <a key={item.title} className={styles.a} href={item.link} target="_BLANCK">
                                    <FontAwesomeIcon className={styles.icon} icon={item.icon}/>
                                </a>
                            )
                        }
                    </div>
                    {/* <p className={styles.text}>¡Por último, si lo deseas, puedes continuar aquí abajo y dejarme una pequeña retroalimentación para que pueda seguir mejorando!</p> */}
                    <p className={styles.text}>¿Ya has llegado hasta abajo? Si llegaste hasta aquí no queda más que darte las gracias por tu tiempo. ¡Espero podamos contactarnos!</p>

                </div>
        </section>
    );
}
export default Contact;