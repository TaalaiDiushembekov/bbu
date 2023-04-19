import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axiosApi from '../../axiosApi';

const initialState = {
    partners: [],
    loading: false,
    error: null
};

export const fetchPartners = createAsyncThunk('partner/fetchPartners', async (data) => {
    return await axiosApi('/about');
});

const partnerSlice = createSlice({
    name: "partner",
    initialState,
    extraReducers: builder => {
        builder.addCase(fetchPartners.pending, state => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(fetchPartners.fulfilled, (state, action) => {
            state.loading = false;
            state.error = null;
            state.partners = action.payload;
        });
        builder.addCase(fetchPartners.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });
    }
});

export default partnerSlice;
