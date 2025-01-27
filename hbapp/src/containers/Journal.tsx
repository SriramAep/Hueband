import Title from "../components/Title";
import Header from "../components/Header";
import styles from "./Journal.module.css";

function Journal () {
    return (
    <div>
        <div className={styles.flex}>
            <Title></Title>
            <Header props={["HUE SERIES", "ABOUT US", "JOIN US"]} />
        </div>
        <h1>Journal Test</h1>
    </div>
    );
}

export default Journal;