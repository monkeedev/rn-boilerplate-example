import { PageContainer } from '@components/containers';
import { DefaultInput, EmailInput, PasswordInput } from '@components/inputs';
import { InputHandlers } from '@components/inputs/types';
import React from 'react';

const ref = React.createRef<InputHandlers>();

export const HomeScreen = () => {
  return (
    <PageContainer>
      <EmailInput onChangeText={(v) => console.log('email', v)} />
      <PasswordInput onChangeText={(v) => console.log('password', v)} />
      <DefaultInput onChangeText={(v) => console.log('default', v)} ref={ref} />
    </PageContainer>
  );
};
