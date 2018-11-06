import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ActivityIndicator
} from "react-native";
import { connect } from 'react-redux'
import * as  counterActions from './actions/counterActions'

class CounterApp extends Component {

    render() {
        return (
            <View style={styles.container}>
                
                
                <View style={{ flexDirection: 'row', width: 200, justifyContent: 'space-around' }}>
                    
                    <TouchableOpacity onPress={() => this.props.increaseCounter()}>
                        <Text style={{ fontSize: 20 }}>Increase</Text>
                    </TouchableOpacity>
                    <Text style={{ fontSize: 20 }}>{this.props.counter}</Text>
                    <TouchableOpacity onPress={() => this.props.decreaseCounter()}>
                        <Text style={{ fontSize: 20 }}>Decrease</Text>
                    </TouchableOpacity>
                </View>
                {this.props.isLoading ? 
                    <View style={[StyleSheet.absoluteFill, { backgroundColor: 'rgba(0,0,0,0.8)',alignItems:'center',justifyContent:'center' }]}>
                        <ActivityIndicator  />
                    </View>
                :null}
            </View>
        );
    }
}

function mapStateToProps(state) {
    return {
        counter: state.counterReducer.counter,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        increaseCounter: () => dispatch(counterActions.increaseCounter()),
        decreaseCounter: () => dispatch(counterActions.decreaseCounter()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterApp)


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});