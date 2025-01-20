import styles from './Header.module.css';


function Header  ({props}) {
    return (
        <div className={styles.head}>
            <a>{props[0]}</a>
            <a>{props[1]}</a>
            <a>{props[2]}</a>
        </div>
    )
}

export default Header;