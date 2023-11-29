import { Link } from 'react-router-dom';
import styles from './styles.module.css';

export const FAQ = () => {
    return (
        <div className={styles.FAQHero}>
            <div className={styles.FAQBox}>

            <div className={styles.FAQBox1}>
                <div>
                    <h1>How to register?</h1>
                    <h4>It's easy just press the register button or click <Link to={'/register'}>here</Link>. After that you need to enter your email and create a new password. Keep in mind, that you have to keep your password away from strangers.</h4>
                </div>
                <div>
                    <h1>How to login?</h1>
                    <h4>This step is also easy. Just press <Link to={'/login'}>here</Link> or the login button. After going to the login menu, you need to enter your email and password.</h4>
                </div>
                <div>
                    <h1>How to add a movie/series ?</h1>
                    <h4>Easy question! Just press <Link to={'/add-movie'}>here</Link> or press on the Add a Movie button. After that add the needed information to add a new movie or tv-series</h4>
                </div>
                <div>
                    <h1>How to edit/delete a series/movie?</h1>
                    <h4>First you need to log-in to your account with which you added your series. After that go to the details page and click your prefered action.</h4>
                </div>
                <div>
                    <h1>How to contact you guys?</h1>
                    <h4>Click <Link to={'/contacts'}>here</Link> or press the contacts button.</h4>
                </div>
                <div>
                    <h1>Future updates?</h1>
                    <h4>We are always working on improving our service!</h4>
                </div>
            </div>
            </div>
        </div>
    )
}