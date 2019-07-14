import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import { HeaderSub } from '../../Components/HeaderSub';
import { Shadow } from '../../Components/Shadow';
import { Search } from '../../Components/Search';
import { Images } from '../../assets/Images';
import { SafeAreaView } from 'react-navigation';
import Swiper from 'react-native-swiper';

const TitleData = [{ title: 'test' }, { title: 'test' }, { title: 'test' }]
const Data = [
    [
        {
            title: 'Categores'
        }, {
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
            title: 'Offers'
        }, {
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
            title: 'Best Selling'
        }, {
            id: 1,
            image: require('../../assets/Images/hand.png')
        },
        {
            id: 2,
            image: require('../../assets/Images/hand.png')
        },

    ],

]
class Kind extends Component {

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


            <TouchableOpacity style={{
                shadowColor: "#000",

                shadowOpacity: 0.1,
                shadowRadius: 13.97,

                elevation: 2,
                width: 150, height: 150, backgroundColor: '#fff', justifyContent: 'center',
                alignItems: 'center'
            }}
            onPress={()=>{this.props.navigation.navigate('Prices')}}
            >
                <Text style={{ fontSize: 18 }}> KIND </Text>
            </TouchableOpacity>
        </View>


    );


    render() {

        return (

            <SafeAreaView style={{ flex: 1 }}>
                <HeaderSub
                    clicked={() => { this.props.navigation.goBack() }} />
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
                <ScrollView style={{ marginBottom: 20 }}>
                    <Text style={{ fontSize: 18,paddingTop:30,marginHorizontal:20 }}>Drinks</Text>
                    {/* {
                        TitleData.map(item => (
                            console.log("test ", item),
                            <View key={item}>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 20 }}>
                                    <Text>{item.title}</Text>
                                    <Text>see all</Text>
                                </View>
                            </View>
                        )
                        )
                    } */}

                    {

                        Data.map(item => (
                            console.log("test ", item),
                            <View key={item}>
                                {/* <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 20 }}>
                                    <Text>hello</Text>
                                    <Text>see all</Text>
                                </View> */}

                               
                                <FlatList
                                    data={item}
                                    showsHorizontalScrollIndicator={false}
                                    horizontal
                                    extraData={this.state}
                                    keyExtractor={this._keyExtractor}
                                    renderItem={this._renderItem}
                                    // ListHeaderComponent={<Text>{item.title}</Text>}
                                    style={{ paddingTop: 0 }}
                                />
                            </View>
                        )
                        )
                    }
                </ScrollView>

            </SafeAreaView>

        );
    }
}
const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: 'gray',
       // height: '40%'
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
export { Kind }