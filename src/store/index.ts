import { configureStore } from '@reduxjs/toolkit'
import searchReducer from '../views/Search/searchSlice'

export const store = configureStore({
  reducer: {
    test: searchReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
