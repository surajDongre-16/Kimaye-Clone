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




const updateCartData=(payload)=>{
    return {
        type : types.CART_DATA_UPDATE,
        payload
    }
}


export const additem=(payload)=>(dispatch)=>{
    // axios.get(`http://localhost:8080/cartData/${id}`)
    // .then((r)=>{
        axios.patch(`http://localhost:8080/cartData/${payload.id}`,payload)
        .then((r)=> dispatch(updateCartData(r.data)))
    // })
    
    // dispatch()
    // console.log(new_item_price)
}


export const removeitem=(payload)=>(dispatch)=>{
    
    // axios.get(`http://localhost:8080/cartData/${id}`)
    // .then((r)=>{
        axios.patch(`http://localhost:8080/cartData/${payload.id}`,payload)
        .then((r)=>dispatch(updateCartData(r.data)))
    // })
    
    // dispatch()
    // console.log(new_item_price)
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
    axios.delete(`http://localhost:8080/cartData/${id}`)
    .then((r)=>dispatch(deleteCartItemSuccess(r)))
    .catch((e)=>dispatch(deleteCartItemError(e.data)))
}




export {getCartAPI, deleteCartItem}

// userInfo:[{
//     address: payload.address,
//     city:   payload.city,
//     country: payload.country,
//     firstName:payload.firstName,
//     lastName: payload.lastName,
//     mobileNo: payload.mobileNo,
//     pincode: payload.pincode,
//     state: payload.state,
// }]