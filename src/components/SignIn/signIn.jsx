import './signIn.styles.css';
import {useNavigate } from 'react-router-dom';
import React, {useState} from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { login, setError } from '../../Redux/slicer';

export default function SignIn(){

    const[username, setUsername] = useState(""); //Pour stocker l'email de l'utilisateur
    const [password, setPassword] = useState(""); //Pour stocker le password
    // const [error, setError] = useState(""); //Pour stocker les erreurs si nécessaire
    const navigate = useNavigate(); //Pour la redirection après la connexion
    const dispatch = useDispatch();

    const handleSignIn = async (e) =>{
        e.preventDefault();
        console.log("test connexion");

        try { 
            const response = await axios.post("http://localhost:3001/api/v1/user/login", {
                email: username, 
                password: password,
            });

            console.log("Réponse API: ", response.data);
            const token = response.data.body.token; 
            dispatch(login(token)); //Pour stocker le token dans redux
            console.log("Token stocké; ", token);
            navigate('/user');

        } catch (err) {
            const error = err.response?.data?.message || 'Erreur lors de la connexion';
            dispatch(setError(error)); 
        }
    };

    return(
        <>
        <main className="main bg-dark">
            <section className="sign-in-content">
                {/* <i class="fa fa-user-circle sign-in-icon"></i> */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M399 384.2C376.9 345.8 335.4 320 288 320l-64 0c-47.4 0-88.9 25.8-111 64.2c35.2 39.2 86.2 63.8 143 63.8s107.8-24.7 143-63.8zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 16a72 72 0 1 0 0-144 72 72 0 1 0 0 144z"/></svg>
                <h1>Sign In</h1>
                <form onSubmit={handleSignIn}>
                    <div className="input-wrapper">
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} required />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    </div>
                    <div className="input-remember">
                        <input type="checkbox" id="remember-me" />
                        <label htmlFor="remember-me">Remember me</label>
                </div>
                <button type='submit' className="sign-in-button">Sign In</button>
                </form>
            </section>
        </main>
    </>
    )
}