import { GET_PRODUCT_ERROR, GET_PRODUCT_LOADING, GET_PRODUCT_SUCCESS, GET_SINGLE_PRODUCT_SUCCESS } from "./product.action.type";

const initialState = {
    getFruits: {
        loading: false,
        error: false,
        data: [],
        singledata: [],
    }
}

export const productReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_PRODUCT_LOADING: {
            return { ...state, getFruits: { ...state.getFruits, loading: true, error: false } }
        }
        case GET_PRODUCT_SUCCESS: {
            return { ...state, getFruits: { ...state.getFruits, data: payload, loading: false, error: false } }
        }
        case GET_PRODUCT_ERROR: {
            return { ...state, getFruits: { ...state.getFruits, loading: false, error: true } }
        }

        case GET_SINGLE_PRODUCT_SUCCESS: {
            return { ...state, getFruits: { ...state.getFruits, singledata: payload } }
        }

        default:
            return state;
    }
}