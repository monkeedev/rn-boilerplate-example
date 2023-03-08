export type ColorScheme = {
  primary: string;
  secondary: string;
  textPrimary: string;
  textSecondary: string;
  link: string;
  border: string;
};

export type NotificationColorScheme = {
  success: string;
  warning: string;
  error: string;
  info: string;
};

export type DefaultColors = {
  white: string;
  black: string;
};

export type ThemeAdapter = ColorScheme & NotificationColorScheme & DefaultColors;
