type ListItemData = {
  key: string;
  title: string;
};

export type ListItem = Pick<ListItemData, 'title'>;

export type ListProps = {
  data: ListItemData[];
};
