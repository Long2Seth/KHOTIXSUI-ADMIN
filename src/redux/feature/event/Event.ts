import { khotixsAdminApi } from "@/lib/api";
import { EventType } from "@/lib/admin/Event";

export const eventApi = khotixsAdminApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllEvent: builder.query<{content:EventType[]}, { pageNumber: number, pageSize: number }>({
            query: ({ pageNumber, pageSize }) => `/event-ticket/api/v1/events/creator?page=${pageNumber}&size=${pageSize}`,
            providesTags: [{ type: 'Event', id: "LIST" }],
        }),
    }),
});

export const {
    useGetAllEventQuery,
} = eventApi;