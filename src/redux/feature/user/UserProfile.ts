import {khotixsAdminApi} from "@/lib/api";
import {UserType} from "@/lib/admin/UserData";


export const getUserProfile = khotixsAdminApi.injectEndpoints({
    endpoints: (builder) => ({
        getUserProfile: builder.query<UserType, void>({
            query: () => '/user-profile/api/v1/user-profiles/me',
            providesTags: [{type: 'UserProfile', id: 'LIST'}],
        }),
        updateUserProfile: builder.mutation<UserType, { data: Partial<UserType> }>({
            query: ({data}) => ({
                url: `/user-profile/api/v1/user-profiles`,
                method: 'PATCH',
                body: data,
            }),
            invalidatesTags: [{type: 'UserProfile', id: 'LIST'}],
        }),
        logout: builder.mutation<UserType, void>({
            query: () => ({
                url: '/logout',
                method: 'POST',
            }),
            invalidatesTags: [{type: 'UserProfile', id: 'LIST'}],
        }),
    }),
});


export const {
    useGetUserProfileQuery,
    useUpdateUserProfileMutation,
    useLogoutMutation,
} = getUserProfile;

