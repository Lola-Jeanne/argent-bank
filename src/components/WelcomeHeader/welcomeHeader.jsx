import { useState } from 'react';
import './welcomeHeader.styles.css';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserName } from '../../Redux/slicer';

export default function WelcomeHeader(){
    const user = useSelector((state) => state.auth.user);
    const userName = user?.userName || "User";
    const firstName = user?.firstName || "First Name";
    const LastName = user?.LastName || "Last Name";

    const [isEditing, setIsEditing] = useState(false); //Pour gérer l'affichage du form
    const [newUserName, setNewUserName] = useState(userName); //Pour le nouveau nom d'utilisateur
    const dispatch = useDispatch();

    const handleEditClick = () => {
        setIsEditing(true); //Pour afficher le form
    };
    const handleFormSubmit = (e) => {
        e.preventDefault();
        dispatch(updateUserName(newUserName));
        setIsEditing(false);
    };
    const handleCancel = () => {
        setNewUserName(userName);
        setIsEditing(false);
    };

    return(
    <div className="header">
        {isEditing ? (
            <>
                <h1>Edit user info</h1>
                    <form className='edit-form' onSubmit={handleFormSubmit}>
                        <div className='champs-form'>
                            <p>User name:</p>
                            <input type='text' value={newUserName} onChange={(e) => setNewUserName(e.target.value)} className='edit'></input>
                        </div>
                        <div className='champs-form'>
                            <p>First name:</p>
                            <input type='text' value={firstName} disabled></input>
                        </div>
                        <div className='champs-form'>
                            <p>Last name:</p>
                            <input type='text' value={LastName} disabled></input>
                        </div>
                        <div className='btn-form-container'>
                            <button className='edit-button btn-form' type='submit'>Save</button>
                            <button className='edit-button btn-form' type='button' onClick={handleCancel}>Cancel</button>
                        </div>
                    </form>
            </>
            ) : (
                <>
                    <h1>Welcome back<br />{userName}!</h1>
                    <button className="edit-button" onClick={handleEditClick}>Edit Name</button>
                </>
            )}
    </div>
    )
}