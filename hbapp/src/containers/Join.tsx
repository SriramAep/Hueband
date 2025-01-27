import Title from "../components/Title";
import Header from "../components/Header";
import styles from "./Join.module.css";

function Join () {
    return (
    <div>
        <div className={styles.flex}>
            <Title></Title>
            <Header props={["FILM JOURNAL", "HUE SERIES", "ABOUT US"]} />
        </div>
        <h1>Join Test</h1>
    </div>
    );
}

export default Join;