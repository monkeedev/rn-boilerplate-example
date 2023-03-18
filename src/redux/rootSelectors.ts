import { RootState } from './store';

export const getQuestionsFetchStatus = (state: RootState) => state.quiz.isLoading;
export const getQuestionsFetchError = (state: RootState) => state.quiz.error;
export const getQuestions = (state: RootState) => state.quiz.data.questions;
export const getAnswers = (state: RootState) => state.quiz.data.answers;
