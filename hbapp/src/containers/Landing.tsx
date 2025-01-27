import { useEffect } from 'react'
import styles from './Landing.module.css'
import Header from '../components/Header';
import silhouette from '../assets/Landing.jpeg';
import Welcome from '../components/Welcome';
// import { motion, animate, useMotionTemplate, useMotionValue } from 'framer-motion';
import { motion, animate, useMotionValue } from 'framer-motion';

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

function Landing() {
    const color = useMotionValue(COLORS_TOP[0]);

    useEffect(() => {
        animate(color, COLORS_TOP, {
        ease: "easeInOut",
        duration: 10,
        repeat: Infinity,
        repeatType: "mirror",
        });
    }, []);

    // const backgroundImage = useMotionTemplate`radial-gradient(150% 200% at 100% 0%, #020617 60%, ${color})`;

  return (
    <motion.div className={styles.totalBox}
        style={{
            // backgroundImage,
        }}>
        <div className={styles.subBox}>
            <Header props={["FILM JOURNAL", "HUE SERIES", "JOIN US"]} />
            <Welcome />
        </div>
        <div >
            <img className={styles.silhouette} src={silhouette} alt={"silhouette"}/> 
        </div>
    </motion.div>
  )
}

export default Landing
