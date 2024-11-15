import './welcomeHeader.styles.css';

export default function WelcomeHeader(){
    return(
    <div className="header">
        <h1>Welcome back<br />Name!</h1>
        <button className="edit-button">Edit Name</button>
    </div>
    )
}