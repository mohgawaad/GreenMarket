import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Header } from '../../Components/Header';
import { Shadow } from '../../Components/Shadow';
import { Search } from '../../Components/Search';
//import { Images } from '../../assets/Images';
import Swiper from 'react-native-swiper';
//import { Categories } from '../Categories';

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

]
class Home extends Component {

    constructor(props) {
        super(props);
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


            <TouchableOpacity
                style={{
                    //backgroundColor:'red',
                    shadowColor: "#000",

                    shadowOpacity: 0.1,
                    shadowRadius: 13.97,

                    elevation: 2,
                    width: 150, height: 150, backgroundColor: '#fff', justifyContent: 'center',
                    alignItems: 'center'
                }}
                onPress={() => {this.props.navigation.navigate('Kind')}}

            >

                <Text
                    
                    style={{ fontSize: 18 }}> Product Name </Text>
            </TouchableOpacity>
        </View>


    );


    render() {
        /* const renderContent = (testt) => {
            return (
                <Text> Hello {testt}</Text>

            )
        } */

        return (

            <View style={{ flex: 1, }}>
                <Header />
                <Shadow>
                    <TouchableOpacity onPress={() => alert('search')}>
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
                    {/*  {renderContent('test')}
                    {renderContent('test2')}
                    {renderContent()}
                    {renderContent()} */}

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

                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 20 }}>
                                    <Text style={{ fontSize: 18 }}> {item[0].title} </Text>
                                    <Text onPress={() => this.props.navigation.navigate('Display')}>see all</Text>
                                </View>

                                <FlatList
                                    data={item}
                                    showsHorizontalScrollIndicator={false}
                                    horizontal
                                    extraData={this.state}
                                    keyExtractor={this._keyExtractor}
                                    renderItem={this._renderItem}
                                    //ListHeaderComponent={<Text>{item.id}</Text>}
                                    style={{ paddingTop: 0 }}
                                //onPress={() => this.props.navigation.navigate('Kind')}
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