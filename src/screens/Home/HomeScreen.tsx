import { DefaultContainer } from '@components/containers';
import { Caption, Metadata, Paragraph, Subtitle, Title } from '@components/texts';
import React from 'react';

export const HomeScreen = () => {
  return (
    <DefaultContainer>
      <Title />
      <Subtitle />
      <Paragraph />
      <Caption />
      <Metadata />
    </DefaultContainer>
  );
};
