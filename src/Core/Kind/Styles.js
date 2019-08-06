
import { StyleSheet,Dimensions } from 'react-native'
import {deviceDimensions }from '../../utils/device-helper'

const {deviceHeight,deviceWidth} = deviceDimensions 

export const Styles = StyleSheet.create({

    shadowStyle:{
        shadowColor: "#000",

        shadowOpacity: 0.1,
        shadowRadius: 13.97,

        elevation: 2,
        width: 150, height: 150,
         backgroundColor: '#fff', 
         justifyContent: 'center',
        alignItems: 'center'
    },
    titleStyle:{
        fontSize: 18,
         paddingTop: 30,
          marginHorizontal: 20
    }
})