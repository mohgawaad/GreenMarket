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
import { TouchableHighlight } from 'react-native-gesture-handler';
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

class FinalCart extends Component {

    constructor(props) {
        super(props);
        //this.props.navigation.navigate('Intro')

    }


    _keyExtractor = (item, index) => item.id;





    render() {

        return (

            <SafeAreaView style={{ flex: 1, }}>
                <HeaderSub
                    IconName1='bars'
                    IconName2='shopping-cart'
                    clicked={() => { this.props.navigation.goBack() }} />
                <View style={{ alignItems: 'center' }}>
                    <Image style={{ alignItems: 'stretch' }} source={Images.finalCart} />
                </View>
                <ScrollView style={{ marginBottom: 20 }}>
                    <Text style={{ fontSize: 18, paddingTop: 30, marginHorizontal: 20 }}>Drinks</Text>
                    <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'center', }}>


                        <View style={{}}>
                            <Card style={{ margin: 10, backgroundColor: 'lightyellow' }}>
                                <Text>Hiiiii</Text>
                            </Card>
                        </View>
                        <View style={{ flex: 1, alignSelf: 'center', alignItems: 'center', margin: 10 }}>
                            <View style={{}}>
                                <Text style={{ fontSize: 30 }}>10 LE</Text>
                            </View>
                            <View style={{ flexDirection: 'row', marginHorizontal: 40, }}>
                                <View style={{ borderWidth: 1, alignItems: 'center', justifyContent: 'center' }}>
                                    <Text style={{ textAlign: 'center', paddingHorizontal: 5 }}>1000</Text>
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

                        </View>
                        <View style={{ marginRight: 10, justifyContent: 'center' }}>

                            <TouchableHighlight
                                onPress={() => { alert('close') }}
                            >
                                <Icon
                                    name="window-close"
                                    size={25}
                                    color={'gray'} />
                            </TouchableHighlight>
                        </View>
                    </View>


                    <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'center', }}>


                        <View style={{}}>
                            <Card style={{ margin: 10, backgroundColor: 'lightyellow' }}>
                                <Text>Hiiiii</Text>
                            </Card>
                        </View>
                        <View style={{ flex: 1, alignSelf: 'center', alignItems: 'center', margin: 10 }}>
                            <View style={{}}>
                                <Text style={{ fontSize: 30 }}>10 LE</Text>
                            </View>
                            <View style={{ flexDirection: 'row', marginHorizontal: 40, }}>
                                <View style={{ borderWidth: 1, alignItems: 'center', justifyContent: 'center' }}>
                                    <Text style={{ textAlign: 'center', paddingHorizontal: 5 }}>1000</Text>
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

                        </View>
                        <View style={{ marginRight: 10, justifyContent: 'center' }}>

                            <TouchableHighlight
                                onPress={() => { alert('close') }}
                            >
                                <Icon
                                    name="window-close"
                                    size={25}
                                    color={'gray'} />
                            </TouchableHighlight>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'center', }}>


                        <View style={{}}>
                            <Card style={{ margin: 10, backgroundColor: 'lightyellow' }}>
                                <Text>Hiiiii</Text>
                            </Card>
                        </View>
                        <View style={{ flex: 1, alignSelf: 'center', alignItems: 'center', margin: 10 }}>
                            <View style={{}}>
                                <Text style={{ fontSize: 30 }}>10 LE</Text>
                            </View>
                            <View style={{ flexDirection: 'row', marginHorizontal: 40, }}>
                                <View style={{ borderWidth: 1, alignItems: 'center', justifyContent: 'center' }}>
                                    <Text style={{ textAlign: 'center', paddingHorizontal: 5 }}>1000</Text>
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

                        </View>
                        <View style={{ marginRight: 10, justifyContent: 'center' }}>

                            <TouchableHighlight
                                onPress={() => { alert('close') }}
                            >
                                <Icon
                                    name="window-close"
                                    size={25}
                                    color={'gray'} />
                            </TouchableHighlight>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'center', }}>


                        <View style={{}}>
                            <Card style={{ margin: 10, backgroundColor: 'lightyellow' }}>
                                <Text>Hiiiii</Text>
                            </Card>
                        </View>
                        <View style={{ flex: 1, alignSelf: 'center', alignItems: 'center', margin: 10 }}>
                            <View style={{}}>
                                <Text style={{ fontSize: 30 }}>10 LE</Text>
                            </View>
                            <View style={{ flexDirection: 'row', marginHorizontal: 40, }}>
                                <View style={{ borderWidth: 1, alignItems: 'center', justifyContent: 'center' }}>
                                    <Text style={{ textAlign: 'center', paddingHorizontal: 5 }}>1000</Text>
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

                        </View>
                        <View style={{ marginRight: 10, justifyContent: 'center' }}>

                            <TouchableHighlight
                                onPress={() => { alert('close') }}
                            >
                                <Icon
                                    name="window-close"
                                    size={25}
                                    color={'gray'} />
                            </TouchableHighlight>
                        </View>
                    </View>


                </ScrollView>
                <View style={{ alignItems: "center", flexDirection: 'column', }}>
                    <Button
                        style={Styles.loginStyle}
                        whenClicked={this.LoginClickHandler}
                        textStyle={Styles.loginText}>
                        CHECK OUT
                            </Button>
                    <Button style={Styles.signUpStyle}
                        whenClicked={this.SkibFun} textStyle={Styles.signUpText}>SHOP AGAIN</Button>
                </View>

            </SafeAreaView>

        );
    }
}
const styles = StyleSheet.create({

});
export { FinalCart }