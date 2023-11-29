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
                        <Link to='http://localhost:3000/catalog/4f116ee8-fe52-4cd2-9dbb-851cc041d31d'><img src="./images/avengers.jpg" className={styles.Image} alt="mov" width="225" height="306" /> </Link>
                        <Link to='http://localhost:3000/catalog/28770636-5e73-4f6a-89af-c764059e93c2'><img src="./images/minions.jpg" className={styles.Image} alt="mov" width="225" height="306 " /></Link>
                        <Link to='http://localhost:3000/catalog/b5b04f15-6b3a-4056-85bd-63ea82fd30db'><img src="./images/bettercallSaul.jpg" className={styles.Image} alt="mov" width="225" height="305 " /> </Link>
                        <Link to='http://localhost:3000/catalog/ca210c6c-5c68-4a45-9742-5417737155c7'><img src="./images/interstellar.jpg" className={styles.Image} alt="mov" width="225" height="305 " /> </Link>
                        <Link to='http://localhost:3000/catalog/f6431c90-e8b1-4fd1-8752-1165c194dd92'><img src="./images/deadpool.jpg" className={styles.Image} alt="mov" width="225" height="305 " /> </Link>
                        <Link to='http://localhost:3000/catalog/bbce9e27-e741-481a-a87c-60be7c6e2d29'><img src="./images/naruto.jpg" className={styles.Image} alt="mov" width="225" height="305 " /> </Link>
                        <Link to='http://localhost:3000/catalog/d2872dd0-7337-4f97-a47f-1f318949e2e7'><img src="./images/thenun.jpg" className={styles.Image} alt="mov" width="225" height="305 " /> </Link>
                        <Link to='http://localhost:3000/catalog/674ae329-97fd-4dc2-9048-787835574c7a'><img src="./images/loki.jpg" className={styles.Image} alt="mov" width="225" height="305 " /> </Link>
                        <Link to='http://localhost:3000/catalog/98fedb51-f0a7-4bcc-bfd7-70feedb22b7a'><img src="./images/breakingbad.jpg" className={styles.Image} alt="mov" width="225" height="305 " /> </Link>
                        <Link to='http://localhost:3000/catalog/bc344613-4bf6-4915-a1aa-bc1459143d5a'><img src="./images/avengersInfinityWar.jpg" className={styles.Image} alt="mov" width="225" height="305 " /> </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}