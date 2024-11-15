import './account.styles.css';

export default function Account({propsAccountTitle, propsAccountAmount, propsAccountDescription}){
    return(
    <>
    <h2 className="sr-only">Accounts</h2>
    <section className="account">
        <div className="account-content-wrapper">
            <h3 className="account-title">{propsAccountTitle}</h3>
            <p className="account-amount">{propsAccountAmount}</p>
            <p className="account-amount-description">{propsAccountDescription}</p>
        </div>
        <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
            </div>
    </section>
    </>
    )
}