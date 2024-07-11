import React, {useEffect, useState} from 'react';
import {Alert, SafeAreaView, StyleSheet} from 'react-native';
import AppNavigator from './src/routes';
import NotificationUtil from './src/util/NotificationUtil';
import {screenNames} from './src/util/Constants';
import {useNavigation} from '@react-navigation/native';
import Logger from './src/util/Logger';

function App(): React.JSX.Element {
  const [intialRoute, setInitialRoute] = useState('');
  const [initialParams, setInitalParams] = useState('');
  const [loading, setLoading] = useState(true);
  // const navigation = useNavigation();
  useEffect(() => {
    const onNotificationRecieved = (route = screenNames.home) => {
      setLoading(true);
      setTimeout(() => {
        let routeName = route;
        let params = '';
        if (routeName?.includes(':')) {
          [routeName, params] = routeName.split(':');
        }
        setInitialRoute(routeName);
        setInitalParams(params);
        setLoading(false);
      }, 0);
    };
    NotificationUtil.listener(onNotificationRecieved);
    return () => NotificationUtil.removeForegroundListener();
  }, []);
  if (loading) {
    return null;
  }
  return (
    <>
      <AppNavigator intialRoute={intialRoute} intialParams={initialParams} />
    </>
  );
}

const styles = StyleSheet.create({});

export default App;
