import { useTheme } from '@hooks';
import { MainNavigatorScreensParamList } from '@navigation/types';
import { NavigationProp, RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { getQuestions } from '@redux/rootSelectors';
import { useAppSelector } from '@redux/store';
import React from 'react';
import { Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

interface Props {
  id: number;
}

export const BackButton: React.FC<Props> = ({ id }) => {
  const { theme } = useTheme();
  const questions = useAppSelector(getQuestions);

  const { goBack, setParams } =
    useNavigation<NavigationProp<MainNavigatorScreensParamList, 'Quiz'>>();
  const { params } = useRoute<RouteProp<MainNavigatorScreensParamList, 'Quiz'>>();

  const handleGoBack = () => {
    if (id === 0) goBack();
    else setParams({ id: params.id - 1, question: questions[id - 1] });
  };

  return (
    <Pressable onPress={handleGoBack}>
      <Icon name="arrow-left" color={theme.textPrimary} size={18} />
    </Pressable>
  );
};
