import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import { HeaderSub } from '../../Components/HeaderSub';
import { Shadow } from '../../Components/Shadow';
import { Search } from '../../Components/Search';
import { Images } from '../../assets/Images';
import { SafeAreaView } from 'react-navigation';

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


            <View style={{
                shadowColor: "#000",

                shadowOpacity: 0.1,
                shadowRadius: 13.97,

                elevation: 2,
                width: 150, height: 150, backgroundColor: '#fff', justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Text style={{ fontSize: 18 }}> Product Name </Text>
            </View>
        </View>


    );


    render() {

        return (

            <SafeAreaView style={{ flex: 1, }}>
                <HeaderSub 
                clicked={()=>{this.props.navigation.goBack()}}/>
                <Shadow>
                    <TouchableOpacity onPress={() => { alert('search') }}>
                        <Search />
                    </TouchableOpacity>
                </Shadow>

                <ScrollView style={{ marginBottom: 20 }}>

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
                                    //ListHeaderComponent={<Text>{item.id}</Text>}
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