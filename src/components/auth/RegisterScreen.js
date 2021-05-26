import React from 'react'
import {Link} from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import validator from 'validator';

export const RegisterScreen = () => {

    /*
        {
            name: 'ale',
            email: 'a@a.com',
            password: '123',
            password2: '123'
        }
    */

        //useForm

        // const handleREgister (e)

    const [values, handleInputChange] = useForm({
        name: 'Ale',
        email: 'a@a.com',
        password: '12345',
        password2: '12345'
    });

    const {name, email, password, password2} = values;

    const handleRegister = (e) => {
        e.preventDefault();
        
        if( isFormValid() ){
            console.log('Correcto');
        }

    }

    const isFormValid = () => {

        if(name.trim().length < 2){
            console.log('Nombre inválido');
            return false;
        } else if( !validator.isEmail(email) ){
            console.log('Email inválido');
            return false;
        } else if( password != password2 || password.length < 5 ){
            console.log('Password inválido, mínimo 5 carácteres.');
            return false;
        }

        return true;
    }

    return (
        <>
            <h3 className="auth__title">Register</h3>
            <form onSubmit={handleRegister}>
                <input 
                    type="text"
                    placeholder="Name"
                    name="name"
                    value={name}
                    className="auth__input"
                    onChange={handleInputChange}
                />

                <input 
                    type="text"
                    placeholder="Email"
                    name="email"
                    value={email}
                    className="auth__input"
                    onChange={handleInputChange}
                />

                <input 
                    type="password"
                    placeholder="password"
                    name="password"
                    value={password}
                    className="auth__input"
                    onChange={handleInputChange}
                />

                <input 
                    type="password"
                    placeholder="Confirm password"
                    name="password2"
                    value={password2}
                    className="auth__input"
                    onChange={handleInputChange}
                />

                <button type="submit" className="btn btn-primary btn-block ">
                    Registrarse
                </button>               

                <Link to="/auth/login" className="link">
                    Already register?
                </Link>
            </form>
        </>
    )
}
