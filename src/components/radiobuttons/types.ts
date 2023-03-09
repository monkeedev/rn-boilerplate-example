type RadiobuttonData = {
  key: string;
  title: string;
};

export type RadiobuttonDataItem = Pick<RadiobuttonData, 'title'> & {
  onPress: () => void;
  isChecked: boolean;
};

export type RadiobuttonGroupProps = {
  data: RadiobuttonData[];
  onItemPress: () => void;
  withMultipleChoice?: boolean;
};
