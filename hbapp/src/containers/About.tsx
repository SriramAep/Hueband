import Title from "../components/Title";
import Header from "../components/Header";
import styles from "./About.module.css";

function About () {
    return (
    <div>
        <div className={styles.flex}>
            <Title></Title>
            <Header props={["FILM JOURNAL", "HUE SERIES", "JOIN US"]} />
        </div>
        <h1>About Test</h1>
    </div>
    );
}

export default About;