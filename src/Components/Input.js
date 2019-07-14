


import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';


class Input extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { labelStyle, inputStyle, containerStyle } = styles;
        return (
            <View style={[containerStyle , this.props.style]}>
                <Text style={labelStyle}>{this.props.label}</Text>
                <TextInput
                
                    secureTextEntry={this.props.secure}
                    style={[inputStyle,this.props.Inputstyle]}
                    onChangeText={this.props.onChangeText}
                    value={this.props.value}
                    autoCorrect={false}
                    
                    placeholder={this.props.placeholder}
                    {...this.props}
                />
                
            </View>
        );
    }
}
const styles = {
    inputStyle: {
        color: '#000',
        padding: 5,
        padding: 5,
        fontSize: 18,
        lineHeight: 23,
        padding: 10,
       // flex: 2,
       borderWidth: .5,
       borderColor: 'gray',

       width:'100%'
    },
    labelStyle: {
        //flex: 1,
        fontSize: 18,
        //paddingLeft: 20,
        color:'white'

    },
    containerStyle: {
        flexDirection: 'row',
       // flex: 1,
        height: 40,
        alignItems: 'center',
        //borderWidth:2,
        //borderColor:'red',
        width:"100%"
        
    }
}

export { Input }