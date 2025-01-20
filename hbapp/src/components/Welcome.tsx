import styles from './Welcome.module.css';
import arrow from '../assets/arrow_right_alt.svg';

function Welcome () {
    return (
        <div className={styles.welcomeBox}>
            <div>
                <h2 className={styles.welcome}>Welcome to</h2>
                <h2 className={styles.hb}>HUEBAND</h2>
                <h2 className={styles.films}>FILMS</h2>
                <div className={styles.diveBox}>
                    <p className={styles.dive}>DIVE IN</p>
                    <img className= {styles.arrowRightsvg} src={arrow} alt={"arrow"}/>
                </div>
            </div>
        </div>
    )
}

export default Welcome;