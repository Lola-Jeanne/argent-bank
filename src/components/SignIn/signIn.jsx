import './signIn.styles.css';
import { Link } from 'react-router-dom';

export default function SignIn(){
    return(
        <>
        <main className="main bg-dark">
            <section className="sign-in-content">
                {/* <i class="fa fa-user-circle sign-in-icon"></i> */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M399 384.2C376.9 345.8 335.4 320 288 320l-64 0c-47.4 0-88.9 25.8-111 64.2c35.2 39.2 86.2 63.8 143 63.8s107.8-24.7 143-63.8zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 16a72 72 0 1 0 0-144 72 72 0 1 0 0 144z"/></svg>
                <h1>Sign In</h1>
                <form>
                    <div className="input-wrapper">
                        <label for="username">Username</label>
                        <input type="text" id="username" />
                    </div>
                    <div className="input-wrapper">
                        <label for="password">Password</label>
                        <input type="password" id="password" />
                    </div>
                    <div className="input-remember">
                        <input type="checkbox" id="remember-me" />
                        <label for="remember-me">Remember me</label>
                </div>
                <Link className="sign-in-button" to="/user">Sign In</Link>
                </form>
            </section>
        </main>
    </>
    )
}