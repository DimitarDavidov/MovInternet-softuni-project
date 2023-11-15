import styles from './register.module.css';

import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { UserAuth } from '../../contexts/AuthContext';

export const Register = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const {register} = UserAuth()
    const navigate = useNavigate()


    const onSubmit = async (e) => {
        e.preventDefault();
       
        try {
            await register(email, password);
            navigate('/')
        }catch (error){
            console.log(error.message)
        }
        
    }


    return (
        <div className={styles.RegisterDiv}>

            <section className={`${styles.RegisterSection} vh-100`}>

                <p className={`${styles.SignUpDiv}`}>Sign up</p>

                <form className="mx-1 mx-md-4" onSubmit={onSubmit}>

                    <label className="form-label" htmlFor="form3Example3c">Email address</label>
                    <div className={`${styles.RegisterEmailDiv} d-flex flex-row align-items-center mb-4`}>
                        <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                            <input type="email" name='email' className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                    </div>

                        <label className="form-label" htmlFor="form3Example4c">Password</label>
                    <div className={`${styles.RegisterPasswordDiv} d-flex flex-row align-items-center mb-4`}>
                        <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                            <input type="password" name='password' className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                    </div>

                        <label className="form-label" htmlFor="form3Example4cd">Confirm password</label>
                    <div className={`${styles.passwordConfirmDiv} d-flex flex-row align-items-center mb-4`}>
                        <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                            <input type="password" name='confirmPassword' className="form-control" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                        </div>
                    </div>

                    <input className={`${styles.RegisterButton} btn btn-primary btn-block mb-4`} type="submit" value="Register" />


                </form>

                {/* </div> */}
                {/* </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div> */}
            </section>
        </div>
    )
}