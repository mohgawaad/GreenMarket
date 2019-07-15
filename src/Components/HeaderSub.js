

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
//import { IMAGES } from '../common'
import Icon from 'react-native-vector-icons/FontAwesome5';
import { deviceDimensions } from '../utils/device-helper'
import { Button } from './Button';

const { deviceHeight } = deviceDimensions
class HeaderSub extends Component {
    constructor(props) {
        super(props);

    }



    render() {
        const { RightIconsStyle, backStyle, ContainerStyle } = styles;

        //   const {navigate } =  this.props.navigation

        return (

            <View style={RightIconsStyle}>


                <View style={backStyle}>
                    <Text
                        onPress={this.props.clicked}
                        style={{ fontSize: 30 }}>&larr;</Text>
                </View>

                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end', marginTop: Platform.OS=="android"?15:0 }}>
                    <Icon
                        style={{ paddingHorizontal: 10 }}
                        name={this.props.IconName1}
                        size={25}

                        color={'gray'} />

                    <Icon
                        name={this.props.IconName2}
                        size={25}
                        color={'gray'} />
                </View>


            </View>

            // </View>


        );
    }
}
const styles = StyleSheet.create({
    ViewStyle: {
        
    },
    TextStyle: {
        fontSize: 20,
        color: 'gray',
        fontWeight: 'bold',
        //width:150
    },
    RightIconsStyle: {
        backgroundColor: '#fff',

        //alignItems: 'flex-end',
        flexDirection: 'row',
        // justifyContent: '',
        // height: 100,
        marginHorizontal: 10,
        // paddingTop: 50,


    },
    LeftIconsStyle: {
        justifyContent: 'flex-start',
    },
    ContainerStyle: {
        flexDirection: 'row'
    },
    backStyle: {
        // flex: 1,
        //   marginLeft: 20,
        // marginTop: deviceHeight*0.015,

        //  height:deviceHeight*0.1
        justifyContent: 'flex-start',
    },
})


export { HeaderSub }