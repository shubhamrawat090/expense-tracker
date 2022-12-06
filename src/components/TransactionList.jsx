import React, { useContext } from 'react';
import Transaction from './Transaction';

import { GlobalContext } from '../context/GlobalState';

const TransactionList = () => {
    const { transactions } = useContext(GlobalContext);
    return (
        <>
            <h3>History</h3>
            <ul id="list" className="list">
                {
                    (transactions && transactions.length > 0) ? transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction} />)) : "No entries found."
                }
            </ul>

        </>
    )
}

export default TransactionList
