import FeatureTitle from '../FeaturesTitle/featuresTitle';
import './features.styles.css';

export default function Features(){
    return(<>
        <section className="features">
            <h2 className="sr-only">Features</h2>
            <FeatureTitle />
        </section>
    </>
    )
}