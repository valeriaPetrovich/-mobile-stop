/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
// import {YaMap} from 'react-native-yamap';
// YaMap.init('e143801e-6824-4b30-bbcf-de724b2d9080');
//YaMap.setLocale('ru_RU'); 
console.log('appName',appName);

AppRegistry.registerComponent(appName, () => App);