import { useTheme } from '@hooks';
import { sizes } from '@theme';
import { defaultSpringConfig } from '@utils';
import React, { useState } from 'react';
import { FlatList, Pressable, StyleSheet, View } from 'react-native';
import Animated, {
  interpolateColor,
  useAnimatedReaction,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import { RadiobuttonDataItem, RadiobuttonGroupProps } from './types';

const Separator = () => <View style={styles.itemSeparator} />;

const Item: React.FC<RadiobuttonDataItem> = ({ title, onPress, isChecked }) => {
  const { theme } = useTheme();

  const rIsChecked = useSharedValue(0);

  const rContainerStyles = useAnimatedStyle(() => ({
    backgroundColor: interpolateColor(rIsChecked.value, [0, 1], [theme.border, theme.secondary]),
  }));

  const localStyles = {
    text: { color: theme.textPrimary },
  };

  useAnimatedReaction(
    () => isChecked,
    () => {
      rIsChecked.value = withSpring(+isChecked, defaultSpringConfig);
    },
    [isChecked]
  );

  return (
    <Pressable onPress={onPress}>
      <Animated.View style={[styles.itemContainer, rContainerStyles]}>
        <Animated.Text style={[styles.itemText, localStyles.text]}>{title}</Animated.Text>
      </Animated.View>
    </Pressable>
  );
};

export const RadiobuttonGroup: React.FC<RadiobuttonGroupProps> = ({
  data,
  withMultipleChoice,
  onItemPress,
}) => {
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  const handleOnPress = (id: string) => {
    let data: string[] = [];

    if (!withMultipleChoice) {
      if (selectedIds.includes(id)) {
        data = [];
      } else {
        data = [id];
      }
    } else {
      if (selectedIds.includes(id)) {
        data = selectedIds.filter((i) => i !== id);
      } else {
        data = [...selectedIds, id];
      }
    }

    setSelectedIds(data);
    onItemPress(data);
  };

  return (
    <FlatList
      data={data}
      renderItem={({ item }) => (
        <Item
          title={item.title}
          isChecked={selectedIds.includes(item.key)}
          onPress={() => handleOnPress(item.key)}
        />
      )}
      keyExtractor={(item) => item.key}
      ItemSeparatorComponent={Separator}
      scrollEnabled={false}
    />
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    paddingVertical: 16,
    paddingHorizontal: 12,
    alignItems: 'center',
    borderRadius: 4,
    flexGrow: 1,
    flexShrink: 1,
    minHeight: 52,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  itemSeparator: {
    height: 8,
  },
  itemText: {
    fontSize: sizes.r,
    letterSpacing: 0.4,
    lineHeight: sizes.r * 1.25,
    flexShrink: 1,
    fontWeight: '500',
  },
});
