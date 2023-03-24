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
import { ListItem, ListProps } from './types';

const Separator = () => <View style={styles.itemSeparator} />;

const Item: React.FC<ListItem> = ({ question, usersAnswer, correct }) => {
  return (
    <View style={styles.itemContainer}>
      <Paragraph content={question} />
      <Caption content={`Correct: ${correct}`} />
      <Caption content={`Your answer: ${usersAnswer}`} />
    </View>
  );
};

export const DefaultList: React.FC<ListProps> = ({ data }) => {
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

  const exit = async () => {
    navigate('Home', {});
  };

  return (
    <FlatList
      data={data}
      renderItem={({ item }) => <Item {...item} />}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={Separator}
      showsVerticalScrollIndicator={false}
      ListFooterComponent={
        <RowContainer>
          <DefaultButton onPress={restart}>
            <Paragraph content="Restart" />
          </DefaultButton>
          <View style={styles.buttonSeparator} />
          <DefaultButton onPress={exit} containerStyles={styles.exitButton}>
            <Paragraph content="Go home" />
          </DefaultButton>
        </RowContainer>
      }
      ListFooterComponentStyle={styles.footerContainer}
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
});
