import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import { motion } from 'framer-motion';
import { globalMap } from './GlobalMap';

function Header  ({props}: {props: string[]}) {
    return (
        <div className={styles.head}>
            {props.map(function (prop) {
                return (
                    <div className={styles.center}>
                        <motion.a
                            whileHover={{
                                scale: 1.03,
                            }}
                            className={styles.underscore}
                            >
                            <Link to={globalMap.get(prop)}>
                                {prop}
                            </Link>
                        </motion.a>
                    </div>
                );
            })} 
        </div>
    )
}

export default Header;