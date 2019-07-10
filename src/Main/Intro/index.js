

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, ImageBackground, StatusBar, Image } from 'react-native';
import { Images } from '../../assets/Images';
import { Button } from '../../Components/Button';
import { Styles } from './style';
class Intro extends Component {

    
    
    LoginClickHandler = () => {
        this.props.navigation.navigate('Login');
    }

    
    SignUpClickHandler = () => {
        this.props.navigation.navigate('SignUp');
    }
    render() {


        return (
            <View style={Styles.containerStyle}>
                <View style={{ flex: 1 }}>
                    <View >
                        <Text style={Styles.textStyle}>WELCOME TO <Text style={Styles.WelStyle}> GREENCART</Text></Text>
                    </View>
                    <View >
                        <Text style={Styles.textStyle}> EXPLORE US</Text>
                    </View>
                </View>
                <View style={Styles.imageViewStyle}>
                    <Image source={Images.hand} style={Styles.imageStyle} />
                </View>
                <View style={Styles.registerContainer}>
                    <Text style={Styles.registerText}>REGISTER</Text>
                    <Button style={Styles.loginStyle}
                    whenClicked={this.LoginClickHandler} textStyle={Styles.loginText}>login</Button>
                    <Button style={Styles.signUpStyle} 
                    whenClicked={this.SignUpClickHandler} textStyle={Styles.signUpText}>SIGN UP</Button>

                </View>

            </View>


        );
    }

}


export { Intro }