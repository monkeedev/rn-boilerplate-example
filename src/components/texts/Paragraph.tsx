import { useTheme } from '@hooks';
import { sizes } from '@theme';
import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { TextProps } from './types';

export const Paragraph: React.FC<TextProps> = ({ content = 'Default paragraph', style }) => {
  const { theme } = useTheme();
  return <Text style={[styles.text, { color: theme.textPrimary }, style]}>{content}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: sizes.m,
    fontWeight: '500',
    letterSpacing: 0.4,
    lineHeight: sizes.m * 1.35,
    marginBottom: 14,
  },
});
