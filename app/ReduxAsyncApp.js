import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Button,
    ActivityIndicator


} from "react-native";
import * as quoteActions from '../app/actions/quoteActions'
import { connect } from 'react-redux'

class ReduxAsyncApp extends Component {
    render() {
        return (
            <View style={styles.container}>
                {this.props.isLoading ?
                    <ActivityIndicator />
                    :
                    <View>
                        <Text style={{ fontSize: 24, textAlign: 'center' }}>{this.props.quote}</Text>
                        <Button title="Load Quote" onPress={() => this.props.loadQuote()} />
                    </View>
                }
            </View>
        );
    }
}

function mapStateToProps(state) {
    return {
        quote: state.quote,
        isLoading: state.isLoading,
        error: state.error
    }
}

function mapDispatchToProps(dispatch) {
    return {
        loadQuote: () => dispatch(quoteActions.loadQuote())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReduxAsyncApp);



const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});