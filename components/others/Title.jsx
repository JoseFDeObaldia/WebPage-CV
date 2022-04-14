import styles from "../../scss/Title.module.scss";


const Title = ( {title} ) => {
    return(
        <div className={styles.title1__container || "my-5"}>
            <hr className={styles.title__line}/>
            <div className={styles.title__sign}><span>{title}</span></div>
            <hr className={styles.title__line}/>
        </div>
    );
}
export default Title;

