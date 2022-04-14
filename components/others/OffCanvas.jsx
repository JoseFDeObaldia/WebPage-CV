import styles from "../../scss/OffCanvas.module.scss";
import Navbar from "./Navbar";


const defaultValues = [
    {text: "Home", anchor: "#", status: "active"},
    {text: "About Us", anchor: "#" },
    {text: "Contact", anchor: "#"}
    ];

const defaultId = {id: ""};

const OffCanvas = ( {values=defaultValues, id = defaultId} ) => {
    return(
        <div className="offcanvas offcanvas-start bg-black" tabIndex="-1" id={id} aria-labelledby="offcanvasLabel">
            <div className="offcanvas-header">
                <button type="button" className="btn-close btn-close-white ms-auto" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>

            <div className="offcanvas-body">
                <Navbar values={values} styles={styles}/>
            </div>
        </div>
    );
}
export default OffCanvas;