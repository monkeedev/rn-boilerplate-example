import { useTheme } from '@hooks';
import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { ButtonProps } from './types';

export const DefaultButton: React.FC<ButtonProps> = ({ onPress, containerStyles, children }) => {
  const { theme } = useTheme();

  return (
    <Pressable
      onPress={onPress}
      style={[styles.container, { backgroundColor: theme.info }, containerStyles]}
    >
      {children}
    </Pressable>
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
    maxHeight: 52,
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
