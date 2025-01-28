import { khotixsAdminApi } from "@/lib/api";
import {OrganizerType} from "@/lib/admin/OrganizerData";

export const organizerApi = khotixsAdminApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllOrganizer: builder.query<{ content: OrganizerType[] }, { pageNumber: number, pageSize: number }>({
            query: ({ pageNumber, pageSize }) => `/user-profile/api/v1/user-profiles/role/organizer?pageNumber=${pageNumber}&pageSize=${pageSize}`,
            providesTags: [{ type: 'Organizer', id: 'LIST' }],
        }),
        enableOrganizer: builder.mutation<void, string>({
            query: (uuid) => ({
                url: `/identity/api/v1/auths/users/${uuid}/enable`,
                method: 'PUT',
                body: { status: 1 },
            }),
            invalidatesTags: [{ type: 'Organizer', id: 'LIST' }],
        }),
        disableOrganizer: builder.mutation<void, string>({
            query: (uuid) => ({
                url: `/identity/api/v1/auths/users/${uuid}/disable`,
                method: 'PUT',
                body: { status: 0 },
            }),
            invalidatesTags: [{ type: 'Organizer', id: 'LIST' }],
        }),
    }),
});

export const {
    useGetAllOrganizerQuery,
    useEnableOrganizerMutation,
    useDisableOrganizerMutation,
} = organizerApi;