import React from 'react';
import {View, StyleSheet, Text, useWindowDimensions} from 'react-native';
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';
import {Strings} from '../../util/String';
import {colors} from '../../util/Constants';
import {getDateInNumFormat, getFormatedDate} from '../../util/date';
import TravelScreen from './TravelScreen';
import {Days, Routes} from '../../types/itenaryForm';

const ItenaryForm = (props: {intialTabName?: string}) => {
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(() => {
    switch (props.intialTabName) {
      case Strings.today:
        return 1;
      case Strings.yesterday:
        return 0;
      case Strings.tomorrow:
        return 2;
      default:
        return 1;
    }
  });
  const [routes] = React.useState<Routes[]>([
    {
      key: Days.yesterday,
      title: Strings.yesterday,
      date: getDateInNumFormat(Days.yesterday),
    },
    {
      key: Days.today,
      title: Strings.today,
      date: getDateInNumFormat(Days.today),
    },
    {
      key: Days.tomorrow,
      title: Strings.tomorrow,
      date: getDateInNumFormat(Days.tomorrow),
    },
  ]);
  return (
    <TabView
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{width: layout.width}}
      renderTabBar={renderTabBar}
      lazy
    />
  );
};
export default ItenaryForm;
const renderScene = SceneMap({
  [Days.yesterday]: TravelScreen,
  [Days.today]: TravelScreen,
  [Days.tomorrow]: TravelScreen,
});
const renderTabBar = props => (
  <TabBar
    {...props}
    style={{backgroundColor: colors.white}}
    indicatorStyle={styles.indicator}
    renderLabel={({route}) => {
      return (
        <View>
          <Text style={styles.dayTxt}>{route.title}</Text>
          <Text style={styles.dateTxt}>{getFormatedDate(route.date)}</Text>
        </View>
      );
    }}
  />
);
const styles = StyleSheet.create({
  container: {},
  indicator: {
    width: '25%',
    alignSelf: 'center',
    left: '4%',
    backgroundColor: colors.azureBlue,
  },
  dayTxt: {
    fontWeight: '600',
    fontSize: 18,
    lineHeight: 27,
    textAlign: 'center',
    color: colors.black,
  },
  dateTxt: {
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'center',
    color: colors.greyishSilver,
  },
});
