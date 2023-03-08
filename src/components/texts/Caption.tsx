import { useTheme } from '@hooks';
import { sizes } from '@theme';
import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { TextProps } from './types';

export const Caption: React.FC<TextProps> = ({ content = 'Default caption', style }) => {
  const { theme } = useTheme();
  return (
    <Text
      numberOfLines={1}
      lineBreakMode="clip"
      style={[styles.text, { color: theme.textPrimary }, style]}
    >
      {content}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: sizes.r,
    letterSpacing: 0.4,
    lineHeight: sizes.r * 1.25,
    marginBottom: 12,
  },
});
