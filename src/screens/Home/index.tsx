import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {colors} from '../../util/Constants';
import {Strings} from '../../util/String';

type Props = {};
const Home = (props: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headingTxt}>{Strings.homePage}</Text>
    </View>
  );
};
export default Home;
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.whiteSmoke,
    flex: 1,
    justifyContent: 'center',
  },
  headingTxt: {
    color: colors.silver,
    fontSize: 36,
    lineHeight: 54,
    textAlign: 'center',
  },
});
