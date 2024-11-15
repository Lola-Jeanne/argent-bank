import Header from "../../components/Header/header";
import WelcomeHeader from "../../components/WelcomeHeader/welcomeHeader";
import Footer from "../../components/Footer/footer";

function User(){
    return(
    <>
        <Header />
        <main className="main bg-dark">
            <WelcomeHeader />
        </main>
        <Footer />
    </>
    )
}
export default User;