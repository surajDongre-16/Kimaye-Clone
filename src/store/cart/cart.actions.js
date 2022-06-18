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
    axios.get("http://localhost:8080/cart-Data")
    .then((r)=>dispatch(fetchCartDataSuccess(r.data)))
    .catch((e)=>dispatch(fetchCartDataError(e.data)))
}




const updateCartData=(payload)=>{
    return {
        type : types.CART_DATA_UPDATE,
        payload
    }
}


export const additem=(payload)=>(dispatch)=>{
        axios.patch(`http://localhost:8080/cart-Data/${payload.id}`,payload)
        .then((r)=> dispatch(updateCartData(r.data)))
}


export const removeitem=(payload)=>(dispatch)=>{

    axios.patch(`http://localhost:8080/cart-Data/${payload.id}`,payload)
    .then((r)=>dispatch(updateCartData(r.data)))

}
const deleteCartItemLoading=(payload)=>{
    return {
        type : types.CART_DATA_DELETE_LOADING,
        payload
    }
}
const deleteCartItemSuccess=(payload)=>{
    return {
        type : types.CART_DATA_DELETE_SUCCESS,
        payload
    }
}
const deleteCartItemError=(payload)=>{
    return {
        type : types.CART_DATA_DELETE_ERROR,
        payload
    }
}

const deleteCartItem=(id)=>(dispatch)=>{
    dispatch(deleteCartItemLoading(id))
    axios.delete(`http://localhost:8080/cart-Data/${id}`)
    .then((r)=>dispatch(deleteCartItemSuccess(r)))
    .catch((e)=>dispatch(deleteCartItemError(e.data)))
}




export {getCartAPI, deleteCartItem}
