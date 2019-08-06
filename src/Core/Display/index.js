import React, { Component } from 'react';
import { Platform, FlatList, StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import { HeaderSub } from '../../Components/HeaderSub';
import { Shadow } from '../../Components/Shadow';
import { Search } from '../../Components/Search';
import { Images } from '../../assets/Images';
import { SafeAreaView } from 'react-navigation';

import { deviceDimensions } from '../../utils/device-helper'
import { Styles } from './Styles';
const { deviceWidth, deviceHeight } = deviceDimensions




class Display extends Component {

    constructor(props) {
        super(props);
        //this.props.navigation.navigate('Intro')

    }
    _keyExtractor = (item, index) => item.id;

    _renderItem = ({ item }) => (
        /* <Image
            source={item.image}
            style={{
                width: 100,
                height: 100,
                marginHorizontal: 20
            }}
        /> */

        <View style={{ margin: 20 }}>

            <TouchableOpacity onPress={()=>this.props.navigation.navigate('Kind')}>
                <View style={Styles.shadowStyle}>

                    <Text style={{ fontSize: 18 }}> {item.name}  </Text>
                </View>
            </TouchableOpacity>
        </View>


    );


    render() {

        const data = this.props.navigation.getParam('Data')

        const title = this.props.navigation.getParam('Title')

        return (

            <SafeAreaView style={{ flex: 1, }}>
                <HeaderSub
                    IconName1='bars'
                    IconName2='bell'
                    clicked={() => { this.props.navigation.goBack() }} />
                <Shadow>
                    <TouchableOpacity onPress={() => { alert('search') }} style={{ paddingTop: Platform.OS == "android" ? 17 : 0, }}>
                        <Search />
                    </TouchableOpacity>
                </Shadow>
                <Text style={{ fontSize: 18, textAlign: 'center' }}>{title}</Text>
                <ScrollView style={{ marginBottom: 20 }}>






                    <View key={data}>

                        <FlatList
                            data={data}
                            showsHorizontalScrollIndicator={false}
                            //   horizontal
                            extraData={this.state}
                            keyExtractor={this._keyExtractor}
                            renderItem={this._renderItem}
                            //ListHeaderComponent={<Text>{item.id}</Text>}
                            style={{ paddingTop: 0 }}
                            numColumns={2}
                        />
                    </View>



                </ScrollView>

            </SafeAreaView>

        );
    }
}
const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: 'gray',
        height: '40%'
    },
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB'
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5'
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9'
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
    }
});
export { Display }