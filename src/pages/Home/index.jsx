import './index.styles.css';
import Header from '../../components/Header/header';
import Banner from '../../components/Banner/banner';
import Features from '../../components/Features/features';
import FeaturesTitle from '../../components/FeaturesTitle/featuresTitle';
import Footer from '../../components/Footer/footer';

function Home(){
    return(
    <>
        <Header />
        <Banner />
        <Features />
        {/* <FeaturesTitle propsTitle="You are our #1 priority"/> */}
        <Footer />
    </>
    )
}
export default Home;