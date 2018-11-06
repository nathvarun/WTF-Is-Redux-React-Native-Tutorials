import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from "react-native";
import CounterApp from './src/CounterApp'
import { Provider } from 'react-redux'
import store from './src/store'

class App extends Component {

    render() {
        return (
            <Provider store={store}>
                <CounterApp />
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