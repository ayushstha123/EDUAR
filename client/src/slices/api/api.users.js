import { emptySplitApi } from "./emptySplitApi";
const USERS_URL = "/api/user";

export const usersApiSlice = emptySplitApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllUsers: builder.query({
      query: () => ({
        url: `${USERS_URL}/all-users`,
        method: "GET",
      }),
      providesTags: ["User"],
    }),
    deleteUser: builder.mutation({
      query: (userId) => ({
        url: `${USERS_URL}/delete/${userId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["User"],
    }),
  }),
});

export const {
  useDeleteUserMutation,
  useGetAllUsersQuery
} = usersApiSlice;
