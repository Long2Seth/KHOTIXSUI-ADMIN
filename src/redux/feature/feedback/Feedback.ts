// import {khotixsAdminApi} from "@/lib/api";
// import {FeedbackType} from "@/lib/admin/Feedback";
//
// export const feedbackApi = khotixsAdminApi.injectEndpoints({
//     endpoints: (builder) => ({
//         getAllFeedback: builder.query<{ content: FeedbackType[] }, { pageNumber: number, pageSize: number }>({
//             query: ({ pageNumber, pageSize }) => `/feedback/api/v1/feedbacks?pageNumber=${pageNumber}&pageSize=${pageSize}`,
//             providesTags: [{ type: 'Feedback', id: 'LIST' }],
//         }),
//     }),
// });
//
//
// export const {
//     useGetAllFeedbackQuery,
// } = feedbackApi;