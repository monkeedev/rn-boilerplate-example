import { defaultColors, sizes } from '@theme';
import React, { ForwardedRef, useCallback, useImperativeHandle, useState } from 'react';
import { StyleSheet, Text, TouchableWithoutFeedback } from 'react-native';
import Animated, {
  interpolate,
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSequence,
  withTiming,
} from 'react-native-reanimated';
import {
  NotificationColors,
  NotificationHandlers,
  NotificationState,
  NotificationTypes,
} from './types';

interface Props {
  onOpen?: () => void;
  onHide?: () => void;
  ref?: React.ForwardedRef<NotificationHandlers>;
  forwardedRef?: React.ForwardedRef<NotificationHandlers>;
}

const HEIGHT = 92;
const DURATION = 250;

const Component: React.FC<Props> = ({ onOpen, onHide, forwardedRef }) => {
  const isOpened = useSharedValue(0);

  const [notification, setNotification] = useState<NotificationState>({
    message: '',
    type: 'info',
  });

  const changeContent = useCallback((message: string, type: NotificationTypes) => {
    setNotification({ message, type });
    if (onOpen) onOpen();

    isOpened.value = withSequence(
      withTiming(1, { duration: DURATION }),
      withDelay(2000, withTiming(0, { duration: DURATION }))
    );

    if (onHide) setTimeout(hideNotification, 2000 + DURATION);
  }, []);

  useImperativeHandle(
    forwardedRef,
    () => ({
      open: (message: string, type = 'info') => {
        if (isOpened.value === 1) {
          hideNotification();
          setTimeout(() => changeContent(message, type), DURATION);
        } else {
          changeContent(message, type);
        }
      },
    }),
    []
  );

  const rStyles = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      isOpened.value,
      [0, 1],
      ['transparent', NotificationColors[notification.type]]
    );

    const translateY = interpolate(isOpened.value, [0, 1], [-HEIGHT, 0]);

    return { backgroundColor, transform: [{ translateY }] };
  }, [notification.type]);

  const hideNotification = () => {
    if (onHide) onHide();

    isOpened.value = withTiming(0, { duration: DURATION });
  };

  return (
    <TouchableWithoutFeedback onPress={hideNotification}>
      <Animated.View style={[styles.container, rStyles]}>
        <Text style={styles.text}>{notification.message}</Text>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

export const Notification: React.FC<Props> = React.forwardRef(
  (props, ref: ForwardedRef<NotificationHandlers>) => {
    return <Component {...props} forwardedRef={ref} />;
  }
);

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: '100%',
    height: HEIGHT,
    top: 0,
    left: 0,
    paddingHorizontal: 16,
    paddingBottom: 10,
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    zIndex: 1,
  },
  text: {
    fontSize: sizes.r,
    letterSpacing: 0.4,
    lineHeight: sizes.r * 1.25,
    fontWeight: '500',
    color: defaultColors.white,
  },
});
