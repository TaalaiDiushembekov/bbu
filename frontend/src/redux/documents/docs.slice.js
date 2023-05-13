import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   documents: []
}


export const docSlice = createSlice({
    name: 'document',
    initialState,
    reducers: {
        setDocument(state, action){
            state.documents = action.payload
        },
    }
})


export const {setDocument} = docSlice.actions;

export const docReducer = docSlice.reducer;