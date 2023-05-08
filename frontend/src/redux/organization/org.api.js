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
        })
        
    })
})

export const {useGetAllOrgsQuery, useGetOneOrgQuery} = orgApi;