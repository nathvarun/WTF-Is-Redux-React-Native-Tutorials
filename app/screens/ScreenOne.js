import React, { Component } from "react";
import {
    View,
    StyleSheet
} from "react-native";
import Text from '../components/CustomText'
class ScreenOne extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>ScreenOne</Text>
            </View>
        );
    }
}
export default ScreenOne;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});