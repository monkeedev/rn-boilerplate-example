import { Answer } from '@utils';

export type ListItem = Omit<Answer, 'id'>;

export type ListProps = {
  data: Answer[];
};
