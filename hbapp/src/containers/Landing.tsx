import { useState } from 'react'
import styles from './Landing.module.css'
import Header from '../components/Header';
import silhouette from '../assets/Landing.jpeg';
import Welcome from '../components/Welcome';

function Landing() {
//   const [count, setCount] = useState(0)

  return (
    <div className={styles.totalBox}>
    <div className={styles.subBox}>
        <Header props={["FILM JOURNAL", "HUE SERIES", "JOIN US"]} />
        <Welcome />
    </div>
    <div>
        <img src={silhouette} alt={"silhouette"}/>
    </div>
    </div>
  )
}

export default Landing
