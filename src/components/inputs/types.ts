import React from 'react';

type InputTypes = 'default' | 'email' | 'password' | 'phone' | 'numeric';
// default - numeric - email-address - phone-pad

export enum KeyboardTypeEnum {
  default = 'default',
  email = 'email-address',
  password = 'default',
  phone = 'phone-pad',
  numeric = 'numeric',
}

export type InputProps = {
  onChangeText: (input: string) => void;
  placeholder?: string;
  defaultValue?: string;
  type?: InputTypes;
  withMultiline?: boolean;
  isDisabled?: boolean;
  maxSymbols?: number;
  LeftIconComponent?: React.ReactElement;
  RightIconComponent?: React.ReactElement;
};
