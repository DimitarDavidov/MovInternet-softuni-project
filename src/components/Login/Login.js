import styles from './styles.module.css';

import { Link } from 'react-router-dom';

import { useState } from 'react';
import { auth } from '../../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

export const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log(userCredential)
        })
        .catch((error) => {
            console.log(error)
        })
    }
    //Todo names to the form ?!?
    return (
        <div className={styles.LoginDiv}>

            <form className={styles.LoginForm} method="GET" onSubmit={onSubmit} >
                <div className={styles.SignInDiv}>Sign in</div>
                <label className="form-label" htmlFor="form2Example1">Email address</label>
                <div className={`${styles.LoginEmail} form-outline mb-4`}>
                    <input type="email" name='email' className="form-control" value={values.email} onChange={changeHandler}/>
                </div>

                <label className="form-label" htmlFor="form2Example2">Password</label>
                <div className={`${styles.passwordLogin} form-outline mb-4`}>
                    <input type="password" name='password' className="form-control" value={values.password} onChange={changeHandler}/>
                </div>

                <button type="submit" className={`${styles.LoginButton} btn btn-primary btn-block mb-4`}>Sign in</button>

                <div className={`text-center`}>
                    <p>Not a registered yet? <Link to="/register">Register</Link></p>
                </div>
            </form>
        </div>
    )
}