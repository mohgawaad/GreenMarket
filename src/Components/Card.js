

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, TouchableOpacity, Dimensions } from 'react-native';



class Card extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { containerStyle } = styles
        return (
            <View style={[containerStyle, this.props.style]}>
                {this.props.children}
            </View>
        );
    }
}
const styles = {
    containerStyle: {
        // /* height:40, */
        // borderWidth: 1,
        // borderRadius: 2,
        // borderColor: '#ddd',
        // borderBottomWidth: 0,
        // shadowColor: '#000',
        // shadowOffset: { width: 0, height: 2 },
        // shadowOpacity: 0.1,
        // shadowRadius: 2,
        // elevation: 1,
        // marginLeft: 5,
        // marginRight: 5,
        // //marginTop: 10,
        // width:Dimensions.get('window').width  *.9,
        // //backgroundColor:'white'
        shadowColor: "#000",

        shadowOpacity: 0.1,
        shadowRadius: 13.97,

        elevation: 2,
        width: 150, height: 150, backgroundColor: '#fff', justifyContent: 'center',
        alignItems: 'center'
    },
    TextStyle: {
        fontSize: 20
    }
}


export { Card }