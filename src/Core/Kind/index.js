import React, { Component } from 'react';
import { Platform, FlatList, StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import { HeaderSub } from '../../Components/HeaderSub';
import { Shadow } from '../../Components/Shadow';
import { Search } from '../../Components/Search';
import { Images } from '../../assets/Images';
import { SafeAreaView } from 'react-navigation';
import Swiper from 'react-native-swiper';
import axios from 'axios'
import { Styles } from './Styles'

const TitleData = [{ title: 'test' }, { title: 'test' }, { title: 'test' }]

class Kind extends Component {

    constructor(props) {
        super(props);
        //this.props.navigation.navigate('Intro')
        this.state={
        }
        /* this.state = {
            Data: [

                {
                    id: 0,
                    title: 'Categores'
                }, {
                    id: 1,
                    image: '../../assets/Images/hand.png'
                },
                {
                    id: 2,
                    image: '../../assets/Images/hand.png'
                },
                {
                    id: 3,
                    image: '../../assets/Images/hand.png'
                },
                {
                    id: 4,
                    image: '../../assets/Images/hand.png'
                },
                {
                    id: 5,
                    image: '../../assets/Images/hand.png'
                },




            ]
        } */

    }
    _keyExtractor = (item, index) => {/*  alert("extractor "+item.id) ; */return item.id };

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

{console.log("item",item)}
            <TouchableOpacity style={Styles.shadowStyle}
                onPress={() => { this.props.navigation.navigate('Prices') }}
            //onPress={()=> this.handleItemPressed(item.id)}
            >
                <Text style={{ fontSize: 18 }}>  {item.name} </Text>
            </TouchableOpacity>
        </View>


    );

    handleItemPressed = (id) => {
        console.log("id", id)
        const filterData = this.state.Data.filter(item => item.id !== id)
        // alert(filterData)
        console.log(filterData)
        this.setState({ Data: filterData })

        // Data = filterData;
    }
    render() {
        const data = this.props.navigation.getParam('DataKind')
   
        //const title = this.props.navigation.getParam('Title')
        console.log('datadatadatadata ' , data)

        return (

            <SafeAreaView style={{ flex: 1 }}>
                <HeaderSub
                    IconName1='bars'
                    IconName2='bell'
                    clicked={() => { this.props.navigation.goBack() }} />
                <Shadow>
                    <TouchableOpacity onPress={() => { alert('search') }} style={{ paddingTop: Platform.OS == "android" ? 17 : 0, }}>
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
                    <Text style={Styles.titleStyle}>Drinks</Text>
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





                    <FlatList
                        data={data}
                        showsHorizontalScrollIndicator={false}
                        numColumns={2}
                        extraData={this.state}
                        keyExtractor={this._keyExtractor}
                        renderItem={this._renderItem}
                        // ListHeaderComponent={<Text>{item.title}</Text>}
                        style={{ paddingTop: 0 }}
                    />

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