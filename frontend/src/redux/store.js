

import { apiSlice } from "./api.js";
import { tariffApi } from "./tariffs/tariff.api.js";

import { orgReducer } from "./organization/org.slice.js";
import { authReducer } from "./auth/auth.slice.js";

import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query/index.js";
import { tariffReducer } from "./tariffs/tariff.slice.js";
import { docReducer } from "./documents/docs.slice.js";



export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        [tariffApi.reducerPath]: tariffApi.reducer,
        auth: authReducer,
        org: orgReducer,
        tariff: tariffReducer,
        document: docReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware, tariffApi.middleware), devTools: true
});
setupListeners(store.dispatch);

export default store;
