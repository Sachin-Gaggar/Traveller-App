import notifee, {AndroidImportance, EventType} from '@notifee/react-native';

class LocalNoti {
  public async onDisplayNotification(data) {
    // Request permissions (required for iOS)
    await notifee.requestPermission();

    // Create a channel (required for Android)
    const channelId = await notifee.createChannel({
      id: 'default',
      name: 'Default Channel',
      importance: AndroidImportance.DEFAULT,
      vibration: true,
    });

    // Display a notification
    await notifee.displayNotification({
      title: data?.notification?.title,
      body: data?.notification?.body,
      android: {
        channelId,
        // smallIcon: 'name-of-a-small-icon', // optional, defaults to 'ic_launcher'.
        // pressAction is needed if you want the notification to open the app when pressed
        pressAction: {
          id: 'default',
        },
      },
    });
  }
}
export default new LocalNoti();
