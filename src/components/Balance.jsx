import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const Balance = () => {
    const { transactions } = useContext(GlobalContext);

    let amounts = [];
    let total = 0;
    if (transactions && transactions.length > 0) {
        amounts = transactions.map(transaction => transaction.amount);
        total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
    }

    return (
        <>
            <h4>Your Balance</h4>
            <h1 id="balance">{total < 0 ? '-' : ''}₹{total < 0 ? (total * -1).toFixed(2) : total}</h1>
        </>
    )
}

export default Balance
