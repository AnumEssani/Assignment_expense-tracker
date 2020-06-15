import React,{createContext,useReducer} from 'react';
import AppReducer from './ActionReducer';

const initialState ={
    transactions:[
     
        ]
}


export const GlobalContex = createContext(initialState);

export const GlobalProvider = ({children})=>{
    const [state,dispatch] = useReducer(AppReducer,initialState);

    const deleteAction = id =>{
        dispatch({
            type: 'DELETE',
            payload:id
        })

    }
    const addAction = transaction =>{
        dispatch({
            type: 'Add',
            payload:transaction
        })

    }

    return(<GlobalContex.Provider value={{
        transactions : state.transactions,
        deleteAction,
        addAction

    }}>
        {children}
    </GlobalContex.Provider>)
}