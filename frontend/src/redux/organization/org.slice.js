import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    is_checked: false,
    org_name: "",
    org_pin: "",
    org_director: "",
    org_director_passport: {
        series: "",
        authority: "",
        date: "",
    },
    org_accountant: "",
    org_accountant_passport: {
        series: "",
        authority: "",
        date: "",
    },
    org_responsible_person: "",
    org_phone: "",
    org_social_number: "",
    org_activity: "",
    org_ownership: "",
    org_legal: "",
    org_civil_status: "",
    org_email: "",
}


export const orgSlice = createSlice({
    name: 'org',
    initialState,
    reducers: {
        setOrganization(state, action){
            return {
                ...state,
                ...action.payload,
              };
        }
    }
})


export const {setOrganization} = orgSlice.actions;

export const orgReducer = orgSlice.reducer;