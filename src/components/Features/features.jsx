import FeaturePic from '../FeaturesPic/featuresPic';
import FeatureText from '../FeaturesText/featuresText';
import FeatureTitle from '../FeaturesTitle/featuresTitle';
import LogoChat from '../../assets/icon-chat.png';
import LogoMoney from '../../assets/icon-money.png';
import LogoSecurity from '../../assets/icon-security.png';
import './features.styles.css';

export default function Features(){
    return(<>
        <section className="features">
            <h2 className="sr-only">Features</h2>
                <div className="feature-item">
                    <FeatureTitle propsTitle="You are our #1 priority"/>
                    <FeaturePic propsPic={LogoChat}/>
                    <FeatureText propsText="Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."/>
                </div>
                <div className="feature-item">
                    <FeatureTitle propsTitle="More savings means higher rates"/>
                    <FeaturePic propsPic={LogoMoney}/>
                    <FeatureText propsText="The more you save with us, the higher your interest rate will be!"/>
                </div>
                <div className="feature-item">
                    <FeatureTitle propsTitle="Security you can trust"/>
                    <FeaturePic propsPic={LogoSecurity}/>
                    <FeatureText propsText="We use top of the line encryption to make sure your data and money is always safe."/>
                </div>
        </section>
    </>
    )
}