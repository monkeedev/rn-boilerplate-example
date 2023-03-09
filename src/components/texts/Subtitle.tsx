import { useTheme } from '@hooks';
import { sizes } from '@theme';
import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { TextProps } from './types';

export const Subtitle: React.FC<TextProps> = ({ content = 'Default subtitle', style }) => {
  const { theme } = useTheme();
  return <Text style={[styles.text, { color: theme.textPrimary }, style]}>{content}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: sizes.l,
    fontWeight: '900',
    letterSpacing: 0.15,
    lineHeight: sizes.l * 1.45,
    // marginBottom: 15,
  },
});
