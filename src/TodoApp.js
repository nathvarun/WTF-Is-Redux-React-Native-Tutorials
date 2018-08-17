import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";

class TodoApp extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>TodoApp</Text>
            </View>
        );
    }
}
export default TodoApp;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});