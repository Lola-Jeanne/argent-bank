import logo from '../../assets/argentBankLogo.png';
import './header.styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Header(){
    return(
    <>
        <nav className='main-nav'>
            <a className='main-nav-logo' href="/">
                <img src={logo} alt='Argent Bank Logo' className='main-nav-logo-image'></img>
                <h1 className='sr-only'>Argent Bank</h1>
            </a>
        </nav>
        <div>
            <a className='main-nav-item' href="/sign-in">
            <FontAwesomeIcon icon="fa-solid fa-circle-user" />
                Sign In
            </a>
        </div>
    </>
    )
}