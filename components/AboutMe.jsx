import Title from "./others/Title";
import styles from "../scss/AboutMe.module.scss";
import Image from "next/image";
import profilePicture from "../img/profile-image.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const AboutMe = ( {config} ) => {

    return(
            <section className="container mt-5 pt-md-5 pt-2" id={config.id}>
                <Title title="Sobre Mi"/>

                <div className="row justify-content-center mt-5">

                    <div className="col-7 col-md-4 col-lg-3 d-flex justify-content-center align-items-center mb-3 mb-md-0">
                        <div className={"card" || styles.profileCustom}>
                            <Image src={profilePicture} width={300} height={300} alt="Profile Image" title= "Jose De Obaldía"/>
                        </div>
                    </div>

                    <div className="col-12 col-md-8 col-lg-9 justify-content-center align-items-center">
                        <div className="row justify-content-start">
                            
                            {
                                config.cardsContent.map(item => 
                                    <div key={item.title} className="col-10 col-sm-6">
                                        <div className={styles.card}>
                                            <FontAwesomeIcon className={styles.i} icon={item.icon}/>
                                            <div className={styles.container}>
                                                <h5>{item.title}</h5>
                                                <p>{item.comment}</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }

                        </div>
                    </div>

                </div>

                <div className="row justify-content-center mt-3 fs-5 fw-light">
                    <p className={styles.text}>{config.text1}</p>
                    <p className={styles.text}>{config.text2}</p>
                </div>
            </section>
    );
}
export default AboutMe;