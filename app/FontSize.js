import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";

import { createDrawerNavigator } from 'react-navigation'
import ScreenOne from './screens/ScreenOne'
import ScreenTwo from './screens/ScreenTwo'
import ScreenThree from './screens/ScreenThree'
import Settings from './screens/Settings'

export default createDrawerNavigator({
    ScreenOne: ScreenOne,
    ScreenTwo: ScreenTwo,
    ScreenThree: ScreenThree,
    Settings: Settings
})

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});