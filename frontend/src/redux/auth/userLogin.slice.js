

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    id: null,
    email: null,
    accessToken: null,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers:{
        setUser(state, action){
            state.id = action.payload.id
            state.email = action.payload.email
            state.accessToken = action.payload.accessToken
            localStorage.setItem('userInfo', JSON.stringify(state))
        },
        removeUser(state){
            state.id = null
            state.email = null
            state.accessToken = null
            localStorage.removeItem('userInfo')
        }
    }
})

export const {setUser, removeUser} = authSlice.actions;
export const authReducer = authSlice.reducer;

// export const githubActions = githubSlice.actions;
// export const githubReducer = githubSlice.reducer;