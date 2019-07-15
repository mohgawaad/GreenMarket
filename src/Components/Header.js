

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
//import { IMAGES } from '../common'
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Button } from './Button';


class Header extends Component {
    constructor(props) {
        super(props);
        
    }
    render() {
        const { TextStyle, ViewStyle, containerStyle } = styles;


        return (
            <View style={containerStyle}>
               
                <View style={{ flex: 1,alignItems:'flex-start' ,marginBottom:15 , paddingHorizontal:20  }}>


                    <Icon
                        name="bars"
                        size={25}

                        color={'gray'} />
         
                        
                </View>
           
                <View style={{ flex: 1,alignItems:'flex-end' ,marginBottom:15 , paddingRight:20  }}>


                    <Icon
                        name="bell"
                        size={25}

                        color={'gray'} />

                        
                </View>



            </View>
        );
    }
}
const styles = {
    ViewStyle: {
        /* backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        shadowColor: '#F8F8F8',
        shadowOffset: { width: 0, height: 20 },
        shadowOpacity: 0.2,
        elevation: 2,
        postion: 'relative', */
    },
    TextStyle: {
        fontSize: 20,
        color:'gray',
        fontWeight:'bold',
        //width:150
    },
    containerStyle: {
        backgroundColor: '#fff',
        justifyContent: 'space-between',
        alignItems: 'space-between',
        flexDirection: 'row',
         height: Platform.OS=="android"?60:100,
        //paddingTop: 50,
        

    }
}


export { Header }