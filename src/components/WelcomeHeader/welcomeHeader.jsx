import './welcomeHeader.styles.css';
import { useSelector } from 'react-redux';

export default function WelcomeHeader(){
    const user = useSelector((state) => state.auth.user);
    const userName = user?.userName || "User";

    return(
    <div className="header">
        <h1>Welcome back<br />{userName}!</h1>
        <button className="edit-button">Edit Name</button>
    </div>
    )
}