import Header from "../components/Header";
import Title from "../components/Title";
import styles from './Hue.module.css';
import background from '../assets/FirstChoice2.png';
import Series from '../components/Series';

function Hue () {
    return (
        <div className={styles.mainBox}>
            <div className={styles.flex}>
                <Title></Title>
                <Header props={["FILM JOURNAL", "ABOUT US", "JOIN US"]} />
            </div>
            <div>
                <img className={styles.bg} src={background} alt={background}/>
                <div className={styles.series}>
                    <Series />
                </div>
            </div>
        </div>
    );
}

export default Hue;