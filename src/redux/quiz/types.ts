import { Question } from '@utils';

export interface QuizState {
  data: {
    questions: Question[];
    answers: Question[];
  };
  isLoading: boolean;
  error: string;
}
