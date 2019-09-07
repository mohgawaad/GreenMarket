import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  StatusBar,
  AsyncStorage
} from "react-native";
import { Images } from "../../assets/Images";
//import { SafeAreaView } from 'react-navigation';

import { styles } from "./style";

class Splash extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    // setTimeout(() => {}, 2000)
    this._retrieveData();
  }
  _retrieveData = async () => {
    console.log("iiin");
    // AsyncStorage.removeItem("@NEWUSER");

    try {
      const value = await AsyncStorage.getItem("@NEWUSER");
      console.log("tryyyyy", value);

      if (value !== null) {
        // We have data!!
        this.props.navigation.navigate("Home");
        console.log(value);
        console.log("yeeeees");
      } else {
        console.log("yeeeees");

        this.props.navigation.navigate("Intro");
      }
    } catch (error) {
      this.props.navigation.navigate("Intro");
      console.log("errrrror");
      // Error retrieving data
    }
  };
  render() {
    return (
      <ImageBackground
        source={Images.splashBg}
        style={styles.imageBacStyle}
      ></ImageBackground>
    );
  }
}

export { Splash };
