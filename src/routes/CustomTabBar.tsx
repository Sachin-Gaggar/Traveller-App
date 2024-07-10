import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import Chart from '../assets/svgs/chart.svg';
import Guide from '../assets/svgs/guide.svg';
import Home from '../assets/svgs/home.svg';
import Wallet from '../assets/svgs/wallet.svg';
import {colors, IS_IOS, screenNames} from '../util/Constants';
import {Strings} from '../util/String';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const CustomTabBar = ({state, descriptors, navigation}: BottomTabBarProps) => {
  const insets = useSafeAreaInsets();
  return (
    <View style={styles.tabBar}>
      {state.routes.map((route, index) => {
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const getIcon = () => {
          switch (route.name) {
            case screenNames.chart:
              return (
                <Chart
                  height={28}
                  width={28}
                  fill={isFocused ? colors.azureBlue : colors.silver}
                  style={styles.icon}
                />
              );
            case screenNames.home:
              return (
                <Home
                  height={28}
                  width={28}
                  fill={isFocused ? colors.azureBlue : colors.silver}
                  style={styles.icon}
                />
              );
            case screenNames.guide:
              return (
                <Guide
                  height={28}
                  width={28}
                  fill={isFocused ? colors.azureBlue : colors.silver}
                  style={styles.icon}
                />
              );
            case screenNames.wallet:
              return (
                <Wallet
                  height={28}
                  width={28}
                  fill={isFocused ? colors.azureBlue : colors.silver}
                  style={styles.icon}
                />
              );
            default:
              return null;
          }
        };

        return (
          <TouchableOpacity
            key={route.key}
            onPress={onPress}
            style={[styles.tab, {paddingBottom: insets.bottom}]}>
            {getIcon()}
            <Text
              style={[styles.label, isFocused ? styles.labelFocused : null]}>
              {Strings[route.name.toLowerCase()]}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    paddingTop: 21,
    paddingBottom: IS_IOS ? 0 : 10,
    backgroundColor: colors.white,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    elevation: 5,
    shadowColor: colors.black,
    shadowOffset: {width: 0, height: 10},
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    paddingHorizontal: 20,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {},
  label: {
    marginTop: 5,
    fontSize: 14,
    lineHeight: 21,
  },
  labelFocused: {
    color: colors.azureBlue,
  },
});

export default CustomTabBar;
