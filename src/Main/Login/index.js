

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
//import { Images } from '../../assets/Images'
import { Button } from '../../Components/Button';
import { Input } from '../../Components/Input';
//import { SafeAreaView } from 'react-navigation';

import { Styles } from './style'
//import { Home } from '../../Core/Home';
//import { Shadow } from '../../Components/Shadow';

class Login extends Component {

    signUpFun = () => {
        this.props.navigation.navigate('SignUp')
    }

    forgittenFun = () => {
        this.props.navigation.navigate('Reset')
    }

    SkibFun = () => {
        this.props.navigation.navigate('Home')
    }
    render() {



        return (
            <ScrollView>
                <View style={Styles.containerStyle}>
                    <View style={Styles.backStyle}>
                        <Text
                            onPress={() => this.props.navigation.goBack()}
                            style={{ fontSize: 30 }}>&larr;</Text>
                    </View>
                    <View style={Styles.logInViewStyle}>
                        <Text style={Styles.logInTextStyle}>LOGIN</Text>
                    </View>
                    <View style={{ justifyContent: 'space-between', flex: 1 }}>
                        {/* <View style={{ marginTop: 70, justifyContent: 'flex-start' }}>
                            <Text style={Styles.LabelStyle}>NAME :</Text>
                            <Input

                                //style={inputContainer}
                                keyboardType="phone-pad"

                                placeholderTextColor='white'
                                placeholder='Phone'
                            //onChangeText={this.onPhoneChange.bind(this)}
                            //value={this.props.phone}
                            />
                       
                        </View> */}
                        <View style={{ marginTop: 15, justifyContent: 'flex-start' }}>
                            <Text style={Styles.LabelStyle}>E_MAIL :</Text>
                            <Input

                                //style={inputContainer}
                                keyboardType="phone-pad"

                                placeholderTextColor='white'
                                placeholder='Phone'

                            //onChangeText={this.onPhoneChange.bind(this)}
                            //value={this.props.phone}
                            />
                        </View>

                        <View style={{ marginTop: 15, justifyContent: 'flex-start' }}>
                            <Text style={Styles.LabelStyle}>PASSWORD :</Text>
                            <Input

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

                    <View>
                        <Text
                            style={Styles.ForgittenStyle}
                            onPress={() => this.forgittenFun()} >
                            FORGITTEN THE PASSWORD?
                        </Text>
                    </View>
                   
                        <View style={{ flex: 1 }}>
                            <Button style={Styles.signUpBtnStyle} textStyle={{ fontSize: 19, fontWeight: '900', }}>LOGIN</Button>
                            <TouchableOpacity onPress={() => this.signUpFun()}>
                                <Text style={Styles.alreadyHaveStyle}>DONT HAVE AN ACCOUNT?
                        <Text style={{ color: '#8BD391', fontSize: 19 }}> SIGIN UP</Text>
                                </Text>
                            </TouchableOpacity>
                            <Button style={Styles.signUpStyle}
                                whenClicked={this.SkibFun} textStyle={Styles.signUpText}>SKIP</Button>
                        </View>
                     
                </View>
            </ScrollView>

        );
    }

}


export { Login }