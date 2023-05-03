

import { createSlice } from "@reduxjs/toolkit";
import { authApi } from "./auth.api";

const initialState = {
    id: null,
    email: null,
    accessToken: null,
    role: null
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers:{
        setUser(state, action){
            state.id = action.payload.id
            state.email = action.payload.email
            state.accessToken = action.payload.accessToken
            state.role = action.payload.role
            localStorage.setItem('userId', JSON.stringify(state.id))
            localStorage.setItem('email', JSON.stringify(state.email))
            localStorage.setItem('accessToken', JSON.stringify(state.accessToken))
            localStorage.setItem('role', JSON.stringify(state.role))
        },
        removeUser(state){
            state.id = null
            state.email = null
            state.accessToken = null
            state.role = null
            localStorage.removeItem('userId')
            localStorage.removeItem('email')
            localStorage.removeItem('accessToken')
            localStorage.removeItem('role')
        }
    }
})

export const {setUser, removeUser} = authSlice.actions;
export const authReducer = authSlice.reducer;

export const fetchRefreshToken = async (dispatch) => {
    try {
        const response = await authApi.endpoints.refreshToken()
        console.log(response)
    } catch (error) {
        
    }
}

// export const githubActions = githubSlice.actions;
// export const githubReducer = githubSlice.reducer;