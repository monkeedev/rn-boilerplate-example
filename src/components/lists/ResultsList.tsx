import { DefaultButton } from '@components/buttons';
import { RowContainer } from '@components/containers';
import { Caption, Paragraph } from '@components/texts';
import { MainNavigatorScreensParamList } from '@navigation/types';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { fetchQuestions } from '@redux/quiz/actions';
import { useAppDispatch } from '@redux/store';
import { notifications } from '@theme';
import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ListItem, ListProps } from './types';

const Separator = () => <View style={styles.itemSeparator} />;

const ANSWER_ICON = {
  true: { name: 'check', color: notifications.success },
  false: { name: 'remove', color: notifications.error },
};

const Item: React.FC<ListItem> = ({ question, usersAnswer, correct }) => {
  const isCorrect = usersAnswer === correct;

  return (
    <View style={styles.itemContainer}>
      <Paragraph content={question} />
      <RowContainer style={styles.itemInnerContainer}>
        <View>
          <Caption content={`Correct: ${correct}`} />
          <Caption content={`Your answer: ${usersAnswer}`} />
        </View>
        <Icon {...ANSWER_ICON[`${isCorrect}`]} size={24} />
      </RowContainer>
    </View>
  );
};

export const ResultsList: React.FC<ListProps> = ({ data }) => {
  const { navigate, reset } =
    useNavigation<NavigationProp<MainNavigatorScreensParamList, 'Results'>>();

  const dispatch = useAppDispatch();

  const restart = async () => {
    await dispatch(fetchQuestions());
    reset({
      index: 0,
      routes: [{ name: 'Home' }],
    });
  };

  const exit = async () => navigate('Home', {});

  const FooterComponent = () => (
    <RowContainer>
      <DefaultButton onPress={restart}>
        <Paragraph content="Restart" />
      </DefaultButton>
      <View style={styles.buttonSeparator} />
      <DefaultButton onPress={exit} containerStyles={styles.exitButton}>
        <Paragraph content="Go home" />
      </DefaultButton>
    </RowContainer>
  );

  return (
    <FlatList
      data={data}
      renderItem={({ item }) => <Item {...item} />}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={Separator}
      showsVerticalScrollIndicator={false}
      ListFooterComponentStyle={styles.footerContainer}
      ListFooterComponent={FooterComponent}
    />
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    paddingVertical: 16,
    borderRadius: 4,
    flexGrow: 1,
    flexShrink: 1,
  },
  itemSeparator: {
    height: 8,
  },
  footerContainer: {
    marginVertical: 32,
  },
  buttonSeparator: {
    width: 8,
  },
  exitButton: {
    backgroundColor: notifications.error,
  },
  itemInnerContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
