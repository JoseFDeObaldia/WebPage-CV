import GearButton from "./others/GearButton";
import ArrowButton from "./others/ArrowButton";
import Navbar from "./others/Navbar";
import OffCanvas from "./others/OffCanvas";
import styles from "../scss/Navbar.module.scss";

const valores = [
    {id: 0, text: "Inicio", anchor: "#Inicio", status: "active"},
    {id: 1, text: "Sobre Mi", anchor: "#SobreMi", status: "normal"},
    {id: 2, text: "Habilidades", anchor: "#Habilidades", status: "normal"},
    {id: 3, text: "Portafolio", anchor: "#Portafolio", status: "disabled"},
    {id: 4, text: "Contacto", anchor: "#Contacto", status: "normal"}
    
];

const valores2 = [
    {text: "Inglés", anchor: "", status: "normal"},
    {text: "Español", anchor: "", status: "normal"}
];

const id = {id: "offcanvas1"};
const id2 = { id: "offcanvas2"};


const Header = () => {
    return (
        <header>
            <Navbar values={valores} styles={styles}/>
            <OffCanvas values={valores} id={id.id}/>
            <OffCanvas values={valores2} id={id2.id}/>

            {/* <GearButton /> */}
            <ArrowButton />
        </header>
    );
}
export default Header;