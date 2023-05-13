import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import apiSlice from "../api";

export const tariffApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getTariffs: builder.query({
            query: () => ({
                url: "/tariff",
            }),
        }),
        uploadTariff: builder.mutation({
            query: (payload) => ({
                url: "/tariff",
                method: 'POST',
                body: payload
            })
        }),
        updateTariff: builder.mutation({
            query: ({id, data}) => ({
                url: `/tariff/${id}`,
                method: 'PATCH',
                body: data,
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                },
            })
        }),
        getOneTariff: builder.query({
            query: (id) => ({
                url: `/tariff/${id}`
            })
        })
    }),
});

export const { useGetTariffsQuery, useUploadTariffMutation, useUpdateTariffMutation, useGetOneTariffQuery} = tariffApi;
