import {khotixsAdminApi} from "@/lib/api";
import {AdminType} from "@/lib/admin/AdminData";

export const adminApi = khotixsAdminApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllUser: builder.query<{ content: AdminType[] }, { pageNumber: number, pageSize: number }>({
            query: ({
                        pageNumber,
                        pageSize
                    }) => `/user-profile/api/v1/user-profiles/role/admin?pageNumber=${pageNumber}&pageSize=${pageSize}`,
            providesTags: [{type: 'Admin', id: 'LIST'}],
        }),


        enableUser: builder.mutation<void, string>({
            query: (uuid) => ({
                url: `/identity/api/v1/auths/users/${uuid}/enable`,
                method: 'PUT',
                body: {status: 1},
            }),
            invalidatesTags: [{type: 'Admin', id: 'LIST'}],
        }),


        disableUser: builder.mutation<void, string>({
            query: (uuid) => ({
                url: `/identity/api/v1/auths/users/${uuid}/disable`,
                method: 'PUT',
                body: {status: 0},
            }),
            invalidatesTags: [{type: 'Admin', id: 'LIST'}],
        }),


    }),
});

export const {
    useGetAllUserQuery,
    useEnableUserMutation,
    useDisableUserMutation,
} = adminApi;