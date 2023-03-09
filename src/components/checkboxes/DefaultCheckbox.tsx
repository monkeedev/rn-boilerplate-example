import { RowContainer } from '@components/containers';
import { Caption } from '@components/texts';
import { useTheme } from '@hooks';
import { defaultSpringConfig } from '@utils';
import React, { useState } from 'react';
import { Pressable, StyleSheet, ViewStyle } from 'react-native';
import Animated, {
  interpolateColor,
  useAnimatedReaction,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/Ionicons';
import { CheckboxProps } from './types';

export const DefaultCheckbox: React.FC<CheckboxProps> = ({
  label,
  size = 32,
  onPress,
  isReversed,
}) => {
  const { theme } = useTheme();
  const [isChecked, setChecked] = useState(false);
  const rChecked = useSharedValue(0);

  const localStyles: { [key: string]: ViewStyle } = {
    container: {
      flexDirection: isReversed ? 'row-reverse' : 'row',
      justifyContent: isReversed ? 'space-between' : 'flex-start',
    },
    checkbox: {
      width: size,
      height: size,
      borderRadius: size,
      [!isReversed ? 'marginRight' : 'marginLeft']: 10,
    },
  };

  const rCheckmarkStyles = useAnimatedStyle(() => ({
    transform: [{ scale: rChecked.value }],
  }));

  const rCheckmarkContainerStyles = useAnimatedStyle(() => ({
    borderColor: interpolateColor(rChecked.value, [0, 1], [theme.border, theme.info]),
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
      <RowContainer style={{ ...styles.container, ...localStyles.container }}>
        <Animated.View
          style={[styles.checkboxContainer, localStyles.checkbox, rCheckmarkContainerStyles]}
        >
          <Animated.View style={rCheckmarkStyles}>
            <Icon name="checkmark" size={size * 0.65} color={theme.info} />
          </Animated.View>
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
    alignItems: 'center',
    justifyContent: 'center',
  },
});
