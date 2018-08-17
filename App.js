import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TodoApp from './src/TodoApp'
import store from './src/store'
import { Provider } from 'react-redux'
export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <TodoApp />
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
