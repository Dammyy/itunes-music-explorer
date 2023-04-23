import { createSlice } from '@reduxjs/toolkit';

interface SearchState {
  value: Array<object>
}

const initialState: SearchState = {
  value: [],
};

export const snackbarSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    first: (state, action) => {
      state.value = [];
    },
  },
});

export const { first } = snackbarSlice.actions;

export default snackbarSlice.reducer;