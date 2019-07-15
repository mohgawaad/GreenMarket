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
    logInViewStyle: {
        paddingBottom: 20
    },
    logInTextStyle: {
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
        marginTop: deviceHeight * 0.2,
        backgroundColor: '#91DB9C',
        borderRadius: 0,
        borderColor: '#91DB9C',
    },
    alreadyHaveStyle: {
        fontSize: 10,
        color: '#D3F0D7',
        textAlign: 'center'
    },
    ForgittenStyle: {
        color: '#8BD391',
        fontSize: 15,
        textAlign: 'center',
        marginVertical: 50
    }
,
emailContainer:{ 
    marginTop: 15, 
    justifyContent: 'flex-start' 
},
emailOuterContainer:{ 
    justifyContent: 'space-between', 
    flex: 1 
}
})