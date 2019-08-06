import { StyleSheet, Dimensions } from 'react-native'

import { deviceDimensions } from '../../utils/device-helper'

const { deviceHeight, deviceWidth } = deviceDimensions

export const Styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        margin: 20,
    }
    ,
    backStyle: {
        marginTop: deviceHeight * 0.015,
        height: deviceHeight * 0.1
    },
    signUpViewStyle: {
        paddingTop: 30
    },
    signUpTextStyle: {
        color: '#8BD391',
        fontSize: 30,
        fontWeight: '900'
    },
    LabelStyle: {
        fontSize: 20,
        color: '#FBDDDB'
    },
    signUpBtnStyle: {
        alignSelf: 'center',
        width: '50%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: deviceHeight * 0.13,
        backgroundColor: '#91DB9C',
        borderRadius: 0,
        borderColor: '#91DB9C',
    },
    alreadyHaveStyle: {
        paddingTop: 15,
        fontSize: 17,
        color: '#D3F0D7',
        textAlign: 'center'
    },
    nameContainer: {
        marginTop: 70,
        justifyContent: 'flex-start'
    },
    emailBasswodContainer: {
        marginTop: 15,
        justifyContent: 'flex-start',
        
    },
    textLogin: {
        color: '#8BD391',
        fontSize: 19
    }

})