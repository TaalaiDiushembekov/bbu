import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    is_checked: null,
    org_activity: null,
    org_civil_status: null,
    org_director: null,
    org_director_passport: {series: null, authority: null, date: null},
    org_document: [],
    org_legal: null,
    org_name: null,
    org_phone: null,
    org_social_number: null
}


export const orgSlice = createSlice({
    name: 'org',
    initialState,
    reducers: {
        setOrganization(state, action){
            state.is_checked = action.payload.is_checked
            state.org_activity = action.payload.org_activity
            state.org_civil_status = action.payload.org_civil_status
            state.org_director = action.payload.org_director
            state.org_director_passport = action.payload.org_director_passport
            state.org_document = action.payload.org_document
            state.org_legal = action.payload.org_legal
            state.org_name = action.payload.org_name
            state.org_phone = action.payload.org_phone
            state.org_social_number = action.payload.org_social_number
        }
    }
})


export const {setOrganization} = orgSlice.actions;

export const orgReducer = orgSlice.reducer;