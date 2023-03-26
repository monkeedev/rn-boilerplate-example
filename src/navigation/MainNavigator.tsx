import { useTheme } from '@hooks';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import { HomeScreen } from '@screens/Home';
import { QuizScreen } from '@screens/Quiz';
import { ProgressBar } from '@screens/Quiz/Components';
import { ResultsScreen } from '@screens/Results';
import React from 'react';
import { BackButton } from './Components';

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
        options={({ route }: { route: any }) => ({
          ...quizHeaderConfig,
          headerTitle: `Question ${route.params.id + 1}`,
          headerRight: () => <ProgressBar />,
          headerLeft: () => <BackButton id={route.params.id} />,
        })}
      />
      <MainStack.Screen name="Results" component={ResultsScreen} />
    </MainStack.Navigator>
  );
};
