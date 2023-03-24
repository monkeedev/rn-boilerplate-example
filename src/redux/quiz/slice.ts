import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Answer, Question } from '@utils';
import { fetchQuestions } from './actions';
import { QuizState } from './types';

const initialState: QuizState = {
  data: {
    questions: [],
    answers: {},
  },
  isLoading: false,
  error: '',
};

export const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    addToAnswers: (state, action: PayloadAction<Answer>) => {
      state.data.answers[action.payload.id] = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchQuestions.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchQuestions.fulfilled, (state, action: PayloadAction<Question[]>) => {
        state.isLoading = false;
        state.data.answers = {};
        state.data.questions = action.payload ?? [];
      })
      .addCase(fetchQuestions.rejected, (state, action: PayloadAction<string | unknown>) => {
        state.isLoading = false;
        state.error = action.payload ? '' + action.payload : 'Something went wrong';
      });
  },
});

export default quizSlice.reducer;
