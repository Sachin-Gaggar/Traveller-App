import React from 'react';
import {View, StyleSheet, Text, useWindowDimensions} from 'react-native';
import {colors} from '../../util/Constants';
import {Strings} from '../../util/String';
import HeaderComponent from '../../components/HeaderComponent';
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';
import ItenaryForm from './ItenaryForm';

const Guide = props => {
  return (
    <>
      <HeaderComponent title={Strings.itenaryForm} />
      <View style={styles.container}>
        <ItenaryForm intialTabName={props?.route?.params?.tabName} />
      </View>
    </>
  );
};
export default Guide;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingBottom: 80, //tab Height
  },
  headingTxt: {
    color: colors.silver,
    fontSize: 36,
    lineHeight: 54,
    textAlign: 'center',
  },
});
