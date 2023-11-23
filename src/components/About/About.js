import styles from './styles.module.css';
import { Link } from 'react-router-dom';

export const About = () => {

    return (
        <>
        <div className={styles.AboutDiv}>
            <div className={styles.AboutDivImg}>
        <img src="./images/m.jpg" className={styles.AboutImg} alt="m" width="305" height="305 " /> 
            </div>
        <div className={styles.AboutDivP}>
        <p className={styles.AboutParagraph}>MovInternet is a free platform where you can easly find your next favorite movie or tv-series by watching their trailers and reading their description. You can also like the movie you just find by pressing the Like button on it. All you need to do is to be our user. If you dont have an account you can register by clicking <Link to='/register'>here</Link>. </p>
        </div>
        </div>
        </>
    )
}