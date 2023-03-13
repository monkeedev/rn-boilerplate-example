import { useTheme } from '@hooks';
import { sizes } from '@theme';
import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { TextProps } from './types';

export const Caption: React.FC<TextProps> = ({
  content = 'Default caption',
  style,
  singleLine,
}) => {
  const { theme } = useTheme();
  return (
    <Text
      style={[styles.text, { color: theme.textPrimary }, style]}
      lineBreakMode="tail"
      numberOfLines={singleLine ? 1 : 0}
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
    flexShrink: 1,
  },
});
