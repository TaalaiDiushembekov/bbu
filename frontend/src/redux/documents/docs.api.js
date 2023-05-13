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
            })
        }),
        uploadDoc: builder.mutation({
            query: (payload) => ({
                url: `/document`,
                method: 'POST',
                body: payload,
                headers: {
                    'Content-Type': "application/json; charset=UTF-8"
                }
            })
        })
        
    })
})

export const { useUploadDocMutation, useDeleteDocMutation} = docsApi;