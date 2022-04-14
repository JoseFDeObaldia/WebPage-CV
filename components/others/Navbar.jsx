import { useState } from "react";

const defaultValues = [
    {id: 0, text: "Home", anchor: "#", status: "active"},
    {id: 1, text: "About Us", anchor: "#" },
    {id: 2, text: "Contact", anchor: "#"}
    ];

const Navbar = ( {values = defaultValues, styles} ) => {

    var activo = null;
    values.map( values => values.status == "active" ? activo = values.id : null);
    const [state, setState] = useState([true, activo]);

    return (
        <>
        <nav className={styles.navbar}>
            <ul className={styles.navbar__ul}>
                {
                    values.map( values => {
                        return (
                            <li className = {styles.li}
                                key={values.text}
                            >
                                <a  id={values.id}
                                    href={values.status == "disabled" ? null : values.anchor}
                                    onClick={() => setState([true, values.id])}
                                    className={ (values.status == "disabled") ? styles.disabled || styles.a :
                                        (state[0] == true && state[1] == values.id) ? styles.active || styles.a : styles.navbar__item || styles.a}
                                >
                                    {values.text}
                                </a>
                            </li> 
                            )
                        }
                    )
                }
            </ul>
        </nav>

        <div className={styles.signButton}>
            <a className={styles.signButton__a} href="#SobreMi" onClick={() => setState([true, 1])}></a>
            <svg className={styles.signButton__svg} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z" />
            </svg>
        </div>
        </>
    );
}
export default Navbar;