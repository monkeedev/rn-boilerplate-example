import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ContainerProps } from './types';

export const RowContainer: React.FC<ContainerProps> = ({ children, style, onLayout }) => {
  return (
    <View onLayout={onLayout} style={[styles.container, style]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 8,
  },
});
