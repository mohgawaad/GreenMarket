import React, { Component } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  TouchableHighlight
} from "react-native";
import { HeaderSub } from "../../Components/HeaderSub";
import { Shadow } from "../../Components/Shadow";
import { Card } from "../../Components/Card";
import { Images } from "../../assets/Images";
import { SafeAreaView } from "react-navigation";
//import Swiper from 'react-native-swiper';
import Icon from "react-native-vector-icons/FontAwesome5";
import { Button } from "../../Components/Button";
import { Styles } from "./Styles";

import { changeQty, addToCart } from "../../redux/actions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { deviceDimensions } from "../../utils/device-helper";
const { deviceWidth, deviceHeight } = deviceDimensions;
const TitleData = [{ title: "test" }, { title: "test" }, { title: "test" }];

class FinalCart extends Component {
  constructor(props) {
    super(props);
    //this.props.navigation.navigate('Intro')
  }

  _keyExtractor = (item, index) => item.id;

  renderItems = ({ item }) => {
    <View style={Styles.ProcurementListStyle}>
      <View style={{}}>
        <Text style={Styles.nameOfProductStyle}>Drinks</Text>

        <Card style={Styles.cardStyle}>
          <Text>Hiiiii</Text>
        </Card>
      </View>
      <View style={Styles.productDetailsStyle}>
        <View>
          <Text style={{ fontSize: 30 }}>10 LE</Text>
        </View>
        <View style={Styles.countCountainerStyle}>
          <View style={Styles.boxCountStyle}>
            <Text style={Styles.textCountStyle}>1000</Text>
          </View>
          <View style={{ marginHorizontal: 10 }}>
            <TouchableOpacity
              onPress={() => {
                alert("up");
              }}
            >
              <Icon name="chevron-up" size={15} color={"gray"} />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                alert("down");
              }}
            >
              <Icon name="chevron-down" size={15} color={"gray"} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={Styles.closeCountainer}>
        <TouchableHighlight
          onPress={() => {
            alert("close");
          }}
        >
          <Icon name="window-close" size={25} color={"gray"} />
        </TouchableHighlight>
      </View>
    </View>;
  };

  render() {
    console.log("data here => ", this.props.data);
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <HeaderSub
          IconName1="bars"
          IconName2="shopping-cart"
          clicked={() => {
            this.props.navigation.goBack();
          }}
        />
        <View style={{ alignItems: "center" }}>
          <Image style={{ alignItems: "stretch" }} source={Images.finalCart} />
        </View>
          <FlatList
          data={this.props.data}
          renderItem={this.renderItems}
          keyExtractor={this._keyExtractor}
        />
        <View style={Styles.confirmationStyle}>
          <Button
            style={Styles.loginStyle}
            whenClicked={this.LoginClickHandler}
            textStyle={Styles.loginText}
          >
            CHECK OUT
          </Button>
          <Button
            style={Styles.signUpStyle}
            whenClicked={this.SkibFun}
            textStyle={Styles.signUpText}
          >
            SHOP AGAIN
          </Button>
        </View>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({});

const mapStateToProps = state => {
  const { data } = state.cartRed;
  return { data };
};

export default connect(mapStateToProps)(FinalCart);
