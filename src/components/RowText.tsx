import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {TravelPlanType} from '../types/itenaryForm';
import {Images} from '../util/imagePath';
import {colors} from '../util/Constants';

type Props = {
  data: TravelPlanType;
};
const RowText = (props: Props) => {
  const {place, description, image} = props?.data;
  const SVG = Images[image];
  return (
    <View style={styles.container}>
      <View>
        <Text numberOfLines={1} style={styles.boldText}>
          {place}
        </Text>
        <Text numberOfLines={1} style={styles.fadedText}>
          {description}
        </Text>
      </View>
      <SVG />
    </View>
  );
};
export default React.memo(RowText, () => true);
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  boldText: {
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 24,
    color: colors.black,
  },
  fadedText: {
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 24,
    color: colors.greyishSilver,
  },
});
