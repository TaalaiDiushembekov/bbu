

import apiSlice from "../api.js";


export const usersApi = apiSlice.injectEndpoints({
    endpoints: builder => ({
        // login: builder.mutation({
        //     query: (payload) => ({
        //         url: "/users/login",
        //         method: "POST",
        //         body: payload,
        //         headers: {
        //             "Content-type": "application/json; charset=UTF-8",
        //         },
        //         responseType: 'json',
        //     })
        // }),
        
        // logout: builder.mutation({
        //     query: () => ({
        //         url: "/users/logout",
        //         method: "POST",
        //     }),
        // }),
        getAllUsers: builder.query({
            query: () => ({
                url: "/users",
                method: "GET",
                responseType: 'json'
            }),
        }),
        getUserById: builder.query({
            query: (id) => ({
                url: `/users/${id}`,
                method: "GET",
                responseType: 'json'
            }),
        }),
    }),
});

export const { useGetAllUsersQuery, useGetUserByIdQuery } = usersApi;
