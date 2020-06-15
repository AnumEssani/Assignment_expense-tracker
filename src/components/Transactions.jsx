import React,{useContext} from 'react';
import {GlobalContex} from '../contexApi/GlobalState'

export const Transactions = ({transactions})=>{
    const {deleteAction} = useContext(GlobalContex)
    const sign = transactions.amount > 0 ? "+" : "-" ;
    return(
        <li className={transactions.amount > 0 ? "plus" : "minus"}>
            {transactions.text} <span>{sign}${Math.abs(transactions.amount)}</span>
            <button onClick={()=>  deleteAction(transactions.id)} className="delete-btn">x</button> 
            </li>
    )
}