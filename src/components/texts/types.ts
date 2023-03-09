import { StyleProp, TextStyle } from 'react-native';

export type TextProps = {
  content?: string;
  style?: TextStyle | StyleProp<TextStyle>;
  singleLine?: boolean;
};
