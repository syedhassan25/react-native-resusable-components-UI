/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

// import {AppRegistry} from 'react-native';
// import App from './App';
// import {name as appName} from './app.json';

// AppRegistry.registerComponent(appName, () => App);

import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import Albumlist from './src/components/albumlist';

const App = () => (
    <View style={{ flex: 1 }}>
    <Header headerText={'Albums'} />
    <Albumlist />
    </View>
);


AppRegistry.registerComponent('AwesomeProject', () => App);

