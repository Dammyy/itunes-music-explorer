import axios from 'axios'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { createQueryString } from '../../utils'

export interface SearchStateItem {
  artistName: string;
  artworkUrl100: string
  trackName: string
  collectionCensoredName: string
}
interface SearchState {
  searchResult: SearchStateItem[]
  isLoading: boolean
  error: string | undefined
}

const initialState: SearchState = {
  searchResult: [],
  isLoading: false,
  error: '',
}

export const searchForQuery = createAsyncThunk(
  'content/fetchContent',
  async (term: string) => {
    const queryString = createQueryString(term)

    const res = await axios(`http://localhost:3000/search${queryString}`)
    const data = await res.data
    return data.results
  }
)

export const snackbarSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(searchForQuery.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(searchForQuery.fulfilled, (state, action) => {
      state.isLoading = false
      state.searchResult = action.payload
    })
    builder.addCase(searchForQuery.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.error.message
    })
  },
})

export default snackbarSlice.reducer
