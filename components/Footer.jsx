import { useState } from 'react';
import styles from '../scss/Footer.module.scss';

const Footer = () => {

    // const [state1, setState1] = useState("- 2.5 estrellas (Regular)");
    // const handleChange = (value) => {
    //     if (value == 0) {
    //         setState1(`- ${value} estrellas (Muy Mala)`);
    //     } if (value <= 1.5 && value > 0) {
    //         setState1(`- ${value} estrellas (Mala)`);
    //     } if (value <= 2.5 && value > 1.5) {
    //         setState1(`- ${value} estrellas (Regular)`)
    //     } if (value <= 3.5 && value > 2.5) {
    //         setState1(`- ${value} estrellas (Buena)`)
    //     } if (value <= 4.5 && value > 3.5) {
    //         setState1(`- ${value} estrellas (Muy Buena)`)
    //     } if (value == 5) {
    //         setState1(`- ${value} estrellas (Excelente)`)
    //     }
    // }
    // const [state2, setState2] = useState("Nada");
    // const handleChange2 = (value) => {
    //     setState2(value);
    // }
    // const [state3, setState3] = useState("");
    // const handleChange3 = (value) => {
    //     setState3(value);
    // }


    return (
    <footer className="container-fluid b-0 bg-dark">

        {/* <div className="container d-flex flex-column justify-content-center align-items-center">
            <div className={styles.range}>
                <label for="#footer__range" className="form-label text-white">{`¿Que tal fue tu experiencia en el sitio? ${state1}`}</label>
                <input type="range" onChange={e => handleChange(e.target.value)} className="form-range" min="0" max="5" step="0.5" id="footer__range"/>
            </div>

            <div className={styles.select}> 
                <select class="form-select form-select w-100" onChange={e => handleChange2(e.target.value)} aria-label=".form-select-sm example">
                    <option selected>¿Cual de estas cosas deberia mejorar?</option>
                    <option value="1">Colorización</option>
                    <option value="2">Diseño Responsive</option>
                    <option value="3">Rendimiento</option>
                    <option value="4">Quizas más Animaciones</option>
                    <option value="5">Otro (déjalo en los comentarios)</option>
                </select>
            </div>

            <div className={styles.textarea}>
                <label for="exampleFormControlTextarea1" className="form-label text-white">Deja un comentario opcional.</label>
                <textarea onChange={e => handleChange3(e.target.value)} className="form-control rounded-1 border-0" id="exampleFormControlTextarea1" rows="3">...</textarea>
            </div>

            <div className={styles.submit}>
                <button type="button" className="btn btn-primary rounded-1 border-0 text-white w-100">Enviar</button>
            </div>
        </div>

        <hr className="text-white"/> */}

        <div className="text-white text-center mt-5 pt-5 pb-3">
            <p className="m-0 p-0">José De Obaldía | Abril 2022</p>
        </div>
    </footer>
 );
}
export default Footer;