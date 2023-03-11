import { useTheme } from '@hooks';
import { sizes } from '@theme';
import React, { useRef } from 'react';
import { StyleSheet, TextInput } from 'react-native';
import { InputProps, KeyboardTypeEnum } from './types';

export const DefaultInput: React.FC<InputProps> = ({
  onChangeText,
  placeholder,
  defaultValue,
  type = 'password',
  withMultiline,
  maxSymbols,
  isDisabled,
}) => {
  const valueRef = useRef('');
  const { theme } = useTheme();

  const localStyles = {
    container: {
      borderColor: theme.border,
      color: theme.textPrimary,
      opacity: isDisabled ? 0.5 : 1,
    },
  };

  const handleInput = (input: string) => {
    valueRef.current = input;
    onChangeText(valueRef.current);
  };

  return (
    <TextInput
      pointerEvents={isDisabled ? 'none' : 'auto'}
      style={[styles.container, localStyles.container]}
      spellCheck={false}
      autoCorrect={false}
      placeholder={placeholder}
      defaultValue={defaultValue}
      onChangeText={handleInput}
      multiline={withMultiline}
      maxLength={maxSymbols}
      keyboardType={KeyboardTypeEnum[type ?? 'default']}
      secureTextEntry={type === 'password'}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 4,
    borderBottomWidth: 1,
    fontSize: sizes.r,
    letterSpacing: 0.4,
    lineHeight: sizes.r * 1.25,
  },
});
