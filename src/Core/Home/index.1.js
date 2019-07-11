import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Header } from '../../Components/Header';
import { Shadow } from '../../Components/Shadow';
import { Search } from '../../Components/Search';
import { Images } from '../../assets/Images';

import Swiper from 'react-native-swiper'
const Data = [
    [
        {
            id: 1,
            image: require('../../assets/Images/hand.png')
        },
        {
            id: 2,
            image: require('../../assets/Images/hand.png')
        },
        {
            id: 3,
            image: require('../../assets/Images/hand.png')
        },
        {
            id: 4,
            image: require('../../assets/Images/hand.png')
        },
        {
            id: 5,
            image: require('../../assets/Images/hand.png')
        },
    ],
    [
        {
            image: require('../../assets/Images/hand.png')
        }
    ],
    [{
        image: require('../../assets/Images/hand.png')
    }],
    [{
        image: require('../../assets/Images/hand.png')
    }]
    ,
    [{
        image: require('../../assets/Images/hand.png')
    }]
    ,
    [{
        image: require('../../assets/Images/hand.png')
    }]
    ,
    [{
        image: require('../../assets/Images/hand.png')
    }]



]
class Home extends Component {

    constructor(props) {
        super(props);
    }
    _keyExtractor = (item, index) => item.id;

    _renderItem = ({ item }) => (
        <Shadow style={{}}>
            <Image
                source={item.image}
                style={{
                    width: 100,
                    height: 100,
                    marginHorizontal: 20
                }}
            />
        </Shadow>

    );


    render() {

        return (
            <View style={{ flex: 1, }}>
                <Header />
                <Shadow>
                    <TouchableOpacity onPress={() => { alert('search') }}>
                        <Search />
                    </TouchableOpacity>
                </Shadow>
                <View style={{ height: '30%' }}>
                    <Swiper style={styles.wrapper} showsButtons>
                        <View style={styles.slide1}>
                            <Text style={styles.text}>Hello Swiper</Text>
                        </View>
                        <View style={styles.slide2}>
                            <Text style={styles.text}>Beautiful</Text>
                        </View>
                        <View style={styles.slide3}>
                            <Text style={styles.text}>And simple</Text>
                        </View>
                    </Swiper>
                </View>
                <ScrollView>
                    {

                        Data.map(item => (
                            <View>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 20 }}>
                                    <Text>hello</Text>
                                    <Text>see all</Text>
                                </View>
                                <FlatList
                                    data={item}
                                    horizontal
                                    extraData={this.state}
                                    keyExtractor={this._keyExtractor}
                                    renderItem={this._renderItem}
                                    //ListHeaderComponent={<Text>{item.id}</Text>}
                                    style={{ paddingTop: 0 }}
                                />
                            </View>
                        )
                        )
                    }
                </ScrollView>

            </View>

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
export { Home }