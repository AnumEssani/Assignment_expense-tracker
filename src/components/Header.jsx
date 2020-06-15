import React,{useContext} from 'react';
import {GlobalContex} from '../contexApi/GlobalState';
export const Header = () => {
    const {transactions} =useContext(GlobalContex)
    const amount= transactions.map((transaction) => transaction.amount)
    const total = amount.reduce((acc, item) => (acc += item), 0);
    return (
        <div>
            <h2>Expense Tracker</h2>

            <div className="container">
                <h4>Your Balance</h4>
    <h1 id="balance">${total}</h1>
            </div>
        </div>
    )

}




