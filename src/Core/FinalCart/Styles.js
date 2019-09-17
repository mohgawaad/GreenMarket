
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
    ProcurementListStyle:{ 
        flexDirection: 'row', 
        flex: 1, 
        justifyContent: 'center', 
    },
nameOfProductStyle:{ 
    fontSize: 18, 
    paddingTop: 30, 
    marginHorizontal: 20 
},
cardStyle:{ 
    margin: 10, 
    backgroundColor: 'lightyellow' 
},
productDetailsStyle:{ 
    flex: 1, 
    alignSelf: 'center', 
    alignItems: 'center', 
    margin: 10 
},
countCountainerStyle:{ 
    flexDirection: 'row',
    marginHorizontal: 40, 
},
boxCountStyle:{ 
    borderWidth: 1, 
    alignItems: 'center', 
    justifyContent: 'center' 
},
textCountStyle:{ 
    textAlign: 'center', 
    paddingHorizontal: 5 
},
closeCountainer:{ 
    marginRight: 10, 
    justifyContent: 'center' ,
    //backgroundColor:'red'
},
confirmationStyle:{ 
    alignItems: "center", 
    flexDirection: 'column', 
},
})