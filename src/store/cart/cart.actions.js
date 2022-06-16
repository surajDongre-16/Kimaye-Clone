import * as types from "./cart.actionTypes"
import axios from "axios"

const fetchCartDataLoading=(payload)=>{
    return {
        type : types.CART_DATA_LOADING
    }
}
const fetchCartDataSuccess=(payload)=>{
    return {
        type : types.CART_DATA_SUCCESS,
        payload
    }
}
const fetchCartDataError=(payload)=>{
    return {
        type : types.CART_DATA_ERROR,
        payload
    }
}

const getCartAPI=(payload)=>(dispatch)=>{
    dispatch(fetchCartDataLoading())
    axios.get("http://localhost:8080/cartData")
    .then((r)=>dispatch(fetchCartDataSuccess(r.data)))
    .catch((e)=>dispatch(fetchCartDataError(e.data)))
}


// const itemCountIncrease=(payload)=>{
//     return {
//         type : types.CART_DATA_QUANTITY_INCREASE,
//         payload
//     }
// }
// const itemCountDecrease=(payload)=>{
//     return {
//         type : types.CART_DATA_QUANTITY_DECREASE,
//         payload
//     }
// }

// const countInc=(id)=>(itemCountIncrease(id))
// const countDec=(id)=>(itemCountDecrease(id))

export {getCartAPI }