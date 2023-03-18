import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const URL = 'https://opentdb.com/api.php?amount=10';

export const fetchQuestions = createAsyncThunk('', async (_, thunkAPI) => {
  try {
    const response = await axios.get(URL);

    return response.data.results;
  } catch (error) {
    return thunkAPI.rejectWithValue('Cannot fetch questions');
  }
});
