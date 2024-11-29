import Header from "../../components/Header/header";
import WelcomeHeader from "../../components/WelcomeHeader/welcomeHeader";
import Footer from "../../components/Footer/footer";
import Account from "../../components/Account/account";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

function User(){

    const [userData, setUserData] = useState(null); //Pour stocker les données utilisateur
    const [error, setError] = useState(null);
    const token = useSelector((state) => state.auth.token);  // Récupérer le token depuis redux


    useEffect(() => {
        const fetchUserData = async () => {
            try {
                console.log("fonction fetchUserData")
                if (!token) {
                    setError("Utilisateur non connecté");
                    return;
                }
                console.log("Envoie de la requête<")
                const response = await axios.get("http://localhost:3001/api/v1/user/profile",
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );
                console.log("Données utilisateur récupérées :", response.data.body);
                setUserData(response.data.body);
            } catch (err) {
                console.error("Erreur lors de l'appel de l'API :", err);
                setError("Une erreur s'est produite lors de la récupération des données utilisateur.");
            }
        };

        fetchUserData(); 
    }, [token]);

    return(
    <>
        <Header>
            <Link className="main-nav-item" to="/">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"/></svg>
                Sign Out
            </Link>
      </Header>
        <main className="main bg-dark">
            <WelcomeHeader />
            <Account propsAccountTitle="Argent Bank Checking (x8349)" propsAccountAmount="$2,082.79" propsAccountDescription="Available Balance"/>
            <Account propsAccountTitle="Argent Bank Savings (x6712)" propsAccountAmount="$10,928.42" propsAccountDescription="Available Balance"/>
            <Account propsAccountTitle="Argent Bank Credit Card (x8349)" propsAccountAmount="$184.30" propsAccountDescription="Current Balance"/>
        </main>
        <Footer />
    </>
    )
}
export default User;