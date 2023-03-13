import { LayoutChangeEvent, ViewStyle } from 'react-native';

export interface ContainerProps {
  style?: ViewStyle | ViewStyle[];
  children?: React.ReactElement | React.ReactElement[];
  onLayout?: (e: LayoutChangeEvent) => void;
}
