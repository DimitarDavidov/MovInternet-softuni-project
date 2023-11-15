import styles from './styles.module.css';

import { Link, useNavigate } from 'react-router-dom';

import { useState } from 'react';
import { UserAuth } from '../../contexts/AuthContext';



export const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const { signIn } = UserAuth();
  
    const onSubmit = async (e) => {
      e.preventDefault();
      try {
        await signIn(email, password)
        navigate('/')
      } catch (e) {
        console.log(e.message)
      }
    };
  
    return (
        <div className={styles.LoginDiv}>

            <form className={styles.LoginForm} onSubmit={onSubmit} >
                <div className={styles.SignInDiv}>Sign in</div>
                <label className="form-label" htmlFor="form2Example1">Email address</label>
                <div className={`${styles.LoginEmail} form-outline mb-4`}>
                    <input type="email" name='email' className="form-control" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>

                <label className="form-label" htmlFor="form2Example2">Password</label>
                <div className={`${styles.passwordLogin} form-outline mb-4`}>
                    <input type="password" name='password' className="form-control" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>

                <button type="submit" className={`${styles.LoginButton} btn btn-primary btn-block mb-4`}>Sign in</button>

                <div className={`text-center`}>
                    <p>Not a registered yet? <Link to="/register">Register</Link></p>
                </div>
            </form>
        </div>
    )
}