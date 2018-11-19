import React, { Component } from "react";
import {
    View,
    StyleSheet
} from "react-native";
import Text from '../components/CustomText'

class ScreenTwo extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>ScreenTwo</Text>
            </View>
        );
    }
}
export default ScreenTwo;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});