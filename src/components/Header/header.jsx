import { useEffect, useState } from 'react';
import logo from '../../assets/argentBankLogo.png';
import './header.styles.css';
import { Link, useNavigate } from 'react-router-dom';

export default function Header(){

    const [isLoggedIn, setIsLoggedIn] = useState(false); //Local state pour suivre la connexion
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("authToken"); //Vérifier si le token est dans le local storage
        setIsLoggedIn(!!token);
    }, []);

    const handleLogout = () =>{
        localStorage.removeItem("authToken");
        setIsLoggedIn(false);
        navigate("/");
    }

    return(
    <>
        <nav className='main-nav'>
            <a className='main-nav-logo' href="/">
                <img src={logo} alt='Argent Bank Logo' className='main-nav-logo-image'></img>
                <h1 className='sr-only'>Argent Bank</h1>
            </a>
            <div>
                {isLoggedIn ? (
                    <button className="main-nav-item btn-sign-out" onClick={handleLogout}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"/></svg>
                        Sign Out
                    </button>
                ) : (
                    <Link className="main-nav-item" to="/sign-in">
                        <svg className="main-nav-user" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M399 384.2C376.9 345.8 335.4 320 288 320l-64 0c-47.4 0-88.9 25.8-111 64.2c35.2 39.2 86.2 63.8 143 63.8s107.8-24.7 143-63.8zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 16a72 72 0 1 0 0-144 72 72 0 1 0 0 144z"/></svg>
                        Sign In
                    </Link>
                )}
            </div>
        </nav>
    </>
    )
}