/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, StyleSheet, Text, Animated} from 'react-native';
import {colors} from '../util/Constants';

type Props = {
  animatedValue: Animated.Value;
  endTime?: string;
};
const AnimatedLine = (props: Props) => {
  const {animatedValue, endTime} = props;
  return (
    <>
      {Boolean(endTime) && <View style={styles.verticalLine} />}
      {Boolean(endTime) && (
        <View style={styles.animatedLineContainer}>
          <Animated.View
            style={[
              styles.superImposeVerticalLine,
              {
                transform: [
                  {
                    scaleY: animatedValue.interpolate({
                      inputRange: [1, 2],
                      outputRange: [0, 1],
                      extrapolate: 'clamp',
                    }),
                  },
                ],
                transformOrigin: 'top',
              },
            ]}
          />
        </View>
      )}
    </>
  );
};
export default React.memo(
  AnimatedLine,
  (prevProp, nextProp) => prevProp.animatedValue === nextProp.animatedValue,
);
const styles = StyleSheet.create({
  container: {},
  animatedLineContainer: {
    height: 66,
    overflow: 'hidden',
    position: 'absolute',
    top: 26,
    left: 56 + 13,
  },
  superImposeVerticalLine: {
    height: 66,
    width: 2,
    backgroundColor: colors.azureBlue,
  },
  verticalLine: {
    height: 66,
    width: 2,
    backgroundColor: colors.c4,
    left: 56 + 13,
  },
});
