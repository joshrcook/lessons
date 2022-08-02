import './App.css';
import React from 'react';
import Transaction from './Transaction';

function App() {
    const [transactions, setTransactions] = React.useState();

    React.useEffect(() => {
        fetch('https://data.mongodb-api.com/app/challenges-xlbkk/endpoint/transactionHistory')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                console.log(data);
                setTransactions(data);
            });
    }, []);

    return (
        <div className="wrapper">
            {transactions.map((transaction) => {
                return (
                    <Transaction title={transaction.name} amount={transaction.amount} date={transaction.date} />
                );
            })}
        </div>
    );
}

export default App;
