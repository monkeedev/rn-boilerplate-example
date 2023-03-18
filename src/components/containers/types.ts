import { LayoutChangeEvent, ViewStyle } from 'react-native';

export interface ContainerProps {
  style?: ViewStyle | ViewStyle[];
  children?: React.ReactNode;
  onLayout?: (e: LayoutChangeEvent) => void;
}
