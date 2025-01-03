import './featureInfos.styles.css';

export default function FeatureInfos({propsPic, propsText,propsTitle}){
    return(
        <>
            <img src={propsPic} alt="Icon" className="feature-icon" />
            <h3 className="feature-item-title">{propsTitle}</h3>
            <p>{propsText}</p>
        </>
    )
}