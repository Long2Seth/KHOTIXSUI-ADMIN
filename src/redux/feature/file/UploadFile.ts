import {khotixsAdminApi} from "@/lib/api";
import {FileType} from "@/lib/admin/FileType";

export const UploadFile = khotixsAdminApi.injectEndpoints({
    endpoints: (builder) => ({
        uploadFile: builder.mutation<FileType, FormData>({
            query: (data) => ({
                url: '/asset/api/v1/files',
                method: 'POST',
                body: data,
            }),
        }),
    }),
});

export const {
    useUploadFileMutation,
} = UploadFile;