import styles from "../../scss/CheckBox.module.scss";

const CheckBox = () => {
    return (
        <div className={styles.div}>
            <label className={styles.div__label}>
                <input type="checkbox" />
                <span className={styles.check1}></span>
            </label>

            <label className={styles.div__label}>
                <input type="checkbox" />
                <span className={styles.check2}></span>
            </label>
        </div>
    );
}
export default CheckBox;