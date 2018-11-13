import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import ReduxAsyncApp from './app/ReduxAsyncApp'
import { Provider } from 'react-redux'
import store from './app/store'

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <ReduxAsyncApp />
      </Provider>
    );
  }
}

export default App

// export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});