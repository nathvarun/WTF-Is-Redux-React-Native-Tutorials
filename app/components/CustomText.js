import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";
import { connect } from 'react-redux'

class CustomText extends Component {
    render() {
        return (
            <Text style={{ fontSize: this.props.fontSize }}>{this.props.children}</Text>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        fontSize: state
    }
}

export default connect(mapStateToProps)(CustomText);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});