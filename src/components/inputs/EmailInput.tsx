import React, { useRef } from 'react';
import { DefaultInput } from '.';
import { validateEmail } from './helpers';
import { InputHandlers, InputProps } from './types';

export const EmailInput: React.FC<InputProps> = (props) => {
  const inputRef = useRef<InputHandlers>();
  const valueRef = useRef('');

  const handleInputRef = (input: string) => {
    valueRef.current = input;
    props.onChangeText(valueRef.current);
  };

  const handleValidate = (input: string) => {
    const isValid = validateEmail(input);
    !isValid ? inputRef.current?.showError('not valid') : null;
  };

  return (
    <DefaultInput
      {...props}
      ref={inputRef}
      onChangeText={handleInputRef}
      onBlur={handleValidate}
      type={'email'}
    />
  );
};
