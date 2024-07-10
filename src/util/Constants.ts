import {Platform} from 'react-native';

export const colors = {
  whiteSmoke: '#F8F8F8',
  silver: '#BCBCBC',
  black: '#000000',
  greyishSilver: '#B1B1B1',
  azureBlue: '#0373F3',
  white: '#FFFFFF',
  c4: '#C4C4C4',
};

export const screenNames = {
  home: 'home',
  chart: 'chart',
  wallet: 'wallet',
  guide: 'guide',
};

export const IS_IOS = Platform.OS === 'ios';
