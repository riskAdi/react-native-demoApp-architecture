import Expo from 'expo';
import App from './App';
import Constants from 'expo-constants';
const { version } = Constants.manifest;

Expo.registerRootComponent(App);