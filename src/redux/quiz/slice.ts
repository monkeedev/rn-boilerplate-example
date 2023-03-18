import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchQuestions } from './actions';
import { Question, QuizState } from './types';

const initialState: QuizState = {
  data: {
    questions: [],
    answers: [],
  },
  isLoading: false,
  error: '',
};

export const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    addToAnswers: (state, action: PayloadAction<Question>) => {
      state.data.answers.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchQuestions.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchQuestions.fulfilled, (state, action: PayloadAction<Question[]>) => {
        state.isLoading = false;
        state.data.questions = action.payload ?? [];
      })
      .addCase(fetchQuestions.rejected, (state, action: PayloadAction<string | unknown>) => {
        state.isLoading = false;
        state.error = action.payload ? '' + action.payload : 'Something went wrong';
      });
  },
});

export default quizSlice.reducer;
