import React , {useContext} from 'react';
import  {GlobalContex} from '../contexApi/GlobalState'
import {Transactions} from './Transactions'


export const TransactionList = () => {
    const {transactions} = useContext(GlobalContex)

    return (
        <div>
            <h3>History</h3>
            <ul id="list" className="list">

            {
                transactions.map(t => <Transactions transactions={t} key={t.id}/>)
            }

            </ul>
        </div>
    )

} 

