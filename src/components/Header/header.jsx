import logo from '../../assets/argentBankLogo.png';
import './header.styles.css';
import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Header(){
    return(
    <>
        <nav className='main-nav'>
            <a className='main-nav-logo' href="/">
                <img src={logo} alt='Argent Bank Logo' className='main-nav-logo-image'></img>
                <h1 className='sr-only'>Argent Bank</h1>
            </a>
            <div>
                <Link className="main-nav-item" to="/sign-in">
                    <svg className="main-nav-user" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M399 384.2C376.9 345.8 335.4 320 288 320l-64 0c-47.4 0-88.9 25.8-111 64.2c35.2 39.2 86.2 63.8 143 63.8s107.8-24.7 143-63.8zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 16a72 72 0 1 0 0-144 72 72 0 1 0 0 144z"/></svg>
                    Sign In
                </Link>
            </div>
        </nav>
        {/* <div>
            <a className='main-nav-item' href="/sign-in"> */}
            {/* <FontAwesomeIcon icon="fa-solid fa-circle-user" /> */}
            {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M399 384.2C376.9 345.8 335.4 320 288 320l-64 0c-47.4 0-88.9 25.8-111 64.2c35.2 39.2 86.2 63.8 143 63.8s107.8-24.7 143-63.8zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 16a72 72 0 1 0 0-144 72 72 0 1 0 0 144z"/></svg>
                Sign In
            </a>
        </div> */}
    </>
    )
}