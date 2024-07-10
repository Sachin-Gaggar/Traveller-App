import React from 'react';
import {View, StyleSheet, Text, Animated} from 'react-native';
import {colors} from '../util/Constants';
import Pin from '../assets/svgs/pin.svg';

type Props = {
  animatedValue: Animated.Value;
};
const AnimatedCircle = (props: Props) => {
  const {animatedValue} = props;
  return (
    <View style={[styles.circle, {backgroundColor: colors.whiteSmoke}]}>
      <Animated.View
        style={[
          styles.circle,
          styles.superImposeCircle,
          {
            transform: [
              {
                scale: animatedValue.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 1],
                  extrapolate: 'clamp',
                }),
              },
            ],
          },
        ]}>
        <Pin />
      </Animated.View>
    </View>
  );
};
export default AnimatedCircle;
const styles = StyleSheet.create({
  container: {},
  circle: {
    height: 26,
    width: 26,
    borderRadius: 13,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 19,
    borderWidth: 4,
    borderColor: colors.c4,
  },
  superImposeCircle: {
    borderColor: colors.azureBlue,
    backgroundColor: colors.azureBlue,
    position: 'absolute',
    transform: [{scale: 0}],
  },
});
