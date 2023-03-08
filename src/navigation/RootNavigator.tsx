import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { AuthNavigator, MainNavigator } from '.';

export const RootNavigator = () => {
  const isAuthorized = true;

  return (
    <NavigationContainer>
      {!isAuthorized ? <AuthNavigator /> : <MainNavigator />}
    </NavigationContainer>
  );
};
