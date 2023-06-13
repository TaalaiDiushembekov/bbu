import { apiSlice } from "../api";

export const teamApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getTeam: builder.query({
            query: () => ({
                url: "/team",
                method: "GET",
                responseType: "json",
            }),
            providesTags: () => [{
                type: 'team'
            }]
        }),
        getOneMember: builder.query({
            query: (id) => ({
                url: `/team/${id}`,
                method: "GET",
                responseType: "json",
            }),
        }),
        updateMember: builder.mutation({
            query: ({ id, data }) => ({
                url: `/team/${id}`,
                method: "PATCH",
                body: data,
            }),
            invalidatesTags: () => [{
                type: 'team'
            }]
        }),
        createMember: builder.mutation({
            query: (payload) => ({
                url: "/team/create",
                method: "POST",
                body: payload,
            }),
            invalidatesTags: () => [{
                type: 'team'
            }]
        }),
        deleteMember: builder.mutation({
            query: (id) => ({
                url: `/team/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: () => [{
                type: 'team'
            }]
        }),
    }),
});

export const {
    useGetTeamQuery,
    useGetOneMemberQuery,
    useUpdateMemberMutation,
    useCreateMemberMutation,
    useDeleteMemberMutation,
} = teamApi;
