import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  AsyncStorage
} from "react-native";
//import { Images } from '../../assets/Images'
import { Button } from "../../Components/Button";
import { Input } from "../../Components/Input";
import { SafeAreaView } from "react-navigation";
import axios from "axios";
import { Styles } from "./style";
import validator from "validator";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      valid: false
    };
  }

  _SignUp() {
    const { name, email, password, confirmPassword } = this.state;
    axios
      .post("http://market360.herokuapp.com/api/auth/register", {
        name: name,
        email: email,
        password: password,
        password_confirmation: confirmPassword
      })
      .then(res => {
        this._storeDAta(res);
        this.props.navigation.navigate("Home");
      })
      .catch(err => alert(err));
  }

  _storeDAta = async res => {
    try {
      await AsyncStorage.setItem("@NEWUSER", res.data.token);
    } catch (error) {
      console.log("error ", error);
    }
  };

  _onSubmit() {
    if (
      validator.isEmail(this.state.email) &&
      validator.matches(
        this.state.password,
        /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}/
      ) &&
      validator.matches(this.state.name, /^[a-zA-Z0-9_-]*$/) &&
      validator.matches(
        this.state.confirmPassword,
        /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}/
      )
    ) {
      if (this.state.password == this.state.confirmPassword) {
        this._SignUp();
      } else {
        alert("please entered password coorectely ");
      }
    } else alert("no");

    if (this.state.valid) {
      console.log("this is valid");
    }
  }

  logInFun = () => {
    this.props.navigation.navigate("Login");
  };
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView>
          <View style={Styles.containerStyle}>
            <View style={Styles.backStyle}>
              <Text
                onPress={() => this.props.navigation.goBack()}
                style={{ fontSize: 30 }}
              >
                &larr;
              </Text>
            </View>
            <View style={Styles.signUpViewStyle}>
              <Text style={Styles.signUpTextStyle}>SIGN UP</Text>
            </View>
            <View style={{ justifyContent: "space-between", flex: 1 }}>
              <View style={Styles.nameContainer}>
                <Text style={Styles.LabelStyle}>NAME :</Text>
                <Input
                  Inputstyle={{ borderBottomWidth: 0.5, borderWidth: 0 }}
                  keyboardType="phone-pad"
                  placeholderTextColor="white"
                  placeholder="Phone"
                  onChangeText={text => this.setState({ name: text })}
                  //value={this.props.phone}
                />
              </View>
              <View style={Styles.emailBasswodContainer}>
                <Text style={Styles.LabelStyle}>E_MAIL :</Text>
                <Input
                  Inputstyle={{ borderBottomWidth: 0.5, borderWidth: 0 }}
                  //style={inputContainer}
                  keyboardType="phone-pad"
                  placeholderTextColor="white"
                  placeholder="Phone"
                  onChangeText={text => this.setState({ email: text })}
                  //value={this.props.phone}
                />
              </View>

              <View style={Styles.emailBasswodContainer}>
                <Text style={Styles.LabelStyle}>PASSWORD :</Text>
                <Input
                  Inputstyle={{ borderBottomWidth: 0.5, borderWidth: 0 }}
                  //style={inputContainer}
                  placeholderTextColor="white"
                  secureTextEntry
                  secure={true}
                  placeholder="Password"
                  onChangeText={text => this.setState({ password: text })}
                  //value={this.props.password}
                />
              </View>
              <View style={Styles.emailBasswodContainer}>
                <Text style={Styles.LabelStyle}>CONFIRM-PASSWORD :</Text>
                <Input
                  Inputstyle={{ borderBottomWidth: 0.5, borderWidth: 0 }}
                  //style={inputContainer}
                  placeholderTextColor="white"
                  secureTextEntry
                  secure={true}
                  placeholder="Password"
                  onChangeText={text =>
                    this.setState({ confirmPassword: text })
                  }
                  //value={this.props.password}
                />
              </View>
            </View>
            <View style={{ flex: 1 }}>
              <Button
                style={Styles.signUpBtnStyle}
                whenClicked={() => this._onSubmit()}
                textStyle={{ fontSize: 19, fontWeight: "900" }}
              >
                SIGN UP
              </Button>
              <TouchableOpacity onPress={() => this.logInFun()}>
                <Text style={Styles.alreadyHaveStyle}>
                  ALREADY HAVE AN ACCOUNT?
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

export { SignUp };
