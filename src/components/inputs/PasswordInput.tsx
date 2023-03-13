import { useTheme } from '@hooks';
import React, { useRef, useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { DefaultInput } from '.';
import { InputHandlers, InputProps } from './types';

export const PasswordInput: React.FC<InputProps> = (props) => {
  const { theme } = useTheme();
  const inputRef = useRef<InputHandlers>();
  const valueRef = useRef('');

  const [isVisible, setIsVisible] = useState(false);

  const handleInputRef = (input: string) => {
    valueRef.current = input;
    props.onChangeText(valueRef.current);
  };

  const handlePasswordToggle = () => {
    setIsVisible((prev) => !prev);
    inputRef.current?.togglePassword();
  };

  return (
    <DefaultInput
      {...props}
      ref={inputRef}
      onChangeText={handleInputRef}
      type={'password'}
      RightIconComponent={
        <Icon
          name={isVisible ? 'eye-off-outline' : 'eye-outline'}
          size={24}
          color={theme.textPrimary}
          onPress={handlePasswordToggle}
        />
      }
    />
  );
};
