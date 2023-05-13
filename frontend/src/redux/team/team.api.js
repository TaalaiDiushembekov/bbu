import { apiSlice } from "../api";


export const teamApi = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getTeam: builder.query({
            query: () => ({
                url: "/team",
                method: "GET",
                responseType: 'json'
            }),
        }),
    }),
});

export const { useGetTeamQuery} = teamApi;
