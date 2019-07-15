

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TextInput, StatusBar, Image, ScrollView } from 'react-native';
//import { Images } from '../../assets/Images'
import { Button } from '../../Components/Button';
import { Input } from '../../Components/Input';
import { SafeAreaView } from 'react-navigation';

import { Styles } from './style'

class Reset extends Component {

    signUpFun = () => {
        this.props.navigation.navigate('SignUp')
    }

    forgittenFun = () => {
        this.props.navigation.navigate('SignUp')
    }
    render() {



        return (
            <SafeAreaView style={{ flex: 1 }}>
                <ScrollView>
                    <View style={Styles.containerStyle}>
                        <View style={Styles.backStyle}>
                            <Text
                                onPress={() => this.props.navigation.goBack()}
                                style={{ fontSize: 30 }}>&larr;</Text>
                        </View>

                        <View style={Styles.logInViewStyle}>
                            <Text style={Styles.logInTextStyle}>RESET</Text>
                        </View>

                        <View style={Styles.emailOuterContainer}>

                            <View style={Styles.emailContainer}>
                                <Text style={Styles.LabelStyle}>E_MAIL :</Text>
                                <Input
                                    Inputstyle={{ borderBottomWidth: 0.5, borderWidth: 0 }}
                                    //style={inputContainer}
                                    keyboardType="phone-pad"

                                    placeholderTextColor='white'
                                    placeholder='Phone'

                                //onChangeText={this.onPhoneChange.bind(this)}
                                //value={this.props.phone}
                                />
                            </View>


                        </View>



                        <View style={{ flex: 1 }}>
                            <Button style={Styles.signUpBtnStyle} textStyle={{ fontSize: 19, fontWeight: '900', }}>RESET</Button>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }

}


export { Reset }