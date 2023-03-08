import { useTheme } from '@hooks';
import { sizes } from '@theme';
import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { Props } from './types';

export const Metadata: React.FC<Props> = ({ content = 'Default metadata', style }) => {
  const { theme } = useTheme();
  return <Text style={{ ...styles.text, color: theme.textPrimary, ...style }}>{content}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: sizes.xs,
    fontWeight: '100',
    letterSpacing: 1,
    lineHeight: sizes.xs * 1.5,
    marginBottom: 10,
  },
});
