import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { removeUser, setUser } from "./auth/auth.slice";

const baseQuery = fetchBaseQuery({
    baseUrl: 'http://localhost:8080/api/v1',
    credentials: 'include',
    prepareHeaders: (headers, { getState }) => {
        const token = getState().auth.token
        if (token) {
            headers.set("authorization", `Bearer ${token}`)
        }
        return headers
    }
})
const baseQueryWithReauth = async (args, api, extraOptions) => {
    let result = await baseQuery(args, api, extraOptions);
  
    if (result?.error?.originalStatus === 403) {
      console.log("sending refresh token");
  
      //sending a refreshToken to get an accessToken
      const refreshResult = await baseQuery("/users/refresh", api, extraOptions);
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
    baseQuery: baseQueryWithReauth,
    endpoints: builder => ({})
})