


import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';



const Shadow = (props) => {




    return (
       
            <View onPress={props.whenClicked} style={[styles.ShadowStyle,props.style]} >
                {props.children}
            </View>
            
       
    );

}
const styles = {
    ShadowStyle: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.53,
        shadowRadius: 13.97,

        elevation: 21,
        //paddingTop:10
    },


}


export { Shadow }