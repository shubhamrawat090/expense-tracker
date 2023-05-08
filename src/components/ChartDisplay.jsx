import React, { useContext } from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { GlobalContext } from '../context/GlobalState';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const ChartDisplay = () => {
    const { transactions } = useContext(GlobalContext);

    const options = {
        scales: {
            y: {
                min: -2000,
                max: 2000,
            },
        },
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Expense Tracker Chart',
            },
        },
    };

    const labels = transactions.map(transaction => transaction.text);

    const expense = transactions.map(() => 0);
    const income = transactions.map(() => 0);

    transactions.forEach((transaction, idx) => {

        if (transaction.amount > 0) {
            income[idx] = transaction.amount;
            expense[idx] = 0;
        }

        if (transaction.amount < 0) {
            expense[idx] = transaction.amount;
            income[idx] = 0;
        }
    })

    const data = {
        labels,
        datasets: [
            {
                label: 'Expense',
                data: expense,
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            {
                label: 'Income',
                data: income,
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
        ],
    };

    return (
        <div className='chartContainer'>
            <Line options={options} data={data} />
        </div>
    )
}


export default ChartDisplay
