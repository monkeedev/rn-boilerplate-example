import { PageContainer } from '@components/containers';
import { DefaultInput } from '@components/inputs';
import { EmailInput } from '@components/inputs/EmailInput';
import { InputHandlers } from '@components/inputs/types';
import React from 'react';

const ref = React.createRef<InputHandlers>();

export const HomeScreen = () => {
  return (
    <PageContainer>
      <EmailInput onChangeText={(v) => console.log('email', v)} />
      <DefaultInput onChangeText={(v) => console.log(v)} ref={ref} />
    </PageContainer>
  );
};
