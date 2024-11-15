import './index.styles.css';
import Header from '../../components/Header/header';
import Banner from '../../components/Banner/banner';
import Features from '../../components/Features/features';
import Footer from '../../components/Footer/footer';

function Home(){
    return(
    <>
        <Header />
        <Banner />
        <Features />
        <Footer />
    </>
    )
}
export default Home;