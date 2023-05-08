import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const tariffApi = createApi({
    reducerPath: 'tariff/api',
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:8080/api/v1",
    }),
    endpoints: (builder) => ({
        getTariffs: builder.query({
            query: () => ({
                url: "/tariff",
            }),
        }),
    }),
});

export const { useGetTariffsQuery } = tariffApi;
