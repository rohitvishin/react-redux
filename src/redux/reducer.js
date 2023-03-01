import * as actionType from "./action-type"

const InitialState={
    count:0,
    alert:0, 
}
export const reducer=(state=InitialState,action)=>{
    switch(action.type){
        case actionType.INCREMENT:
        return{
            ...state,
            count:state.count+1
        }
        case actionType.DECREMENT:
        return{
            ...state,
            count:state.count-1
        }
        case actionType.ALERTSHOW:
            return{
                ...state,
                alert:state.alert=1
            }
        case actionType.ALERTHIDE:
            return{
                ...state,
                alert:state.alert=1
            }
        default:
        return state

    }
}