import {combineReducers, createStore, applyMiddleware } from 'redux'
import { composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import {productsListReducer, productDetailsReducer, addProductReducer} from "./reducers/productsReducer.js";
import {cartReducer} from "./reducers/cartReducer";
import {userLoginReducer, userRegisterReducer,usersListReducer, userDetailsReducer,userUploadInfoReducer,userUploadInfoTwoReducer} from "./reducers/userReducer.js"
import {partnersListReducer} from "./reducers/partnerReducer";
import userSlice from './slices/userSlice.js';

const reducer = combineReducers({
    productsList: productsListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
    user: userSlice.reducer,
    // userLogin: userLoginReducer,
    // userRegister: userRegisterReducer,
    // usersList: usersListReducer,
    // userDetails: userDetailsReducer,
    // userUploadInfo: userUploadInfoReducer,
    // userUploadInfoTwo: userUploadInfoTwoReducer,
    addProduct: addProductReducer,
    partnersList: partnersListReducer
})

const cartFromStorage = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []
const userFromStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null
const initialState = {cart: {cartItems: cartFromStorage}, userLogin: {userInfo: userFromStorage}}
const middleware = [thunk]

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store
