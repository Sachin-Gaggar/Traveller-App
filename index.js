/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import NotificationUtil from './src/util/NotificationUtil';
NotificationUtil.backgroundHandler();
AppRegistry.registerComponent(appName, () => App);
