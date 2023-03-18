import { DefaultButton } from '@components/buttons';
import { DefaultContainer, PageContainer } from '@components/containers';
import { RadiobuttonGroup } from '@components/radiobuttons';
import { Paragraph, Subtitle } from '@components/texts';
import { MainNavigatorScreensParamList } from '@navigation/types';
import { NavigationProp, RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { getQuestions } from '@redux/rootSelectors';
import { useAppDispatch, useAppSelector } from '@redux/store';
import { parseString, shuffleArray } from '@utils/functions';
import React, { useMemo, useRef } from 'react';
import { StyleSheet } from 'react-native';

export const QuizScreen = () => {
  const { setParams } = useNavigation<NavigationProp<MainNavigatorScreensParamList, 'Quiz'>>();

  const dispatch = useAppDispatch();
  const questions = useAppSelector(getQuestions);

  const { params } = useRoute<RouteProp<MainNavigatorScreensParamList, 'Quiz'>>();
  const { question, id } = params;

  const answersRef = useRef();

  const options = useMemo(() => {
    return shuffleArray(
      [...question.incorrect_answers, question.correct_answer].map((a, k) => ({
        key: `Question_${id}_${k}`,
        title: a,
      }))
    );
  }, [id]);

  const chooseItem = (ids: any) => {
    answersRef.current = ids;

    // console.log(answersRef.current);
  };

  const proceedToTheNextQuestion = () => {
    if (id === questions.length - 1) {
      // redirect to results
    } else {
      setParams({ id: id + 1, question: questions[id + 1] });
    }
  };

  return (
    <PageContainer>
      <DefaultContainer style={styles.container}>
        <Subtitle content={parseString(params.question.question)} style={styles.header} />
        <RadiobuttonGroup
          data={options}
          onItemPress={chooseItem}
          withMultipleChoice={question.type === 'multiple'}
        />
        <DefaultButton onPress={proceedToTheNextQuestion}>
          <Paragraph content="Next" />
        </DefaultButton>
      </DefaultContainer>
    </PageContainer>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: { marginBottom: 24 },
});
