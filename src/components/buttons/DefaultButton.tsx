import { useTheme } from '@hooks';
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { ButtonProps } from './types';

export const DefaultButton: React.FC<ButtonProps> = ({ onPress, containerStyles, children }) => {
  const { theme } = useTheme();

  return (
    <TouchableOpacity
      activeOpacity={0.75}
      onPress={onPress}
      style={[styles.container, { backgroundColor: theme.info }, containerStyles]}
    >
      {children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
    paddingHorizontal: 12,
    alignItems: 'center',
    borderRadius: 4,
    flexGrow: 1,
    flexShrink: 1,
    minHeight: 52,
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
