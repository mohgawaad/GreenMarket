

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
//import { Images } from '../../assets/Images'
import { Button } from '../../Components/Button';
import { Input } from '../../Components/Input';
import { SafeAreaView } from 'react-navigation';
import { Styles } from './style'

class SignUp extends Component {

    logInFun = () => {
        this.props.navigation.navigate('Login')
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
                        <View style={Styles.signUpViewStyle}>
                            <Text style={Styles.signUpTextStyle}>SIGN UP</Text>
                        </View>
                        <View style={{ justifyContent: 'space-between', flex: 1 }}>
                            <View style={Styles.nameContainer}>
                                <Text style={Styles.LabelStyle}>NAME :</Text>
                                <Input
                                    Inputstyle={{ borderBottomWidth: 0.5, borderWidth: 0 }}
                                    keyboardType="phone-pad"

                                    placeholderTextColor='white'
                                    placeholder='Phone'
                                //onChangeText={this.onPhoneChange.bind(this)}
                                //value={this.props.phone}
                                />

                            </View>
                            <View style={Styles.emailBasswodContainer}>
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

                            <View style={Styles.emailBasswodContainer}>
                                <Text style={Styles.LabelStyle}>PASSWORD :</Text>
                                <Input
                                    Inputstyle={{ borderBottomWidth: 0.5, borderWidth: 0 }}
                                    //style={inputContainer}
                                    placeholderTextColor='white'
                                    secureTextEntry
                                    secure={true}
                                    placeholder='Password'
                                //onChangeText={this.onPasswordChange.bind(this)}
                                //value={this.props.password}
                                />
                            </View>
                        </View>
                        <View style={{ flex: 1 }}>
                            <Button style={Styles.signUpBtnStyle} textStyle={{ fontSize: 19, fontWeight: '900', }}>SIGN UP</Button>
                            <TouchableOpacity onPress={() => this.logInFun()} >
                                <Text style={Styles.alreadyHaveStyle}>ALREADY HAVE AN ACCOUNT?
                                    <Text style={Styles.textLogin}> Login</Text>
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>

        );
    }

}


export { SignUp }