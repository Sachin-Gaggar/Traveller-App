import React from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';
import {colors} from '../../util/Constants';
import {Strings} from '../../util/String';
import HeaderComponent from '../../components/HeaderComponent';
import LocalNotiee from '../../util/LocalNotiee';

type Props = {};
const Home = (props: Props) => {
  const localNotification = (tabName: string) => {
    const title = 'Local Push Notification';
    const body = `guide:${tabName}`;
    const data = {notification: {title, body}};
    LocalNotiee.onDisplayNotification(data);
  };
  return (
    <>
      <HeaderComponent title={Strings.homePage} />
      <View style={styles.container}>
        <Text>{Strings.notificationMsg}</Text>
        <Button
          title={Strings.gotoYesterDayTab}
          onPress={() => localNotification(Strings.yesterday)}
        />
        <Button
          title={Strings.gotoTodayDayTab}
          onPress={() => localNotification(Strings.today)}
        />
        <Button
          title={Strings.gotoTomorrowTab}
          onPress={() => localNotification(Strings.tomorrow)}
        />
      </View>
    </>
  );
};
export default Home;
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.whiteSmoke,
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    gap: 8,
  },
  headingTxt: {
    color: colors.silver,
    fontSize: 36,
    lineHeight: 54,
    textAlign: 'center',
  },
});
