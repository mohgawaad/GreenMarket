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
    logInViewStyle: {
      //  marginLeft: 20,
       // flex: 1,
        //paddingTop: 0
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
        marginTop:deviceHeight*0.019,
       // marginBottom: deviceHeight*0.15,
        backgroundColor: '#91DB9C',
        borderRadius: 0,
        borderColor: '#91DB9C',
    },
    alreadyHaveStyle: {
        fontSize: 17,
        color: '#D3F0D7',
        textAlign: 'center',
        paddingTop:15,
    },
    ForgittenStyle:{
        color: '#8BD391',
        fontSize: 15,
        textAlign: 'center',
        marginVertical:50,
        
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
    skibText: {
        color: '#91DB9C',
        fontSize: 22,
        fontWeight: '900',
        
    },
    emailBasswodContainer: {
        marginTop: 15,
        justifyContent: 'flex-start'
    },
    loginOuterStyle:{ 
        justifyContent: 'space-between', 
        flex: 1 
    },
    signUpText:{ 
        color: '#8BD391', 
        fontSize: 19 
    },
})