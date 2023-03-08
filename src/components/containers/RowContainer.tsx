import { useTheme } from '@hooks';
import { ContainerStyles } from '@theme';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ContainerProps } from './types';

export const RowContainer: React.FC<ContainerProps> = ({ children, style }) => {
  const { theme } = useTheme();

  return (
    <View style={{ ...styles.container, backgroundColor: theme.primary, ...style }}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...ContainerStyles.container,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
