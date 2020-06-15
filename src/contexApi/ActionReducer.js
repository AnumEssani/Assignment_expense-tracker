export default (state,action)=>{
    switch(action.type){
        case 'DELETE':
            return{
                ...state,
                transactions:state.transactions.filter(transaction=>transaction.id !==action.payload)
            }
        case 'Add':
        return{
            ...state,
            transactions:[action.payload,...state.transactions]
        }
        default:
            return state;
    }
}