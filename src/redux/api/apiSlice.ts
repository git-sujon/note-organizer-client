// Need to use the React-specific entry point to import createApi
import {
  FetchBaseQueryError,
  createApi,
  fetchBaseQuery,
  BaseQueryFn,
  FetchArgs,
} from "@reduxjs/toolkit/query/react";

// Create a type for the baseQuery function
type CustomBaseQueryFn = BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
>;
// Define a service using a base URL and expected endpoints
export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_BASE_URL}`,
  }) as CustomBaseQueryFn,

  endpoints: (builder) => ({
    getAllNotes: builder.query({
      query: () => `/notes`,
      providesTags: ["addNote", "updateNote", "deleteNote"],
    }),
    getSingleNote: builder.query({
      query: (id: string) => `/notes/${id}`,
      providesTags: ["addNote", "updateNote", "deleteNote"],
    }),

    addNote: builder.mutation({
      query: ({ data }) => ({
        url: "/notes/",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["addNote"],
    }),
    updateNote: builder.mutation({
      query: ({ id, data }) => ({
        url: `/notes/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["updateNote"],
    }),
    deleteNote: builder.mutation({
      query: ({ _id }) => ({
        url: `/notes/${_id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["deleteNote"],
    }),
  }),
});

export const {
  useGetAllNotesQuery,
  useGetSingleNoteQuery,
  useAddNoteMutation,
  useUpdateNoteMutation,
  useDeleteNoteMutation,
} = api;
