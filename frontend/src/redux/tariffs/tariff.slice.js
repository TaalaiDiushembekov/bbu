import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tariffs: [],
    tariff: {
        name: '',
        services: ['']
    }
}


export const tariffSlice = createSlice({
    name: 'tariff',
    initialState,
    reducers: {
        setTariffs(state, action){
            state.tariffs = action.payload
        },
        setTariff(state, action){
            state.tariff.name = action.payload.name
            state.tariff.services = action.payload.services
        }
    }
})


export const {setTariffs, setTariff} = tariffSlice.actions;

export const tariffReducer = tariffSlice.reducer;