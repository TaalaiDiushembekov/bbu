import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { removeUser, setUser } from "./auth/auth.slice";
import {API} from '../consts'


const baseQuery = fetchBaseQuery({
    baseUrl: API,
    credentials: "include",
    prepareHeaders: (headers, { getState }) => {
        const token = getState().auth.token;
        const token2 = JSON.parse(localStorage.getItem('accessToken'))
        if (token2) {
            headers.set("Authorization", `Bearer ${token2}`);
        }
        return headers;
    },
});
const baseQueryWithReauth = async (args, api, extraOptions) => {
    let result = await baseQuery(args, api, extraOptions);

    if (result?.error?.originalStatus === 403) {
        console.log("sending refresh token");

        //sending a refreshToken to get an accessToken
        const refreshResult = await baseQuery(
            "/users/refresh",
            api,
            extraOptions
        );
        console.log(refreshResult);

        if (refreshResult?.data) {
            const user = api.getState().auth.email;
            //store the new token
            api.dispatch(setUser({ ...refreshResult.data, user }));

            //retry original original query with new accessToken
            result = await baseQuery(args, api, extraOptions);
        } else {
            api.dispatch(removeUser());
            return { error: { message: "Failed to refresh token" } };
        }
    }
    return result;
};

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: baseQueryWithReauth,
    endpoints: (builder) => ({})
});


export default apiSlice
// export const apiSliceWithoutHeaders = createApi({
//     baseQuery: fetchBaseQuery({
//         baseUrl: 'http://localhost:8080'
//     }),
//     endpoints: builder => ({})
// })