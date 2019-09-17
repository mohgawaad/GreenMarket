import React, { Component } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView
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
//import console = require('console');
//import axios from 'axios'

import { changeQty, addToCart } from "../../redux/actions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

const { deviceWidth, deviceHeight } = deviceDimensions;
const TitleData = [{ title: "test" }, { title: "test" }, { title: "test" }];
const SimilarData = [
  {
    title: "Similar Items"
  },
  {
    id: 1,
    image: require("../../assets/Images/hand.png")
  },
  {
    id: 2,
    image: require("../../assets/Images/hand.png")
  },
  {
    id: 3,
    image: require("../../assets/Images/hand.png")
  },
  {
    id: 4,
    image: require("../../assets/Images/hand.png")
  },
  {
    id: 5,
    image: require("../../assets/Images/hand.png")
  }
];
const Brands = [
  {
    brand: "Gohina1"
  },
  {
    brand: "Gohina2"
  },
  {
    brand: "Gohina3"
  },
  {
    brand: "Gohina4"
  },
  {
    brand: "Gohina4"
  }
];

class Prices extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //quantity: 1,
      dataItem: this.props.navigation.getParam("Item"),
      dataTitle: this.props.navigation.getParam("MyTitle"),
      arr: [],
      count: 1
    };
    console.log("dataTitle ", this.state.dataTitle);
  }

  _keyExtractor = (item, index) => item.id;

  _renderItem = ({ item }) => (
    <Card style={Styles.cardStyle}>
      <Text> {item.brand}</Text>
    </Card>
  );
  _renderItem2 = ({ item }) => (
    <View style={{ margin: 20 }}>
      <TouchableOpacity
        style={Styles.shadowStyle}
        onPress={() => {
          this.props.navigation.navigate("Kind");
        }}
      >
        <Text style={{ fontSize: 18 }}> Product Name </Text>
      </TouchableOpacity>
    </View>
  );
  decOfMount = () => {
    if (this.state.count > 1) {
      //this.props.changeQty
      this.setState({ count: this.state.count - 1 });
    }
  };
  componentWillReceiveProps(nextProps) {
    console.log("nextPPrrops ==>", nextProps);
    this.setState({ count: 1, arr: this.props.myOrder });
  }

  render() {
    const { dataTitle, dataItem, arr } = this.state;

    console.log("DATAITEM =>>>>>", this.props.itemOfCart.item);
    console.log("DATAITEM Order =>>>>>", this.props.myOrder);

    return (
      <SafeAreaView style={{ flex: 1 }}>
        <HeaderSub
          IconName1="bars"
          IconName2="bell"
          clicked={() => {
            this.props.navigation.navigate("Kind");
          }}
        />

        <ScrollView style={{ marginBottom: 20 }}>
          <Text style={Styles.textTitleStyle}>{this.props.myTitle}</Text>
          <View style={Styles.PurchasesStyle}>
            <View>
              <Card style={Styles.leftPartStyle}>
                <Text>{this.props.itemOfCart.item.name}</Text>
              </Card>
            </View>

            <View style={Styles.rightPartStyle}>
              <View>
                <Text style={Styles.priceTextStyle}>
                  {this.props.itemOfCart.item.price * this.state.count} LE
                </Text>
              </View>

              <View style={Styles.countContainerStyle}>
                <View style={Styles.boxStyle}>
                  <Text style={Styles.countStyle}>{this.state.count}</Text>
                </View>

                <View style={{ marginHorizontal: 10 }}>
                  <TouchableOpacity
                    onPress={() => {
                      //this.props.changeQty
                      this.setState({ count: this.state.count + 1 });
                    }}
                  >
                    <Icon name="chevron-up" size={15} color={"gray"} />
                  </TouchableOpacity>

                  <TouchableOpacity
                    onPress={() => {
                      this.decOfMount();
                    }}
                  >
                    <Icon name="chevron-down" size={15} color={"gray"} />
                  </TouchableOpacity>
                </View>
              </View>

              <View style={{ flexDirection: "row" }}>
                <View style={{ paddingTop: 20 }}>
                  <Icon name="shopping-cart" size={25} color={"gray"} />
                </View>

                <Button
                  style={Styles.buttonStyle}
                  whenClicked={() => {
                    arr.push([
                      this.props.itemOfCart,
                      this.props.myTitle,
                      this.state.count
                    ]);
                    this.props.navigation.navigate("FinalCart", { DATA: arr });
                    this.props.addToCart(arr);
                  }}
                  textStyle={Styles.loginText}
                >
                  ADD TO CART
                </Button>
              </View>
            </View>
          </View>

          <View style={Styles.brandsContainerStyle}>
            <Text style={Styles.brandsTextStyle}>Brands</Text>
            <FlatList
              data={Brands}
              // extraData={this.state}
              numColumns={2}
              keyExtractor={this._keyExtractor}
              renderItem={this._renderItem}
            />
          </View>

          <View>
            <View style={Styles.headerSimilarStyle}>
              <Text style={{ fontSize: 18 }}> {SimilarData[0].title} </Text>
              <Text onPress={() => this.props.navigation.navigate("Display")}>
                see all
              </Text>
            </View>

            <FlatList
              data={SimilarData}
              showsHorizontalScrollIndicator
              horizontal
              extraData={this.state}
              keyExtractor={this._keyExtractor}
              renderItem={this._renderItem2}
              //ListHeaderComponent={<Text>{item.id}</Text>}
              style={{ paddingTop: 0 }}
              //onPress={() => this.props.navigation.navigate('Kind')}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({});
const mapStateToProps = state => {
  const { qty } = state.qun;
  const { itemOfCart, myOrder, myTitle } = state.kindd;
  console.log("myTitle  ", myTitle);
  return { qty, itemOfCart, myOrder, myTitle };
};
const mapDispatchToProps = dispatch => {
  return bindActionCreators({ changeQty, addToCart }, dispatch);
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Prices);
