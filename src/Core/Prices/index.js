import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import { HeaderSub } from '../../Components/HeaderSub';
import { Shadow } from '../../Components/Shadow';
import { Card } from '../../Components/Card';
import { Images } from '../../assets/Images';
import { SafeAreaView } from 'react-navigation';
//import Swiper from 'react-native-swiper';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Button } from '../../Components/Button';
import { Styles } from './Styles'
import { deviceDimensions } from '../../utils/device-helper'
const { deviceWidth, deviceHeight } = deviceDimensions
const TitleData = [{ title: 'test' }, { title: 'test' }, { title: 'test' }]
const SimilarData = [

    {
        title: 'Similar Items'
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


]
const Brands = [
    {
        brand: "Gohina1"
    },
    {
        brand: "Gohina2"
    },
    {
        brand: "Gohina3"
    },
    {
        brand: "Gohina4"
    }
    ,
    {
        brand: "Gohina4"
    }
]

class Prices extends Component {

    constructor(props) {
        super(props);

    }

    
    _keyExtractor = (item, index) => item.id;

    _renderItem = ({ item }) => (
        <Card style={{ marginHorizontal: 5, marginBottom: 10, backgroundColor: 'rgba(252,230,177,1)', width: deviceWidth * 0.4, height: deviceHeight * 0.1 }}>
            <Text> {item.brand}</Text>
        </Card>
    )
    _renderItem2 = ({ item }) => (
       

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
                onPress={() => { this.props.navigation.navigate('Kind') }}

            >

                <Text

                    style={{ fontSize: 18 }}> Product Name </Text>
            </TouchableOpacity>
        </View>


    );


    render() {

        return (

            <SafeAreaView style={{ flex: 1, }}>
                <HeaderSub
                IconName1='bars'
                IconName2='bell'
                    clicked={() => { this.props.navigation.goBack() }} />

                <ScrollView style={{ marginBottom: 20 }}>
                    <Text style={Styles.textTitleStyle}>Drinks</Text>
                    <View style={Styles.PurchasesStyle}>


                        <View >
                            <Card style={Styles.leftPartStyle}>
                                <Text>Hiiiii</Text>
                            </Card>
                        </View>

                        <View style={Styles.rightPartStyle}>
                            <View>
                                <Text style={Styles.priceTextStyle}>10 LE</Text>
                            </View>

                            <View style={Styles.countContainerStyle}>
                                <View style={Styles.boxStyle}>
                                    <Text style={Styles.countStyle}>1000</Text>
                                </View>

                                <View style={{ marginHorizontal: 10 }}>
                                    <TouchableOpacity
                                        onPress={() => { alert('up') }}
                                    >
                                        <Icon
                                            name="chevron-up"
                                            size={15}
                                            color={'gray'} />

                                    </TouchableOpacity>

                                    <TouchableOpacity
                                        onPress={() => { alert('down') }}>
                                        <Icon
                                            name="chevron-down"
                                            size={15}
                                            color={'gray'} />
                                    </TouchableOpacity>

                                </View>
                            </View>
                            
                            <View style={{ flexDirection: 'row' }}>
                                <View style={{ paddingTop: 20 }}>
                                    <Icon
                                        name="shopping-cart"
                                        size={25}
                                        color={'gray'} />
                                </View>


                                <Button
                                    style={Styles.buttonStyle}
                                    whenClicked={()=>{this.props.navigation.navigate('FinalCart')}}
                                    textStyle={Styles.loginText}>
                                    ADD TO CART
                            </Button>
                            </View>
                        </View>
                    </View>

                    <View style={Styles.brandsContainerStyle}>
                        <Text style={Styles.brandsTextStyle}>Brands</Text>
                        <FlatList
                            data={Brands}
                            // extraData={this.state}
                            numColumns={2}
                            keyExtractor={this._keyExtractor}
                            renderItem={this._renderItem}
                        />
                    </View>

                    <View>
                        <View style={Styles.headerSimilarStyle}>
                            <Text style={{ fontSize: 18 }}> {SimilarData[0].title} </Text>
                            <Text onPress={() => this.props.navigation.navigate('Display')}>see all</Text>
                        </View>

                        <FlatList
                            data={SimilarData}
                            showsHorizontalScrollIndicator
                            horizontal
                            extraData={this.state}
                            keyExtractor={this._keyExtractor}
                            renderItem={this._renderItem2}
                            //ListHeaderComponent={<Text>{item.id}</Text>}
                            style={{ paddingTop: 0 }}
                        //onPress={() => this.props.navigation.navigate('Kind')}
                        />
                    </View>


                </ScrollView>

            </SafeAreaView>

        );
    }
}
const styles = StyleSheet.create({

});
export { Prices }