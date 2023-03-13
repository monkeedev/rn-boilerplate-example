import React from 'react';

type InputTypes = 'default' | 'email' | 'password' | 'phone' | 'numeric';

export enum KeyboardTypeEnum {
  default = 'default',
  email = 'email-address',
  password = 'default',
  phone = 'phone-pad',
  numeric = 'numeric',
}

export type InputHandlers = {
  clear: () => void;
  showError: (error: string) => void;
  togglePassword: () => void;
};

export type InputProps = {
  onChangeText: (input: string) => void;
  onBlur?: (input: string) => void;
  placeholder?: string;
  defaultValue?: string;
  type?: InputTypes;
  isDisabled?: boolean;
  maxSymbols?: number;
  withMultiline?: boolean;
  withErrorMessage?: boolean;
  LeftIconComponent?: React.ReactElement;
  RightIconComponent?: React.ReactElement;
  ref?: React.ForwardedRef<InputHandlers>;
  forwardedRef?: React.ForwardedRef<InputHandlers>;
};
