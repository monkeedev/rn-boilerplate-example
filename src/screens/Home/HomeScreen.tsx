import { DefaultButton } from '@components/buttons';
import { PageContainer } from '@components/containers';
import { Caption, Paragraph } from '@components/texts';
import { MainNavigatorScreensParamList } from '@navigation/types';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { fetchQuestions } from '@redux/quiz/actions';
import {
  getQuestions,
  getQuestionsFetchError,
  getQuestionsFetchStatus,
} from '@redux/rootSelectors';
import { useAppDispatch, useAppSelector } from '@redux/store';
import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';

export const HomeScreen = () => {
  const { navigate } = useNavigation<NavigationProp<MainNavigatorScreensParamList, 'Quiz'>>();
  const dispatch = useAppDispatch();

  const isLoading = useAppSelector(getQuestionsFetchStatus);
  const error = useAppSelector(getQuestionsFetchError);
  const questions = useAppSelector(getQuestions);

  const handleRequest = () => {
    dispatch(fetchQuestions());
  };

  useEffect(() => {
    if (questions.length > 0) {
      navigate('Quiz', { id: 0, question: questions[0] });
    }
  }, [questions]);

  return (
    <PageContainer style={styles.pageContainer}>
      {error && <Paragraph content={error} />}
      <DefaultButton onPress={handleRequest} isDisabled={isLoading}>
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
