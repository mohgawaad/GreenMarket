

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { Splash } from './Main/Splash';
import { Provider } from 'react-redux';
import store from './redux/store'

import MyRootNavigator from "./RootNavigator"
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={{ backgroundColor: '#fff', flex: 1 }}>

          <MyRootNavigator />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
