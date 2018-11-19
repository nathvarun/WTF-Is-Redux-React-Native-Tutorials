import React, { Component } from "react";
import {
    View,
    StyleSheet
} from "react-native";
import Text from '../components/CustomText'

class ScreenThree extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>ScreenThree</Text>
            </View>
        );
    }
}
export default ScreenThree;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});