import axios from "axios";
import {ADD_PRODUCT_REQUEST, ADD_PRODUCT_SUCCESS, ADD_PRODUCT_FAIL} from "../../constants/productConstants";

export const productsListAction = () => {
    return async (dispatch) => {
       try {
           dispatch({type: "PRODUCTS_REQUEST"})
           const {data: products} = await axios('/api/v1/products')
           dispatch({type: "PRODUCTS_SUCCESS", payload: products})
       }   catch (error) {
           dispatch({type: "PRODUCTS_FAILED", error})
       }
    }
}
export const productDetailsAction = (id) => {
    return async (dispatch) => {
        try {
            dispatch({type: "PRODUCT_DETAILS_REQUEST"})
            const {data: product} = await axios(`/api/v1/products/${id}`)
            dispatch({type: "PRODUCT_DETAILS_SUCCESS", payload: product})
        }   catch (error) {
            dispatch({type: "PRODUCT_DETAILS_FAILED", error})
        }
    }
}

export const addProductAction = (name, job) => {
    return async (dispatch) => {
        try {
            dispatch({type: ADD_PRODUCT_REQUEST})
            const {data: product} = await axios.post('/api/v1/products/add', {name, job})
            dispatch({type: ADD_PRODUCT_SUCCESS, payload: product})

        } catch (error) {
            dispatch({
                type: ADD_PRODUCT_FAIL, payload:
                    error.response && error.response.data.message
                        ? error.response.data.message: error.message
            })
        }
    }
}
