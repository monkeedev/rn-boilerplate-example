import { useTheme } from '@hooks';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import { HomeScreen } from '@screens/Home';
import { QuizScreen } from '@screens/Quiz';
import React from 'react';

const MainStack = createNativeStackNavigator();

export const MainNavigator = () => {
  const { theme } = useTheme();

  // declare header styles in the config down below
  const defaultHeaderConfig: NativeStackNavigationOptions = {
    headerShown: false,
    headerTransparent: true,
    headerTintColor: theme.textPrimary,
  };

  // specific header styles for QuizScreen
  const quizHeaderConfig: NativeStackNavigationOptions = {
    headerShown: true,
    headerTransparent: true,
    headerTintColor: theme.textPrimary,
  };

  return (
    <MainStack.Navigator screenOptions={{ ...defaultHeaderConfig }}>
      <MainStack.Screen name="Home" component={HomeScreen} />
      <MainStack.Screen
        name="Quiz"
        component={QuizScreen}
        options={({ route }) => ({
          ...quizHeaderConfig,
          headerTitle: `Question ${route.params.id + 1}`,
        })}
      />
    </MainStack.Navigator>
  );
};
