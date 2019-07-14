
import { StyleSheet,Dimensions } from 'react-native'
import {deviceDimensions }from '../../utils/device-helper'

const {deviceHeight,deviceWidth} = deviceDimensions 

export const Styles = StyleSheet.create({
    loginStyle: {
        //alignSelf: 'center',
        width: '80%',
        justifyContent: 'center',
        alignItems: 'center',
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
})