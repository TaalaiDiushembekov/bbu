import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./auth/auth.slice.js";
import { setupListeners } from "@reduxjs/toolkit/dist/query/index.js";
import { orgReducer } from "./organization/org.slice.js";
import { apiSlice } from "./api.js";

export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        auth: authReducer,
        org: orgReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware), devTools: true
});
setupListeners(store.dispatch);

export default store;
