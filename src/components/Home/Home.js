import styles from './styles.module.css';
import { Link } from 'react-router-dom';

export const Home = () => {

    return (
        <div className={styles.HomeDiv}>

            <div className="container-fluid text-center">
                <div className="row content">
                    <div className="col-sm-2 sidenav">
                    <p><Link to="#"></Link></p>
                    </div>
                    <div className="col-sm-8 text-left">
                        <h1 className={styles.welcome}>Welcome to MovInternet</h1>
                        <div className={styles.Images}>

                        <img src="./images/avengers.jpg" className={styles.Image} alt="Cinque Terre" width="225" height="306" /> 
                        <img src="./images/minions.jpg" className={styles.Image} alt="Cinque Terre" width="225" height="306 " /> 
                        <img src="./images/bettercallSaul.jpg" className={styles.Image} alt="Cinque Terre" width="225" height="305 " /> 
                        <img src="./images/interstellar.jpg" className={styles.Image} alt="Cinque Terre" width="225" height="305 " /> 
                        <img src="./images/deadpool.jpg" className={styles.Image} alt="Cinque Terre" width="225" height="305 " /> 
                        <img src="./images/naruto.jpg" className={styles.Image} alt="Cinque Terre" width="225" height="305 " /> 
                        <img src="./images/thenun.jpg" className={styles.Image} alt="Cinque Terre" width="225" height="305 " /> 
                        <img src="./images/loki.jpg" className={styles.Image} alt="Cinque Terre" width="225" height="305 " /> 
                        <img src="./images/breakingbad.jpg" className={styles.Image} alt="Cinque Terre" width="225" height="305 " /> 
                        <img src="./images/missionimpossible.jpg" className={styles.Image} alt="Cinque Terre" width="225" height="305 " /> 
                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}