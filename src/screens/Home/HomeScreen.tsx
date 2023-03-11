import { PageContainer } from '@components/containers';
import { DefaultInput } from '@components/inputs';
import React from 'react';

export const HomeScreen = () => {
  return (
    <PageContainer>
      <DefaultInput onChangeText={(v) => console.log(v)} />
    </PageContainer>
  );
};
