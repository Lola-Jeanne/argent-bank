import FeatureInfos from '../FeatureInfos/featuresInfos';
import LogoChat from '../../assets/icon-chat.png';
import LogoMoney from '../../assets/icon-money.png';
import LogoSecurity from '../../assets/icon-security.png';
import './features.styles.css';

export default function Features(){
    return(<>
        <section className="features">
            <h2 className="sr-only">Features</h2>
                <div className="feature-item">
                    <FeatureInfos propsPic={LogoChat} propsTitle="You are our #1 priority" propsText="Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."/>
                </div>
                <div className="feature-item">
                    <FeatureInfos propsPic={LogoMoney} propsTitle="More savings means higher rates" propsText="The more you save with us, the higher your interest rate will be!"/>
                </div>
                <div className="feature-item">
                    <FeatureInfos propsPic={LogoSecurity} propsTitle="Security you can trust" propsText="We use top of the line encryption to make sure your data and money is always safe."/>
                </div>
        </section>
    </>
    )
}