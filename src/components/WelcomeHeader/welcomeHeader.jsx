import './welcomeHeader.styles.css';

export default function WelcomeHeader({propsNameUser}){
    return(
    <div className="header">
        <h1>Welcome back<br />{propsNameUser}</h1>
        <button className="edit-button">Edit Name</button>
    </div>
    )
}