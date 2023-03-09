import { DefaultButton } from '@components/buttons';
import { DefaultCheckbox, SwitcherCheckbox } from '@components/checkboxes';
import { DefaultContainer, PageContainer, RowContainer } from '@components/containers';
import { RadiobuttonGroup } from '@components/radiobuttons';
import { Caption, Metadata, Paragraph, Subtitle, Title } from '@components/texts';
import { useTheme } from '@hooks/index';
import { sizes } from '@theme/typography';
import { notificationRef } from '@utils/constants';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Separator = () => <View style={styles.separator} />;

const RADIOBUTTON_GROUP_DATA = [
  {
    key: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    key: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    key: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

export const HomeScreen = () => {
  const { theme } = useTheme();

  return (
    <PageContainer>
      <DefaultContainer>
        <Title />
        <Subtitle />
        <Paragraph />
        <Caption />
        <Metadata />
      </DefaultContainer>

      {/* buttons */}
      <DefaultContainer>
        <DefaultButton onPress={() => notificationRef.current?.open('Notification called', 'info')}>
          <Caption style={[styles.text, { color: theme.primary }]} content="Call notification" />
        </DefaultButton>

        <RowContainer style={styles.buttonsRowContainer}>
          <DefaultButton onPress={() => console.log('press')}>
            <Icon name="aperture-sharp" size={sizes.r} color={theme.primary} />

            <Caption style={[styles.text, { color: theme.primary }]} content="Default button" />
          </DefaultButton>
          <Separator />
          <DefaultButton onPress={() => console.log('press')}>
            <Icon name="aperture-sharp" size={sizes.r} color={theme.primary} />

            <Caption style={[styles.text, { color: theme.primary }]} content="Default button" />
          </DefaultButton>
        </RowContainer>

        <RowContainer style={styles.buttonsRowContainer}>
          <DefaultButton onPress={() => console.log('press')}>
            <Caption
              singleLine
              style={[styles.text, { color: theme.primary }]}
              content="Default button"
            />
          </DefaultButton>
          <Separator />
          <DefaultButton onPress={() => console.log('press')}>
            <Caption
              singleLine
              style={[styles.text, { color: theme.primary }]}
              content="Default button"
            />
          </DefaultButton>
          <Separator />
          <DefaultButton onPress={() => console.log('press')}>
            <Caption
              singleLine
              style={[styles.text, { color: theme.primary }]}
              content="Default button"
            />
          </DefaultButton>
        </RowContainer>
      </DefaultContainer>

      {/* checkboxes */}
      <DefaultCheckbox label="Checkbox" onPress={() => console.log('foo')} />
      <SwitcherCheckbox label="Checkbox" onPress={() => console.log('foo')} />

      {/* radiobuttons */}
      <RadiobuttonGroup
        data={RADIOBUTTON_GROUP_DATA}
        onItemPress={(id: string[]) => console.log(id)}
      />
    </PageContainer>
  );
};

const styles = StyleSheet.create({
  text: {
    fontWeight: '600',
  },
  buttonsRowContainer: {
    justifyContent: 'space-between',
    flexWrap: 'nowrap',
    marginTop: 8,
    marginBottom: 0,
  },
  separator: { width: 8 },
});
