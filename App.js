import React, { Component } from 'react';
import { Ionicons } from '@expo/vector-icons';
import * as Font from 'expo-font'
import AppContainer from './app/routes/AppContainer';
import { Provider } from 'react-redux';
import store from './app/redux/store';
export default class App extends Component {
  async componentDidMount() {
    await Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
  }
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}