import { DefaultButton } from '@components/buttons';
import { PageContainer } from '@components/containers';
import { Caption } from '@components/texts';
import axios from 'axios';
import React from 'react';
import { StyleSheet } from 'react-native';

const URL = 'https://opentdb.com/api.php?amount=10';

export const HomeScreen = () => {
  const handleRequest = async () => {
    const res = await axios.get(URL);

    console.log(res.data);
  };
  return (
    <PageContainer style={styles.pageContainer}>
      <DefaultButton onPress={handleRequest}>
        <Caption content="Generate questions" />
      </DefaultButton>
    </PageContainer>
  );
};

const styles = StyleSheet.create({
  pageContainer: {
    justifyContent: 'flex-end',
  },
});
