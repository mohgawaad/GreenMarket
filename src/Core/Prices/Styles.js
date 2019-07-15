
import { StyleSheet,Dimensions } from 'react-native'
import {deviceDimensions }from '../../utils/device-helper'

const {deviceHeight,deviceWidth} = deviceDimensions 

export const Styles = StyleSheet.create({
    buttonStyle: {
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
    textTitleStyle:{ 
        fontSize: 18, 
        paddingTop: 30, 
        marginHorizontal: 20 
    },
    PurchasesStyle:{ 
        flexDirection: 'row', 
        flex: 1, 
        justifyContent: 'space-between' 
    },
    rightPartStyle:{ 
        flex: 1, 
        alignSelf: 'center', 
        alignItems: 'center', 
        margin: 20, 
    },
    leftPartStyle:{ 
        margin: 20, 
        backgroundColor: 'green' 
    },
    countStyle:{ 
        textAlign: 'center', 
        paddingHorizontal: 5 
    },
    boxStyle:{ 
        borderWidth: 1, 
        alignItems: 'center', 
        justifyContent: 'center' 
    },
    priceTextStyle:{ 
        fontSize: 30 
    },
    countContainerStyle:{ 
        flexDirection: 'row', 
        marginHorizontal: 40, 
    },
    brandsTextStyle:{ 
        fontSize: 20, 
        paddingVertical: 20 
    },
    brandsContainerStyle:{ 
        flex: 1, 
        alignItems: "center" 
    },
    headerSimilarStyle:{ 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        margin: 20 
    },

})