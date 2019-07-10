

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, ImageBackground, StatusBar } from 'react-native';
import { Images } from '../../assets/Images'
import { SafeAreaView } from 'react-navigation';

import { styles } from './style'

class Splash extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        setTimeout(() => {
            this.props.navigation.navigate("Intro");

        }, 100)
    }
    render() {
        return (

            <ImageBackground source={Images.splashBg} style={styles.imageBacStyle}>

            </ImageBackground>

        )
    };

}
/* 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
}); */

export { Splash }