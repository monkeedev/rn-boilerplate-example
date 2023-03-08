import { DefaultButton } from '@components/buttons';
import { DefaultContainer, PageContainer, RowContainer } from '@components/containers';
import { Caption, Metadata, Paragraph, Subtitle, Title } from '@components/texts';
import { useTheme } from '@hooks';
import { sizes } from '@theme';
import { notificationRef } from '@utils';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Separator = () => <View style={styles.separator} />;

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
            <Caption style={[styles.text, { color: theme.primary }]} content="Default button" />
          </DefaultButton>
          <Separator />
          <DefaultButton onPress={() => console.log('press')}>
            <Caption style={[styles.text, { color: theme.primary }]} content="Default button" />
          </DefaultButton>
          <Separator />
          <DefaultButton onPress={() => console.log('press')}>
            <Caption style={[styles.text, { color: theme.primary }]} content="Default button" />
          </DefaultButton>
        </RowContainer>
      </DefaultContainer>
    </PageContainer>
  );
};

const styles = StyleSheet.create({
  text: {
    marginBottom: 0,
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
