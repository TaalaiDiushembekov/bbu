import apiSlice from "../api";
export const partnerApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getPartners: builder.query({
            query: () => ({
                url: "/partner",
            }),
            providesTags: () => [{
                type: 'partner'
            }]
            
        }),
        uploadPartner: builder.mutation({
            query: (payload) => ({
                url: "/partner",
                method: 'POST',
                body: payload
            }),
            invalidatesTags: () => [{
                type: 'partner'
            }]
        }),
        deletePartner: builder.mutation({
            query: (id) => ({
                url: `/partner/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: () => [{
                type: 'partner'
            }]
        })
    }),
});

export const { useGetPartnersQuery, useUploadPartnerMutation, useDeletePartnerMutation} = partnerApi;
