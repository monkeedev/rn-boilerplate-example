import { PageContainer } from '@components/containers';
import { Paragraph, Title } from '@components/texts';
import { projectName } from '@utils';
import React, { useEffect } from 'react';
import { Image, StyleSheet } from 'react-native';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';

export const ExampleScreen = () => {
  const rotation = useSharedValue(0);

  const rStyle = useAnimatedStyle(() => ({
    transform: [{ rotateZ: `${rotation.value}deg` }],
  }));

  useEffect(() => {
    rotation.value = withRepeat(withTiming(60, { duration: 5000, easing: Easing.linear }), -1);

    return () => {
      rotation.value = 0;
    };
  }, []);

  return (
    <PageContainer style={styles.page}>
      <Animated.View style={[rStyle, styles.imageContainer]}>
        <Image style={styles.image} source={require('@assets/images/react-icon.png')} />
      </Animated.View>
      <Title content={projectName} style={styles.title} />
      <Paragraph content={'Start your experiments from here!'} style={styles.textContainer} />
    </PageContainer>
  );
};

const styles = StyleSheet.create({
  page: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    marginTop: 10,
  },
  title: {
    textAlign: 'center',
  },
  image: { width: 230, height: 200 },
  imageContainer: {
    marginBottom: 32,
  },
});
