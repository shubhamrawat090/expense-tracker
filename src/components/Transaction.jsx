import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const Transaction = ({ transaction }) => {
    const { deleteTransaction } = useContext(GlobalContext);

    // Get sign
    const sign = transaction.amount < 0 ? '-' : '+';

    return (
        <li className={sign === '-' ? 'minus' : 'plus'}>
            <span>{transaction.text}</span>
            <span>{sign}₹{Math.abs(transaction.amount)}</span>
            <button onClick={() => deleteTransaction(transaction.id)} className="delete-btn">x</button>
        </li>
    )
}

export default Transaction
