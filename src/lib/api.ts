import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({ baseUrl: '' });

export const khotixsAdminApi = createApi({
    reducerPath: "khotixsAdminApi",
    baseQuery: baseQuery,
    endpoints: () => ({}),
    tagTypes: [
        'Customer',
        'Organizer',
        'Admin',
        'Event',

    ]
});