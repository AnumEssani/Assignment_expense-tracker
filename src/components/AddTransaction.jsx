import React,{useContext,useState} from 'react';
import {GlobalContex} from '../contexApi/GlobalState';

export const AddTransaction = () => {
    const [text,setText] = useState('')
    const [amount,setAmount] = useState(0)
    const {addAction} = useContext(GlobalContex);
    const onSubmit = e=>{
        e.preventDefault()
        const newTransaction={
            id: Math.floor(Math.random()*10000),
            text,
            amount:+amount
        }
        addAction(newTransaction)
    }
    return (
        <div>
            <h3>Add new transaction</h3>
            <form id="form" onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text" id="text" value={text} onChange={e=>setText(e.target.value)} placeholder="Enter text..." />
                </div>
                <div className="form-control">
                    <label htmlFor="amount"
                    >Amount <br />
            (negative - expense, positive - income)</label
                    >
                    <input type="number" id="amount" amount={amount}  onChange={e=>setAmount(e.target.value)} placeholder="Enter amount..." />
                </div>
                <button className="btn">Add transaction</button>
            </form>
        </div>

    )

} 