import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import apiSlice from "../api";

export const tariffApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getTariffs: builder.query({
            query: () => ({
                url: "/tariff",
            }),
            providesTags: () => [{
                type: 'tariff'
            }]
        }),
        uploadTariff: builder.mutation({
            query: (payload) => ({
                url: "/tariff",
                method: 'POST',
                body: payload
            }),
            invalidatesTags: () => [{
                type: 'tariff'
            }]
        }),
        updateTariff: builder.mutation({
            query: ({id, data}) => ({
                url: `/tariff/${id}`,
                method: 'PATCH',
                body: data,
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                },
            }),
            invalidatesTags: () => [{
                type: 'tariff'
            }]
        }),
        getOneTariff: builder.query({
            query: (id) => ({
                url: `/tariff/${id}`
            })
        }),
        deleteTariff: builder.mutation({
            query: (id) => ({
                url: `/tariff/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: () => [{
                type: 'tariff'
            }]
        }),
    }),
});

export const { useGetTariffsQuery, useUploadTariffMutation, useUpdateTariffMutation, useGetOneTariffQuery, useDeleteTariffMutation} = tariffApi;
