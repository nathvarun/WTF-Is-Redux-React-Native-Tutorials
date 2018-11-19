import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FontSize from './app/FontSize'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

const reducer = (state = 12, action) => {
  switch (action.type) {
    case 'INCREASE_FONT_SIZE':
      return state !== 28 ? state + 4 : state
    case 'DECREASE_FONT_SIZE':
      return state !== 12 ? state - 4 : state
    default:
      return state
  }
}

const store = createStore(reducer)

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <FontSize />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
