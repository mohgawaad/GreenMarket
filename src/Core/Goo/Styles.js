
import { StyleSheet,Dimensions } from 'react-native'
import {deviceDimensions }from '../../utils/device-helper'

const {deviceHeight,deviceWidth} = deviceDimensions 

export const Styles = StyleSheet.create({
shadowStyle:{
    //backgroundColor:'red',
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 13.97,
    elevation: 2,
    width: 150, 
    height: 150, 
    backgroundColor: '#fff', 
    justifyContent: 'center',
    alignItems: 'center'
},
headerTitleStyle:{ 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    margin: 20 
},
})