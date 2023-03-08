import { DefaultColors, NotificationColorScheme, ThemeAdapter } from './types';

const defaultColors: DefaultColors = {
  white: '#fff',
  black: '#000',
};

const notifications: NotificationColorScheme = {
  success: '#61D163',
  warning: '#EDBE5E',
  error: '#E25336',
  info: '#2196f3',
};

const colors: { [scheme: string]: ThemeAdapter } = {
  dark: {
    primary: '#16181D',
    secondary: '#6FC371',
    textPrimary: '#FFFFFF',
    textSecondary: '#C4C9D4',
    link: '#FFFFFF',
    border: '#3d4457',
    ...notifications,
    ...defaultColors,
  },
  light: {
    primary: '#F2F2F3',
    secondary: '#6FC371',
    textPrimary: '#1F262E',
    textSecondary: '#414C58',
    link: '#0277bd',
    border: '#C4C9D4',
    ...notifications,
    ...defaultColors,
  },
};

export { colors, defaultColors };
