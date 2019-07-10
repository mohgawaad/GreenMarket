


import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import { Input } from './Input';
import { Shadow } from './Shadow';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Swiper from 'react-native-swiper';
import { Images } from '../assets/Images'

const styles = StyleSheet.create({
    wrapper: {

    },
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB',
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5',
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9',
    },
    image: {
        width: '100%',
        height: '100%'
    }
})
class Search extends Component {
    constructor(props) {
        super(props);

    }

    render() {

        return (
            <View >
                <Shadow>
                    <View style={{ width: '70%', alignSelf: 'center' }}>
                        <Input />
                    </View>
                </Shadow>

                <View style={{ paddingBottom: 20, position: 'relative', bottom: 33, left: 70 }}>
                    <Icon
                        name="search"
                        size={25}
                        color={'gray'} />
                </View>

                 

            </View>
        );
    }
}


export { Search }