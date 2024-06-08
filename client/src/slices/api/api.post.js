import { emptySplitApi } from "./emptySplitApi";
const POST_URL = "/api/post";
const FILE_URL = "file";

export const postApiSlice = emptySplitApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllPosts: builder.query({
      query: () => ({
        url: `${POST_URL}/get`,
        method: "GET",
      }),
      providesTags: ["Post"],
    }),
    // deletePost: builder.mutation({
    //   query: (postId) => ({
    //     url: `${POST_URL}/delete/${postId}`,
    //     method: "DELETE",
    //   }),
    //   invalidatesTags: ["Post"],
    // }),
    createPost: builder.mutation({
      query: ({ ...data }) => ({
        url: `${POST_URL}/create/`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Post"],
    }),
    uploadFile: builder.mutation({
      query: (fileData) => ({
        url: `${FILE_URL}/upload`,
        method: "POST",
        body: fileData,
      }),
      invalidatesTags: ["File"],
    }),
    getFile: builder.mutation({
      query: (fileName) => ({
        url: `${FILE_URL}/${fileName}`,
        method: "POST",
        body: fileName,
      }),
      invalidatesTags: ["File"],
    }),

  }),
});

export const {
  // useDeletePostMutation,
  useCreatePostMutation,
  useGetAllPostsQuery,
  useUploadFileMutation,
  useGetFileQuery,
} = postApiSlice;
