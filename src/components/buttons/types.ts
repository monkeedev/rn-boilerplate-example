import React from 'react';
import { TextStyle, ViewStyle } from 'react-native';

export type ButtonProps = {
  onPress: () => void;
  children: React.ReactElement | React.ReactElement[];
  containerStyles?: ViewStyle;
  textStyles?: TextStyle;
  isDisabled?: boolean;
};
