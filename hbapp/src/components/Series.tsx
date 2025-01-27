import styles from './Series.module.css';

const SeriesList = ['VIOLET', 'INDIGO', 'BLUE', 'GREEN', 'YELLOW', 'ORANGE', 'RED'];

function Series () {
    return (
        <div className={styles.nameBox}>
            {SeriesList.map(function (series) {

                if(['VIOLET', 'INDIGO', 'BLUE'].includes(series)) {
                    return (
                        <div className={styles.color}>
                            <p>{series}</p>
                        </div>
                    );
                } else {
                    return (
                        <div className={styles.color2}>
                            <p>{series}</p>
                        </div>
                    );
                }
            })}
        </div>
    );
}

export default Series;