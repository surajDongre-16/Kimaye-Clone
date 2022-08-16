import axios from "axios"
import { GET_PRODUCT_ERROR, GET_PRODUCT_LOADING, GET_PRODUCT_SUCCESS, GET_SINGLE_PRODUCT_SUCCESS } from "./product.action.type"

export const fetchData = (link) => (dispatch) => {
    dispatch({ type: GET_PRODUCT_LOADING })
    setTimeout(() => {
        axios.get(`https://kimaye-rest-api.herokuapp.com/${link}`)
            .then((r) => { dispatch({ type: GET_PRODUCT_SUCCESS, payload: r.data }) })
            .catch(() => dispatch({ type: GET_PRODUCT_ERROR }));
    }, 3000);

}

export const getSingleProduct = (link, id) => (dispatch) => {
    axios.get(`https://kimaye-rest-api.herokuapp.com/${link}/${id}`)
        .then((r) => { dispatch({ type: GET_SINGLE_PRODUCT_SUCCESS, payload: r.data }) })
}


export const addtoCart = (link, id) => (dispatch) => {
    axios.get(`https://kimaye-rest-api.herokuapp.com/${link}/${id}`)
        .then((r) => {
            const data = {
                id: r.data.id,
                image: r.data.image,
                name: r.data.name,
                price: r.data.price,
                weight: r.data.weight,
                count: 1
            }
            axios.post(`https://kimaye-rest-api.herokuapp.com/cart-data`, data)
            
        })


}