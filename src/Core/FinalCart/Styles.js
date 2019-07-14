
import { StyleSheet,Dimensions } from 'react-native'
import {deviceDimensions }from '../../utils/device-helper'

const {deviceHeight,deviceWidth} = deviceDimensions 

export const Styles = StyleSheet.create({
    loginStyle: {
        alignSelf: 'center',
        width: '40%',
        justifyContent: 'center',
       // alignItems: 'center',
        marginTop: deviceHeight*0.015,
        height: 50,
        backgroundColor: '#FFAFA9',
        borderRadius: 0,
        borderColor: '#FFAFA9',
    },
    loginText: {
        fontSize: 15,
        fontWeight: '500',
    },
    signUpText: {
        color: '#91DB9C',
        fontSize: 22,
        fontWeight: '900',
        
    }
    , signUpStyle: {
        alignSelf: 'center',
        width: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: deviceHeight*0.025,
        borderRadius: 0,
        borderColor: 'white'
    },
})