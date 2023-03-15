import { useTheme } from '@hooks';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import { HomeScreen } from '@screens/Home';
import React from 'react';

const MainStack = createNativeStackNavigator();

export const MainNavigator = () => {
  const { theme } = useTheme();

  // declare header styles in the config down below
  const headerConfig: NativeStackNavigationOptions = {
    headerShown: false,
    headerTransparent: true,
    headerTintColor: theme.textPrimary,
  };

  return (
    <MainStack.Navigator screenOptions={{ ...headerConfig }}>
      <MainStack.Screen name="Home" component={HomeScreen} />
    </MainStack.Navigator>
  );
};
