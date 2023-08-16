import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  greetings: [],
  loading: false,
  error: '',
};

const url = 'http://localhost:3001/api/v1/greetings';

export const getGreetings = createAsyncThunk('greetings/fetchGreetings', async () => {
  const response = await fetch(`${url}`);
  const data = await response.json();
  console.log('This data =', data);
  return data;
});

const greetingsSlice = createSlice({
  name: 'greetings',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getGreetings.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getGreetings.fulfilled, (state, action) => {
      state.loading = false;
      state.greetings = action.payload;
      state.error = '';
    });
    builder.addCase(getGreetings.rejected, (state, action) => {
      state.loading = false;
      state.greetings = [];
      state.error = action.error.greeting;
    });
  },
});

export default greetingsSlice.reducer;
