import { Link } from 'react-router-dom';
import styles from './Title.module.css';

function Title () {
    return (
        <div className={styles.container}>
            <div>
                <Link to="/Hueband">
                    <a className={styles.hb}>HUEBAND</a>
                </Link>
            </div>
            <div>
                <Link to="/Hueband">
                    <a className={styles.films}>FILMS</a>
                </Link>
            </div>
        </div>
    )
}

export default Title;