import { StyleSheet, Dimensions } from 'react-native'

import { deviceDimensions } from '../../utils/device-helper'

const { deviceHeight, deviceWidth } = deviceDimensions

export const Styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
      margin: 20,
       // marginVertical: 20
    }
    ,
    backStyle: {
       // flex: 1,
    //   marginLeft: 20,
        marginTop: deviceHeight*0.015,
        
        height:deviceHeight*0.1
    },
    signUpViewStyle: {
      //  marginLeft: 20,
       // flex: 1,
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
        marginTop:deviceHeight*0.13,
       // marginBottom: deviceHeight*0.15,
        backgroundColor: '#91DB9C',
        borderRadius: 0,
        borderColor: '#91DB9C',
    },
    alreadyHaveStyle: {
        paddingTop:15,
        fontSize: 17,
        color: '#D3F0D7',
        textAlign: 'center'
    }


})