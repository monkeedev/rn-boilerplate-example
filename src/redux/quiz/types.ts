import { Answer, Question } from '@utils';

export interface QuizState {
  data: {
    questions: Question[];
    answers: {
      [id: string]: Answer;
    };
  };
  isLoading: boolean;
  error: string;
}
