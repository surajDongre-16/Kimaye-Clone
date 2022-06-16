import * as types from "./cart.actionTypes"

const initialState={
    getCartData : {
        loading:false,
        error:false
    },
    updateItemCount:{
        count:1
    },
    cartData:[]
}

const cartReducer=(state=initialState,action)=>{
    const {type,payload}=action

    switch(type){
        case types.CART_DATA_LOADING:{
            return {
                ...state,
                getCartData:{
                    ...state.getCartData,
                    loading:true,
                    error:false
                }
            }
        }
        case types.CART_DATA_SUCCESS:{
            return {
                ...state,
                getCartData:{
                    ...state.getCartData,
                    loading:false,
                    error:false
                },
                cartData:payload
            }
        }
        case types.CART_DATA_ERROR:{
            return {
                ...state,
                getCartData:{
                    ...state.getCartData,
                    loading:false,
                    error:true
                }
            }
        }

        // case types.CART_DATA_QUANTITY_INCREASE:{
        //     state.updateItemCount.count++
        //     return {...state}
        // }
        // case types.CART_DATA_QUANTITY_DECREASE:{
        //     state.updateItemCount.count--
        //     return {...state}
        // }

        default:{
            return state
        }
    }

}

export default cartReducer