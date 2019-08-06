import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Header } from '../../Components/Header';
import { Shadow } from '../../Components/Shadow';
import { Search } from '../../Components/Search';
import { Images } from '../../assets/Images';
import Swiper from 'react-native-swiper';
//import { Categories } from '../Categories';
import { Styles } from './Styles'
//import console = require('console');
const Data = [
    {
        id: 0,
        title: 'mohamed',
        // image: '../../assets/Images/hand.png'
    },
    {
        id: 1,
        title: 'ahmed'
    },
    {
        id: 2,
        title: 'ali'
    },
    {
        id: 3,
        title: 'samy'
    },
    {
        id: 4,
        title: 'hossam'
    },

]

class Goo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            myData: Data
        }
    }
    _keyExtractor = (item, index) => item.id;

    _renderItem = ({ item }) => (
        <TouchableOpacity style={{ width: 100, height: 100, borderRadius: 5, borderWidth: 1, borderColor: 'red', backgroundColor: 'green', marginVertical: 20 }}
            onPress={() => this.itemPressed(item.id)}
        >
            <Text>{item.title}</Text>

            
        </TouchableOpacity>
    );

    _renderItem2 = ({ item }) => (
        <TouchableOpacity style={{ width: 100, height: 100, borderRadius: 5, borderWidth: 1, borderColor: 'red', backgroundColor: 'green', marginVertical: 20 }}
            //onPress={() => this.itemPressed(item.id)}
        >
            <Image source={Images.hand} style={{width: 100,height: 100,}}/>
            
        </TouchableOpacity>
    );

    
    itemPressed = (id) => {
        const filterData = this.state.myData.filter(item => item.id !== id)
        this.setState({ myData: filterData })
    }

    render() {


        return (

            <View style={{ flex: 1, }}>
                <Header />
                <Shadow>
                    <TouchableOpacity onPress={() => alert('search')}>
                        <Search />
                    </TouchableOpacity>
                </Shadow>

                <View style={{ marginBottom: 20, alignItems: 'center',flex:1 }}>

                    <FlatList
                        data={this.state.myData}
                        extraData={this.state}
                        keyExtractor={this._keyExtractor}
                        renderItem={this._renderItem}
                        numColumns={2}
                    //horizontal
                    />

                    <FlatList
                        data={Data}
                        extraData={this.state}
                        keyExtractor={this._keyExtractor}
                        renderItem={this._renderItem2}
                        numColumns={2}
                    //horizontal
                    />

                </View>

            </View>

        );
    }
}
const styles = StyleSheet.create({


});
export { Goo }