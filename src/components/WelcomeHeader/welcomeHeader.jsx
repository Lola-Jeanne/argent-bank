import './welcomeHeader.styles.css';

export default function WelcomeHeader(){
    return(
    <div className="header">
        <h1>Welcome back<br />Tony Jarvis!</h1>
        <button className="edit-button">Edit Name</button>
    </div>
    )
}