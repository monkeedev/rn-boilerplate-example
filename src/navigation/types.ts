import { Question } from '@utils';

export type MainNavigatorScreensParamList = {
  Home: Record<string, never>;
  Quiz: {
    id: number;
    question: Question;
  };
  Results: Record<string, never>;
};
