import styles from './Welcome.module.css';
import { useEffect } from "react";
import {motion, useMotionTemplate, useMotionValue, animate} from 'framer-motion';
import { FiArrowRight } from "react-icons/fi";

const COLORS_TOP = ["#1E67C6", "#CE84CF", "#DD335C"];

function Welcome () {

    const color = useMotionValue(COLORS_TOP[0]);

    useEffect(() => {
        animate(color, COLORS_TOP, {
          ease: "easeInOut",
          duration: 10,
          repeat: Infinity,
          repeatType: "mirror",
        });
    }, []);

    const border = useMotionTemplate`1px solid ${color}`;
    const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

    return (
        <motion.div
            className={styles.welcomeBox}>
            <div>
                <h2 className={styles.welcome}>Welcome to</h2>
                <h2 className={styles.hb}>HUEBAND</h2>
                <h2 className={styles.films}>FILMS</h2>
                <motion.button
                    style={{
                        border,
                        boxShadow,
                    }}
                    whileHover={{
                        scale: 1.015,
                    }}
                    whileTap={{
                        scale: 0.985,
                    }}
                    className={styles.dive}
                    >
                    Dive In
                    <FiArrowRight className={styles.arrowRight} />
                </motion.button>
            </div>
        </motion.div>
    )
}

export default Welcome;