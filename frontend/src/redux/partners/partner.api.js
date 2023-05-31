import apiSlice from "../api";
export const partnerApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getPartners: builder.query({
            query: () => ({
                url: "/partner",
            }),
        }),
        uploadPartner: builder.mutation({
            query: (payload) => ({
                url: "/partner",
                method: 'POST',
                body: payload
            })
        }),
        deletePartner: builder.mutation({
            query: (id) => ({
                url: `/partner/${id}`,
                method: 'DELETE'
            })
        })
    }),
});

export const { useGetPartnersQuery, useUploadPartnerMutation, useDeletePartnerMutation} = partnerApi;
