import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const { API } = process.env;
console.log(API)
export const userApi = createApi({
    reducerPath: "userApi",

    baseQuery: fetchBaseQuery({
        baseUrl: `http://localhost:8080/api/v1`,
    }),

    endpoints: (builder) => ({
        login: builder.mutation({
            query: (payload) => ({
                url: "/users/login",
                method: "POST",
                body: payload,
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                },
            }),
        }),
    }),
});

export const { useLoginMutation } = userApi;
