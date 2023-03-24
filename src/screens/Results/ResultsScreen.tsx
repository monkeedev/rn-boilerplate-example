import { DefaultContainer, PageContainer } from '@components/containers';
import { DefaultList } from '@components/lists';
import { Subtitle } from '@components/texts';
import { getAnswers } from '@redux/rootSelectors';
import { useAppSelector } from '@redux/store';
import React, { useMemo } from 'react';

export const ResultsScreen = () => {
  const answers = useAppSelector(getAnswers);

  const results = useMemo(() => Object.keys(answers).map((a) => answers[a]), []);

  return (
    <PageContainer>
      <DefaultContainer>
        <Subtitle content="It is time for results!" />
        <DefaultList data={results} />
      </DefaultContainer>
    </PageContainer>
  );
};
