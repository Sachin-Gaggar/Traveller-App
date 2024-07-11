import React, {useCallback, useEffect, useState} from 'react';
import {View, StyleSheet, Text, ActivityIndicator} from 'react-native';
import {Routes, TravelPlanType} from '../../types/itenaryForm';
import {calltravelPlan} from '../../actions/action';
import {Strings} from '../../util/String';
import RowText from '../../components/RowText';
import ProgressTracker from '../../components/ProgressTracker';
import {useFocusEffect, useIsFocused} from '@react-navigation/native';

type Props = {
  route: Routes;
};
const TravelScreen = (props: Props) => {
  const {route} = props;
  const [loader, setLoader] = useState(true);
  const [data, setData] = useState<TravelPlanType[]>();
  const [error, setError] = useState(false);
  const [progressRate, setProgressRate] = useState(0);
  const animationDone = useCallback(() => {
    //progress will be till the index number
    setProgressRate(count => ++count);
  }, []);

  useEffect(() => {
    const onSuccess = data => {
      setData(data);
      setLoader(false);
    };
    const onError = () => {
      setLoader(false);
      setError(true);
    };
    calltravelPlan(onSuccess, onError);
  }, []);
  if (loader) {
    return <ActivityIndicator size={'large'} style={{flex: 1}} />;
  }
  return (
    <>
      {error ? (
        <View style={styles.container}>
          <Text style={styles.errorMsg}>{Strings.errorMsg}</Text>
        </View>
      ) : (
        <View style={styles.progressContainer}>
          {data?.map((item, index) => {
            return (
              <ProgressTracker
                data={item}
                itemNo={index}
                day={route.key}
                animationDone={animationDone}
                progressRate={progressRate}
                key={item.place}
              />
            );
          })}
        </View>
      )}
    </>
  );
};
export default TravelScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  errorMsg: {
    textAlign: 'center',
  },
  progressContainer: {
    flex: 1,
    paddingTop: 60,
  },
});
