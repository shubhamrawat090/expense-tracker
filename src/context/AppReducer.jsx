// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
    let updated_transactions;
    console.log(state.transactions);
    switch (action.type) {
        case 'DELETE_TRANSACTION':
            updated_transactions = state.transactions.filter(transaction => transaction.id !== action.payload);
            localStorage.setItem('transactions', JSON.stringify(updated_transactions));
            return {
                ...state,
                transactions: updated_transactions
            }
        case 'ADD_TRANSACTION':
            updated_transactions = [action.payload, ...state.transactions];
            localStorage.setItem('transactions', JSON.stringify(updated_transactions));
            return {
                ...state,
                transactions: updated_transactions
            }
        default:
            return state;
    }
}