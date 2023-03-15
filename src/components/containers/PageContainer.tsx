import { useTheme } from '@hooks';
import { useHeaderHeight } from '@react-navigation/elements';
import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ContainerProps } from './types';

export const PageContainer: React.FC<ContainerProps> = ({ children, style }) => {
  const { theme } = useTheme();
  const headerHeight = useHeaderHeight();

  return (
    <SafeAreaView
      style={[
        styles.container,
        { backgroundColor: theme.primary, paddingTop: headerHeight },
        style,
      ]}
    >
      {children}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
