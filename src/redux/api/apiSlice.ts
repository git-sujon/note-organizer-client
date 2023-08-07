// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


// Define a service using a base URL and expected endpoints
export  const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: `${import.meta.env.VITE_BASE_URL}` }),
  endpoints: (builder) => ({
    getAllNotes: builder.query({
        query: () => `/notes`,
      }),
    getSingleNote: builder.query({
        query: (id: string) => `/notes/${id}`,
      }),
  }),
})

export const { useGetAllNotesQuery, useGetSingleNoteQuery } = api