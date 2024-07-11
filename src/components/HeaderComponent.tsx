import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import {colors} from '../util/Constants';
import BackButton from '../assets/svgs/backArrow.svg';
import {useNavigation} from '@react-navigation/native';
import Logger from '../util/Logger';

type Props = {
  title: string;
};

const HeaderComponent = (props: Props) => {
  const {title} = props;
  const navigation = useNavigation();
  const canGoBack = Boolean(navigation.canGoBack());
  return (
    <>
      <SafeAreaView style={{backgroundColor: colors.white}} />
      <View style={styles.container}>
        {canGoBack && (
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
            style={{zIndex: 10}}>
            <BackButton />
          </TouchableOpacity>
        )}
        <View style={[styles.titleView, !canGoBack && {left: 28}]}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </View>
    </>
  );
};

export default React.memo(HeaderComponent);

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 23,
    height: 50,
    justifyContent: 'flex-start',
  },

  title: {
    fontSize: 24,
    lineHeight: 36,
    fontWeight: '600',
    color: colors.black,
    textAlign: 'center',
    left: -28, //BackButton Size
  },
  titleView: {
    flex: 1,
  },
});
