/**
 * React Native Boilerplate
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { useTheme } from './src/hooks/useTheme';
import { RootNavigator } from './src/navigation';

export default function App(): JSX.Element {
  const { theme, scheme } = useTheme();
  const isDarkMode = scheme === 'dark';

  const backgroundStyle = {
    backgroundColor: theme.primary,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />

      <RootNavigator />
    </SafeAreaView>
  );
}
