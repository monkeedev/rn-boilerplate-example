import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { MainNavigator } from './MainNavigator';

export const RootNavigator = () => {
  return (
    <NavigationContainer>
      <MainNavigator />
    </NavigationContainer>
  );
};
