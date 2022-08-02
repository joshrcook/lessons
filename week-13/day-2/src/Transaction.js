function Transaction(props) {
    return (
        <div className="transaction">
            <div className="transaction-left">
                <div className="transaction-icon"></div>
                <div className="transaction-text">
                    <div className="transaction-title">{props.title}</div>
                    <div className="transaction-description">Transfer to account</div>
                </div>
            </div>
            <div className="transaction-right">
                <div className="transaction-amount">${props.amount}</div>
                <div className="transaction-date">{props.date}</div>
            </div>
        </div>
    );
}

export default Transaction;