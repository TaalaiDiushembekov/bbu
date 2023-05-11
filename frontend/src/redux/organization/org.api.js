import apiSlice from "../api";

export const orgApi = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getAllOrgs: builder.query({
            query: () => ({
                url: '/org',
                method: 'GET'
            })
        }),
        getOneOrg: builder.query({
            query: (id) => ({
                url: `/org/${id}`
            })
        }),
        createOrg: builder.mutation({
            query: (payload) => ({
                url: "/org",
                method: "POST",
                body: payload,
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                },
                responseType: 'json',
            })
        }),
        updateOrg: builder.mutation({
            query: ({data, id}) => ({
                url: `/org/${id}`,
                method: "PATCH",
                body: data,
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                },
            })
        })
        
    })
})

export const {useGetAllOrgsQuery, useGetOneOrgQuery, useCreateOrgMutation, useUpdateOrgMutation} = orgApi;