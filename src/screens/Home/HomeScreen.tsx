import { DefaultButton } from '@components/buttons';
import { PageContainer } from '@components/containers';
import { Caption, Paragraph, Title } from '@components/texts';
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

  if (error)
    return (
      <PageContainer style={styles.pageContainer}>
        <Paragraph content={error} />
      </PageContainer>
    );

  return (
    <PageContainer style={styles.pageContainer}>
      <Title content="Quiz game" />
      <Caption
        content="You will fetch 10 questions about anything and in the end you'll receive your results"
        style={styles.description}
      />
      <DefaultButton onPress={handleRequest} isDisabled={isLoading}>
        <Caption content="Let's start 🙌" />
      </DefaultButton>
    </PageContainer>
  );
};

const styles = StyleSheet.create({
  pageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  description: {
    textAlign: 'center',
    marginTop: 16,
    marginBottom: 32,
  },
});
