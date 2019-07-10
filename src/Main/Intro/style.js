import { StyleSheet,Dimensions } from 'react-native'

import {deviceDimensions }from '../../utils/device-helper'

const {deviceHeight,deviceWidth} = deviceDimensions 

export const Styles = StyleSheet.create({
    containerStyle: {
        marginTop: deviceHeight*0.09,
        flex: 1,
        backgroundColor:"white"
    }
    ,
    textStyle: {
        textAlign: 'center',
        fontSize: 20
    },
    WelStyle: {
        color: '#8BD391'
    },
    imageViewStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    imageStyle: {
        width: 220,
        height: 220,
        resizeMode: 'stretch'
    }
    ,
    registerContainer: {
        flex: 1,
        marginTop: deviceHeight*0.1,
        alignItems: 'center'
    },
    registerText: {
        textAlign: 'center',
        fontSize: 20,
        color: '#FBDDDB'
    },
    loginStyle: {
        alignSelf: 'center',
        width: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: deviceHeight*0.015,
        height: 50,
        backgroundColor: '#91DB9C',
        borderRadius: 0,
        borderColor: '#91DB9C',
    },
    loginText: {
        fontSize: 19,
        fontWeight: '900',
    },
    signUpStyle: {
        alignSelf: 'center',
        width: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: deviceHeight*0.015,
        borderRadius: 0,
        borderColor: 'white'
    },
    signUpText: {
        color: '#91DB9C',
        fontSize: 19,
        fontWeight: '900',
    }
})