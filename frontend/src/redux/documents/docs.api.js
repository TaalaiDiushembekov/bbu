import apiSlice from "../api";

export const docsApi = apiSlice.injectEndpoints({
    endpoints: builder => ({
        deleteDoc: builder.mutation({
            query: (id) => ({
                url: `/document/${id}`,
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json; charset=UTF-8",
                },
            }),
            invalidatesTags: () => [{
                type: 'user'
            }]
        }),
        uploadDoc: builder.mutation({
            query: (payload) => ({
                url: `/document`,
                method: 'POST',
                body: payload,
                headers: {
                    'Content-Type': "application/json; charset=UTF-8"
                }
            }),
            invalidatesTags: () => [{
                type: 'user'
            }]
        })
        
    })
})

export const { useUploadDocMutation, useDeleteDocMutation} = docsApi;