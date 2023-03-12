import { RowContainer } from '@components/containers';
import { Caption } from '@components/texts';
import { useTheme } from '@hooks';
import { sizes } from '@theme';
import React, { ForwardedRef, useImperativeHandle, useRef, useState } from 'react';
import {
  LayoutChangeEvent,
  NativeSyntheticEvent,
  StyleSheet,
  TextInput,
  TextInputFocusEventData,
  View,
} from 'react-native';
import { InputHandlers, InputProps, KeyboardTypeEnum } from './types';

const Component: React.FC<InputProps> = (props) => {
  const inputRef = useRef<TextInput>();
  const timerRef = useRef<NodeJS.Timer>();
  const valueRef = useRef('');
  const { theme } = useTheme();

  const [leftIconWidth, setLeftIconWidth] = useState(0);
  const [rightIconWidth, setRightIconWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [error, setError] = useState<string | null>(null);

  const localStyles = {
    container: {
      borderColor: theme.border,
      color: theme.textPrimary,
      opacity: props.isDisabled ? 0.5 : 1,
      paddingLeft: props.LeftIconComponent ? leftIconWidth + 4 : 0,
      paddingRight: props.RightIconComponent ? rightIconWidth + 4 : 0,
    },
    icon: {
      top: -height / 4,
    },
  };

  const handleIconLayout = (e: LayoutChangeEvent, position: 'left' | 'right') => {
    const { width, height } = e.nativeEvent.layout;

    if (position === 'left') {
      setLeftIconWidth(width);
    } else {
      setRightIconWidth(width);
    }

    setHeight(height);
  };

  const handleBlur = (input: NativeSyntheticEvent<TextInputFocusEventData>) => {
    if (props.onBlur) props.onBlur(input.nativeEvent.text);
  };

  const handleInput = (input: string) => {
    valueRef.current = input;
    props.onChangeText(valueRef.current);

    setError('');
    clearTimeout(timerRef.current);
  };

  useImperativeHandle(
    props.forwardedRef,
    () => ({
      clear: () => {
        valueRef.current = '';
        props.onChangeText(valueRef.current);
        inputRef.current?.clear();
      },
      showError: (error: string) => {
        setError(error);

        timerRef.current = setTimeout(() => {
          setError('');
        }, 3000);
      },
    }),
    []
  );

  return (
    <View>
      <RowContainer style={styles.container}>
        {props.LeftIconComponent ? (
          <RowContainer
            style={[styles.icon, styles.leftIcon, localStyles.icon]}
            onLayout={(e) => handleIconLayout(e, 'left')}
          >
            {props.LeftIconComponent}
          </RowContainer>
        ) : (
          <></>
        )}
        <TextInput
          pointerEvents={props.isDisabled ? 'none' : 'auto'}
          style={[styles.inner, localStyles.container]}
          spellCheck={false}
          autoCorrect={false}
          placeholder={props.placeholder}
          defaultValue={props.defaultValue}
          onChangeText={handleInput}
          onBlur={handleBlur}
          multiline={props.withMultiline}
          maxLength={props.maxSymbols}
          keyboardType={KeyboardTypeEnum[props.type ?? 'default']}
          secureTextEntry={props.type === 'password'}
          ref={inputRef}
        />
        {props.RightIconComponent ? (
          <RowContainer
            style={[styles.icon, styles.rightIcon, localStyles.icon]}
            onLayout={(e) => handleIconLayout(e, 'right')}
          >
            {props.RightIconComponent}
          </RowContainer>
        ) : (
          <></>
        )}
      </RowContainer>
      {error && <Caption content={error} style={{ color: theme.error }} />}
    </View>
  );
};

export const DefaultInput: React.FC<InputProps> = React.forwardRef(
  (props, ref: ForwardedRef<InputHandlers>) => <Component {...props} forwardedRef={ref} />
);

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  inner: {
    paddingVertical: 4,
    borderBottomWidth: 1,
    fontSize: sizes.r,
    letterSpacing: 0.4,
    lineHeight: sizes.r * 1.25,
    flex: 1,
  },
  icon: {
    position: 'absolute',
  },
  leftIcon: {
    left: 0,
  },
  rightIcon: {
    right: 0,
  },
});
