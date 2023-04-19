import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axiosApi from '../../axiosApi';

const initialState = {
    users: [],
    userInfo: null,
    loading: false,
    error: null,
    registerLoading: false,
    registerError: null,
    loginLoading: false,
    loginError: null
};

export const createUser = createAsyncThunk('user/registerUser', async (data) => {
    return await axiosApi.post('/', data);
});

const userSlice = createSlice({
    name: "user",
    initialState,
    extraReducers: builder => {
        builder.addCase(createUser.pending, state => {
            state.registerLoading = true;
            state.registerError = null;
        });
        builder.addCase(createUser.fulfilled, state => {
            state.registerLoading = false;
            state.registerError = null;
        });
        builder.addCase(createUser.rejected, (state, action) => {
            state.registerLoading = false;
            state.registerError = action.payload;
        });
    }
});

export default userSlice;
