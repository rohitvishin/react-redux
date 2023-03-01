import * as actionType from "./action-type"

export const increaseValue=()=>{
    return{
        type:actionType.INCREMENT
    }
}
export const decrementValue=()=>{
    return{
        type:actionType.DECREMENT
    }
}
export const showAlert=()=>{
    return{
        type:actionType.ALERTSHOW
    }
}
export const hideAlert=()=>{
    return{
        type:actionType.ALERTHIDE
    }
}