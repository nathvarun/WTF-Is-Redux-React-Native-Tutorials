import React, { Component } from "react";
import {
    View,
    StyleSheet,
    Button
} from "react-native";
import Text from '../components/CustomText'
import { connect } from 'react-redux'

class SettingsScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>SettingsScreen</Text>
                <Button title="Increase" onPress={() => this.props.increaseFontSize()} />
                <Button title="Decrease" onPress={() => this.props.decreaseFontSize()} />

            </View>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        increaseFontSize: () => dispatch({ type: 'INCREASE_FONT_SIZE' }),
        decreaseFontSize: () => dispatch({ type: 'DECREASE_FONT_SIZE' })
    }
}

export default connect(null, mapDispatchToProps)(SettingsScreen);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});