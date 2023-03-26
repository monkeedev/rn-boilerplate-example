import { Title } from '@components/texts';
import { getAnswers } from '@redux/rootSelectors';
import { useAppSelector } from '@redux/store';
import { notifications, sizes } from '@theme';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Animated, { useAnimatedProps, useSharedValue, withSpring } from 'react-native-reanimated';
import Svg, { Circle } from 'react-native-svg';

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

const SIZE = 30;

export const ProgressBar = () => {
  const answers = useAppSelector(getAnswers);
  const count = useMemo(() => Object.keys(answers).length, [answers]);

  const [length, setLength] = useState(0);
  const ref = useRef<typeof AnimatedCircle>();

  const progress = useSharedValue(0);

  const animatedProps = useAnimatedProps(() => ({
    strokeDashoffset: length - length * (progress.value / 100),
  }));

  useEffect(() => {
    progress.value = withSpring(100 * (count / 10));
  }, [count]);

  return (
    <View style={styles.container}>
      <Svg
        viewBox="0 0 30 30"
        width={SIZE}
        height={SIZE}
        onLayout={() => setLength(ref.current.getTotalLength())}
        style={styles.circle}
      >
        <AnimatedCircle
          ref={ref}
          animatedProps={animatedProps}
          stroke={notifications.success}
          strokeDasharray={length}
          strokeWidth={2}
          r={SIZE / 2 - 1}
          cx={SIZE / 2}
          cy={SIZE / 2}
          fillOpacity={0}
        />
      </Svg>
      <View style={styles.questionContainer}>
        <Title content={`${count}`} style={styles.questionNumber} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  circle: { transform: [{ rotateZ: '-90deg' }] },
  questionNumber: {
    fontSize: sizes.s,
    lineHeight: undefined,
  },
  questionContainer: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: SIZE,
    height: SIZE,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
