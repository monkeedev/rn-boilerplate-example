/**
 * React Native Boilerplate
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { Notification } from '@components/common/notification';
import { store } from '@redux/store';
import { notificationRef } from '@utils';
import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import { useTheme } from './src/hooks';
import { RootNavigator } from './src/navigation';

export default function App(): JSX.Element {
  const { theme, scheme } = useTheme();
  const isDarkMode = scheme === 'dark';

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.primary }]}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={theme.primary}
      />

      <Provider store={store}>
        <RootNavigator />
      </Provider>

      <Notification ref={notificationRef} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
