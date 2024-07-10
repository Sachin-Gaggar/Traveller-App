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

type Props = {
  title: string;
};

const HeaderComponent = (props: Props) => {
  const {title} = props;
  const navigation = useNavigation();
  return (
    <>
      <SafeAreaView style={{backgroundColor: colors.white}} />
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => {
            console.log('back pressed');
            navigation.goBack();
          }}
          style={{zIndex: 10}}>
          <BackButton />
        </TouchableOpacity>
        <View style={styles.titleView}>
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
