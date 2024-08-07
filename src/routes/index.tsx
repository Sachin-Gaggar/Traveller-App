import React from 'react';
import {
  BottomTabNavigationOptions,
  BottomTabNavigationProp,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {
  DefaultNavigatorOptions,
  NavigationContainer,
  ParamListBase,
  RouteProp,
} from '@react-navigation/native';
import {screenNames} from '../util/Constants';
import Home from '../screens/Home';
import Wallet from '../screens/Wallet';
import Guide from '../screens/Guide';
import Chart from '../screens/Chart';
import CustomTabBar, {screenOptions} from './CustomTabBar';
import NotificationUtil from '../util/NotificationUtil';
const Tab = createBottomTabNavigator();
const AppNavigator = ({intialRoute, intialParams}) => {
  return (
    <NavigationContainer linking={NotificationUtil.linking}>
      <Tab.Navigator
        initialRouteName={intialRoute}
        screenOptions={{headerShown: false}}
        tabBar={props => <CustomTabBar {...props} />}>
        <Tab.Screen name={screenNames.home} component={Home} />
        <Tab.Screen name={screenNames.wallet} component={Wallet} />
        <Tab.Screen
          name={screenNames.guide}
          component={Guide}
          initialParams={{tabName: intialParams}}
        />
        <Tab.Screen name={screenNames.chart} component={Chart} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
