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
import { deviceDimensions } from "../../utils/device-helper";

import { addToCart } from "../../redux/actions";
import { bindActionCreators } from "redux";

const { deviceWidth, deviceHeight } = deviceDimensions;
//import {   } from "../../redux/actions";
import { connect } from "react-redux";
//import { bindActionCreators } from "redux";
const TitleData = [{ title: "test" }, { title: "test" }, { title: "test" }];

class FinalCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      testCount: ""
    };
    //this.props.navigation.navigate('Intro')
  }

  _keyExtractor = (item, index) => item.id;

  _renderItem = ({ item }) => {
    console.log("ITEMMMM =>>>>> ", item.item);
    return (
      <View style={Styles.ProcurementListStyle}>
        <View style={{}}>
          <Text style={Styles.nameOfProductStyle}>{item[1]}</Text>

          <Card style={Styles.cardStyle}>
            <Text>{item[0].item.name}</Text>
          </Card>
        </View>
        <View style={Styles.productDetailsStyle}>
          <View>
            <Text style={{ fontSize: 30 }}>
              {item[0].item.price * item[2]} LE
            </Text>
          </View>
          <View style={Styles.countCountainerStyle}>
            <View style={Styles.boxCountStyle}>
              <Text style={Styles.textCountStyle}>{item[2]}</Text>
            </View>
            <View style={{ marginHorizontal: 10 }}>
              <TouchableOpacity
                onPress={() => {
                  this.upFun(item[0].item.id);
                }}
              >
                <Icon name="chevron-up" size={15} color={"gray"} />
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  this.downFun(item[0].item.id);
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
              this.closeFun(item[0].item.id);
            }}
          >
            <Icon name="window-close" size={25} color={"gray"} />
          </TouchableHighlight>
        </View>
      </View>
    );
  };

  upFun = id => {
    let data = this.props.myOrder;

    /* */

    data = data.filter(item => {
      if (item[0].item.id == id) {
        return item[2]++;
      } else return true;
    });

    this.props.addToCart(data);
  };

  downFun = id => {
    let data = this.props.myOrder;

    /* */

    data = data.filter(item => {
      if (item[0].item.id == id) {
        return item[2] > 1 ? item[2]-- : item[2];
      } else return true;
    });

    this.props.addToCart(data);
  };
  closeFun = id => {
    let data = this.props.myOrder;

    /* */

    data = data.filter(item => {
      return item[0].item.id !== id;
    });

    this.props.addToCart(data);
    // console.log("datadata>>>>>>data", this.props.myOrder);
  };
  render() {
    console.log("this.props.myOrder >>", this.props.myOrder);
    //console.log('DATA >>',this.props.navigation.getParam('DATA'))
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
        <ScrollView style={{ marginBottom: 20 }}>
          <View>
            <FlatList
              data={this.props.myOrder}
              showsHorizontalScrollIndicator={false}
              //   horizontal
              // extraData={this.state}
              keyExtractor={this._keyExtractor}
              renderItem={this._renderItem}
              //ListHeaderComponent={<Text>{item.id}</Text>}
              style={{ paddingTop: 0 }}
              //numColumns={2}
            />
          </View>
        </ScrollView>
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
  const { myOrder } = state.kindd;
  const { qty } = state.qun;
  console.log("myOrder  ", myOrder);
  console.log("qty  ", qty);
  return { myOrder, qty };
};
const mapDispatchToProps = dispatch => {
  return bindActionCreators({ addToCart }, dispatch);
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FinalCart);
