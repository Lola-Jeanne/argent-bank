import './featuresPic.styles.css';

export default function FeaturePic({propsPic}){
    return(
        <img src={propsPic} alt="Icon" className="feature-icon" />
    )
}