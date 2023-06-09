import {ADD_TO_CART, REMOVE_FROM_CART} from "../../constants/cartConstants";

export const cartReducer = (state = {cartItems: []}, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const item = action.payload
            const existItem = state.cartItems.find(el => el.product === item.product)
            if (existItem) {
                return {...state, cartItems: state.cartItems
                        .map(el => el.product === existItem.product ? item : el)}
            } else {
                return {...state, cartItems: [...state.cartItems, item]}
            }
        case REMOVE_FROM_CART:
            return {
                ...state, cartItems: state.cartItems.filter(el => el.product !== action.id)
            }
        default:
            return state
    }
}