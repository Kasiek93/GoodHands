import React from 'react';
import { Link } from 'react-router-dom';
import decoration from '../assets/decoration.svg';


const CreateAccount = () => {
    return (
        <section className="login">
            <div className="login-title">
                <h3 className="login-title-h3">Załóż konto</h3>
                <img src={decoration} alt="Decoration"></img>
            </div>
            <form className="login-form">
                <div className="login-form-first">
                    <label className="login-form-first-label">Email</label>
                    <input className="login-form-first-input" type="text"></input>
                </div>
                <div className="login-form-second">
                    <label className="login-form-second-label">Hasło</label>
                    <input className="login-form-second-input" type="text"></input>
                </div>
                <div className="login-form-third">
                    <label className="login-form-third-label">Powtórz hasło</label>
                    <input className="login-form-third-input" type="text"></input>
                </div>
            </form>
            <div className="login-buttons">
                <Link to="/logowanie" className="login-buttons-login">Zaloguj się</Link>
                <button className="login-buttons-register">Załóż konto</button>
            </div>
        </section>
    )
}

export default CreateAccount;