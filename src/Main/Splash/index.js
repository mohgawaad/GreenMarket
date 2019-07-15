

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, ImageBackground, StatusBar } from 'react-native';
import { Images } from '../../assets/Images'
//import { SafeAreaView } from 'react-navigation';

import { styles } from './style'

class Splash extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        setTimeout(() => {
            this.props.navigation.navigate("Kind");

        }, 100)
    }
    render() {
        return (

            <ImageBackground source={Images.splashBg} style={styles.imageBacStyle}>

            </ImageBackground>

        )
    };

}

export { Splash }