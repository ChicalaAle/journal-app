import React from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { login, loginWithEmailAndPassword, startGoogleLogin } from '../../actions/auth';
import { useForm } from '../../hooks/useForm';

export const LoginScreen = () => {

    const dispatch = useDispatch();

    const [formState, handleInputChange] = useForm({
        email: 'ale@ale.com',
        password: 'xddd'
    });

    const {email, password} = formState;

    const handleLogin = (e) => {
        e.preventDefault();
        dispatch( loginWithEmailAndPassword(1245, 'Alejandro prro') );
    }

    const handleGoogleLogin = () => {
        dispatch(startGoogleLogin());
    } 

    return (
        <>
            <h3 className="auth__title">Login</h3>
            <form onSubmit={handleLogin}>
                <input 
                    type="text"
                    placeholder="Email"
                    name="email"
                    className="auth__input"
                    value={email}
                    onChange={handleInputChange}
                />

                <input 
                    type="password"
                    placeholder="*******"
                    name="password"
                    className="auth__input"
                    value={password}
                    onChange={handleInputChange}
                />

                <button type="submit" className="btn btn-primary btn-block">
                    Ingresar
                </button>

                <div className="auth__social-networks">
                    <p>Login with social networks</p>

                    <div 
                        className="google-btn"
                        onClick={handleGoogleLogin}
                    >
                        <div className="google-icon-wrapper">
                            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                        </div>
                        <p className="btn-text">
                            <b>Sign in with google</b>
                        </p>
                    </div>

                    
                </div>

                <Link to="/auth/register" className="link">
                    Create new account
                </Link>
            </form>
        </>
    )
}
