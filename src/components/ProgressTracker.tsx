/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useRef} from 'react';
import {View, StyleSheet, Text, Animated, Easing} from 'react-native';
import RowText from './RowText';
import {colors} from '../util/Constants';
import {Days, TravelPlanType} from '../types/itenaryForm';
import {calculateTodaysProgress} from '../util/date';
import AnimatedCircle from './AnimatedCirlcle';
import AnimatedLine from './AnimatedLine';

type Props = {
  data: TravelPlanType;
  itemNo: number;
  day: Days;
  animationDone: Function;
  progressRate: number;
};

const ProgressTracker = (props: Props) => {
  const {itemNo, day, progressRate, animationDone} = props;
  const {startTime, endTime} = props.data;
  const animatedValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (day === Days.tomorrow) return;
    if (progressRate === itemNo) {
      const progress =
        day === Days.today ? calculateTodaysProgress(startTime, endTime) : 2;
      Animated.timing(animatedValue, {
        toValue: progress,
        duration: 1000,
        easing: Easing.linear,
        useNativeDriver: true,
      }).start(() => {
        animationDone();
      });
    }
  }, [progressRate]);

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.rowCenter}>
          <View style={styles.timeContainer}>
            <Text>{startTime}</Text>
          </View>
          <AnimatedCircle animatedValue={animatedValue} />
        </View>
        <AnimatedLine animatedValue={animatedValue} endTime={endTime} />
      </View>
      <View style={styles.rightView}>
        <RowText data={props.data} />
      </View>
    </View>
  );
};

export default ProgressTracker;

const styles = StyleSheet.create({
  container: {
    paddingLeft: 16,
    paddingRight: 26,
    flexDirection: 'row',
  },
  rowCenter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  timeContainer: {
    marginRight: 7,
    width: 50,
  },
  timeTxt: {
    fontWeight: '400',
    fontSize: 18,
    lineHeight: 27,
    color: colors.black,
  },
  rightView: {
    flex: 1,
    marginTop: -13,
  },
});
