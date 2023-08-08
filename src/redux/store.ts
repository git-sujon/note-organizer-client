import { configureStore } from '@reduxjs/toolkit'
import userReducer from './features/user/userSlice'
import { api } from './api/apiSlice'
import paginationReducer from './features/pagination/paginationSlice'

// ...

export const store = configureStore({
  reducer: {
    user: userReducer,
    pagination:paginationReducer,
    [api.reducerPath]: api.reducer,
  },

  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(api.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch