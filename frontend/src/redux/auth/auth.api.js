import { apiSlice } from "../api";
import { setAuthError } from "./auth.slice";


export const authApi = apiSlice.injectEndpoints({
    endpoints: builder => ({
        login: builder.mutation({
            query: (payload) => ({
                url: "/users/login",
                method: "POST",
                body: payload,
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                },
                responseType: 'json',
            }),
            onError: (error, { dispatch }) => {
                if (error.status === 401) {
                  dispatch(setAuthError('Invalid credentials')); // передайте сообщение об ошибке в поле error
                }
            },
        }),
        
        logout: builder.mutation({
            query: () => ({
                url: "/users/logout",
                method: "POST",
            }),
        }),
        refreshToken: builder.query({
            query: () => ({
                url: "/users/refresh",
                method: "GET",
                responseType: 'json'
            }),
        }),
    }),
});

export const { useLoginMutation, useLogoutMutation, useRefreshTokenQuery } = authApi;
