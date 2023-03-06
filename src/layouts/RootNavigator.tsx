import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {AuthNavigator, MainNavigator} from '.';

export const RootNavigator = () => {
  const isAuthorized = false;

  return (
    <NavigationContainer>
      {!isAuthorized ? <AuthNavigator /> : <MainNavigator />}
    </NavigationContainer>
  );
};
