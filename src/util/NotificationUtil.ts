import messaging from '@react-native-firebase/messaging';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Alert} from 'react-native';
import LocalNotiee from './LocalNotiee';
import notifee, {AndroidImportance, EventType} from '@notifee/react-native';
import Logger from './Logger';

class NotificationUtil {
  #foregroundListener;
  async requestUserPermission() {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;
    if (enabled) {
      Logger.log('Authorization status:', authStatus);
      this.getFcmToken();
    }
  }

  async getFcmToken() {
    let checkToken = await AsyncStorage.getItem('fcmToken');
    Logger.log('the old token', checkToken);
    if (!checkToken) {
      try {
        const fcmToken = await messaging().getToken();
        if (!!fcmToken) {
          Logger.log('fcme token generated', fcmToken);
          await AsyncStorage.setItem('fcmToken', fcmToken);
        }
      } catch (error) {
        Logger.log('error in fcmToken', error);
        // Alert.alert(error?.message);
      }
    }
  }
  listener(handlingFunction) {
    this.requestUserPermission();
    notifee.onForegroundEvent(({type, detail}) => {
      if (type === EventType.PRESS) {
        handlingFunction(detail.notification?.body);
      }
    });
    messaging().onNotificationOpenedApp(remoteMessage => {
      Logger.log(
        'Notification caused app to open from background state:',
        remoteMessage.notification,
      );
      handlingFunction(remoteMessage.notification?.body);
    });
    // Check whether an initial notification is available
    messaging()
      .getInitialNotification()
      .then(remoteMessage => {
        if (remoteMessage) {
          Logger.log(
            'Notification caused app to open from quit state:',
            remoteMessage.notification,
          );
          handlingFunction(remoteMessage.notification?.body);
          Logger.log('remote message', remoteMessage.notification);
        } else {
          handlingFunction();
        }
      });
    this.#foregroundListener = messaging().onMessage(async remoteMessage => {
      LocalNotiee.onDisplayNotification(remoteMessage);
    });
  }
  backgroundHandler() {
    messaging().setBackgroundMessageHandler(async remoteMessage => {
      Logger.log('Message handled in the background!', remoteMessage);
    });
  }
  removeForegroundListener() {
    this.#foregroundListener?.();
  }
}

export default new NotificationUtil();
