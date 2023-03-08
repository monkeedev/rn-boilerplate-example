import React from 'react';
import { View } from 'react-native';
import { ContainerProps } from './types';

export const DefaultContainer: React.FC<ContainerProps> = ({ children, style }) => {
  return <View style={style}>{children}</View>;
};
