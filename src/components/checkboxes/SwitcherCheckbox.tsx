import { RowContainer } from '@components/containers';
import { Caption } from '@components/texts';
import { useTheme } from '@hooks';
import { defaultColors } from '@theme';
import { defaultSpringConfig } from '@utils';
import React, { useState } from 'react';
import { Pressable, StyleSheet, ViewStyle } from 'react-native';
import Animated, {
  interpolate,
  interpolateColor,
  useAnimatedReaction,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import { CheckboxProps } from './types';

const DEFAULT_HEIGHT = 32;

export const SwitcherCheckbox: React.FC<CheckboxProps> = ({
  label,
  onPress,
  isReversed = false,
}) => {
  const { theme } = useTheme();
  const [isChecked, setChecked] = useState(false);
  const rChecked = useSharedValue(0);

  const localStyles: { [key: string]: ViewStyle } = {
    checkbox: {
      flexDirection: isReversed ? 'row-reverse' : 'row',
      justifyContent: isReversed ? 'space-between' : 'flex-start',
    },
    circle: {
      [!isReversed ? 'marginRight' : 'marginLeft']: 10,
    },
  };

  const rCheckmarkCircleStyles = useAnimatedStyle(() => ({
    transform: [{ translateX: interpolate(rChecked.value, [0, 1], [0, DEFAULT_HEIGHT]) }],
  }));

  const rCheckmarkContainerStyles = useAnimatedStyle(() => ({
    borderColor: interpolateColor(rChecked.value, [0, 1], [theme.border, theme.success]),
    backgroundColor: interpolateColor(rChecked.value, [0, 1], [theme.border, theme.success]),
  }));

  const handlePress = () => {
    setChecked((prev) => !prev);
    onPress();
  };

  useAnimatedReaction(
    () => isChecked,
    () => {
      rChecked.value = withSpring(+isChecked, defaultSpringConfig);
    },
    [isChecked]
  );

  return (
    <Pressable onPress={handlePress}>
      <RowContainer style={{ ...styles.container, ...localStyles.checkbox }}>
        <Animated.View
          style={[styles.checkboxContainer, localStyles.circle, rCheckmarkContainerStyles]}
        >
          <Animated.View style={[styles.checkboxCircle, rCheckmarkCircleStyles]} />
        </Animated.View>
        <Caption content={label} />
      </RowContainer>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexWrap: 'nowrap',
  },
  checkboxContainer: {
    borderWidth: 1,
    justifyContent: 'center',
    borderRadius: 999,
    width: DEFAULT_HEIGHT * 2,
    height: DEFAULT_HEIGHT,
    padding: 2,
  },
  checkboxCircle: {
    width: DEFAULT_HEIGHT - 6,
    height: DEFAULT_HEIGHT - 6,
    borderRadius: 999,
    backgroundColor: defaultColors.white,
  },
});
