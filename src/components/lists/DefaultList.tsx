import { Caption } from '@components/texts';
import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { ListItem, ListProps } from './types';

const Separator = () => <View style={styles.itemSeparator} />;

const Item: React.FC<ListItem> = ({ title }) => {
  return (
    <View style={styles.itemContainer}>
      <Caption content={title} />
    </View>
  );
};

export const DefaultList: React.FC<ListProps> = ({ data }) => {
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => <Item title={item.title} />}
      keyExtractor={(item) => item.key}
      ItemSeparatorComponent={Separator}
    />
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    paddingVertical: 16,
    paddingHorizontal: 12,
    borderRadius: 4,
    flexGrow: 1,
    flexShrink: 1,
  },
  itemSeparator: {
    height: 8,
  },
});
