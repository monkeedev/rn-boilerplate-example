import { DefaultButton } from '@components/buttons';
import { DefaultContainer, PageContainer } from '@components/containers';
import { RadiobuttonGroup } from '@components/radiobuttons';
import { Paragraph, Subtitle } from '@components/texts';
import { MainNavigatorScreensParamList } from '@navigation/types';
import { NavigationProp, RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { quizSlice } from '@redux/quiz/slice';
import { getAnswers, getQuestions } from '@redux/rootSelectors';
import { useAppDispatch, useAppSelector } from '@redux/store';
import { Answer } from '@utils';
import { parseString, shuffleArray } from '@utils/functions';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { StyleSheet } from 'react-native';

export const QuizScreen = () => {
  const dispatch = useAppDispatch();
  const questions = useAppSelector(getQuestions);
  const answers = useAppSelector(getAnswers);

  const { setParams, navigate } =
    useNavigation<NavigationProp<MainNavigatorScreensParamList, 'Quiz'>>();
  const { params } = useRoute<RouteProp<MainNavigatorScreensParamList, 'Quiz'>>();
  const { question, id } = params;

  const [userDidSelectSomething, setUserDidSelectSomething] = useState(false);

  const answersRef = useRef<string[]>([]);
  const questionsRef = useRef(new Map());

  const options = useMemo(() => {
    const arr = [...(question.incorrect_answers ?? []), question.correct_answer].map((a, k) => ({
      key: `Question_${id}_${k}`,
      title: parseString(a),
    }));

    arr.forEach((i) => {
      questionsRef.current.set(i.key, i.title);
    });

    return shuffleArray(arr);
  }, [id]);

  const chooseItem = (ids: string[]) => {
    answersRef.current = ids;
    setUserDidSelectSomething(ids.length !== 0);
  };

  const proceedToTheNextQuestion = () => {
    setUserDidSelectSomething(false);

    // transform user's answer id to text answer
    if (answersRef.current?.length > 0) {
      const usersAnswer: Answer = answersRef.current
        .map((a) => questionsRef.current.get(a))
        .map((i) => ({
          id: `Question_${id}`,
          question: parseString(params.question.question),
          correct: parseString(question.correct_answer),
          usersAnswer: i,
        }))[0];

      dispatch(quizSlice.actions.addToAnswers(usersAnswer));
      answersRef.current = [];
    }

    if (id === questions.length - 1) navigate('Results', {});
    else setParams({ id: id + 1, question: questions[id + 1] });
  };

  useEffect(() => {
    if (params.id < Object.keys(answers).length) {
      const answer = answers[`Question_${params.id}`];
      const previouslyChosenId = options.find((i) => i.title === answer.usersAnswer).key;
      chooseItem(previouslyChosenId);
    }
  }, [id, answers]);

  return (
    <PageContainer>
      <DefaultContainer style={styles.container}>
        <Subtitle content={parseString(params.question.question)} style={styles.header} />
        <RadiobuttonGroup data={options} onItemPress={chooseItem} />
        <DefaultButton onPress={proceedToTheNextQuestion} isDisabled={!userDidSelectSomething}>
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
