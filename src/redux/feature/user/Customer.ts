import { khotixsAdminApi } from "@/lib/api";
import { UserType } from "@/lib/admin/UserData";

export const customerApi = khotixsAdminApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllCustomer: builder.query<{ content: UserType[] }, { pageNumber: number, pageSize: number }>({
            query: ({ pageNumber, pageSize }) => `/user-profile/api/v1/user-profiles/role/user?pageNumber=${pageNumber}&pageSize=${pageSize}`,
            providesTags: [{ type: 'Customer', id: 'LIST' }],
        }),
        enableUser: builder.mutation<void, string>({
            query: (uuid) => ({
                url: `/identity/api/v1/auths/users/${uuid}/enable`,
                method: 'PUT',
                body: { status: 1 },
            }),
            invalidatesTags: [{ type: 'Customer', id: 'LIST' }],
        }),
        disableUser: builder.mutation<void, string>({
            query: (uuid) => ({
                url: `/identity/api/v1/auths/users/${uuid}/disable`,
                method: 'PUT',
                body: { status: 0 },
            }),
            invalidatesTags: [{ type: 'Customer', id: 'LIST' }],
        }),
    }),
});

export const {
    useGetAllCustomerQuery,
    useEnableUserMutation,
    useDisableUserMutation,
} = customerApi;