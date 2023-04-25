import {combineReducers, createStore, applyMiddleware } from 'redux'
import { composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import {productsListReducer, productDetailsReducer, addProductReducer} from "./reducers/productsReducer.js";
import {cartReducer} from "./reducers/cartReducer";
import {userLoginReducer, userRegisterReducer,usersListReducer, userDetailsReducer,userUploadInfoReducer,userUploadInfoTwoReducer} from "./reducers/userReducer.js"
import {partnersListReducer} from "./reducers/partnerReducer";
import userSlice from './slices/userSlice.js';
import partnerSlice from './slices/partnerSlice.js';
import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query/index.js';
import { userApi } from './auth/User.api.js';
import { authReducer } from './auth/userLogin.slice.js';

const reducer = combineReducers({
    user: userSlice.reducer,
    
    

    productsList: productsListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
    // userLogin: userLoginReducer,
    // userRegister: userRegisterReducer,
    // usersList: usersListReducer,
    // userDetails: userDetailsReducer,
    // userUploadInfo: userUploadInfoReducer,
    // userUploadInfoTwo: userUploadInfoTwoReducer,
    addProduct: addProductReducer,
    // partnersList: partnersListReducer
})

const cartFromStorage = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []
const userFromStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null
const initialState = {cart: {cartItems: cartFromStorage}, user: {userInfo: userFromStorage}}
const middleware = [thunk]

// const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))
export const store = configureStore({
    initialState,
    reducer: {
        [userApi.reducerPath] : userApi.reducer,
        auth: authReducer,
        partner: partnerSlice.reducer,
        user: userSlice.reducer,
        // github: githubReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(userApi.middleware)
})
setupListeners(store.dispatch)


export default store
