export type Question = {
  category: string;
  correct_answer: string;
  difficulty: 'easy' | 'medium' | 'hard';
  incorrect_answers: string[];
  question: string;
  type: 'multiple' | boolean;
};

export type Answer = {
  id: string;
  question: string;
  correct: string | string[] | boolean;
  usersAnswer: string[] | boolean;
};
