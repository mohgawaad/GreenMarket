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
import { Header } from "../../Components/Header";
import { Shadow } from "../../Components/Shadow";
import { Search } from "../../Components/Search";
import { Loading } from "../../Components/Loading";

import { kindHandler } from "../../redux/actions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

//import { Images } from '../../assets/Images';
import Swiper from "react-native-swiper";
//import { Categories } from '../Categories';
import { Styles } from "./Styles";
import axios from "axios";
//const TitleData = [{ title: 'test' }, { title: 'test' }, { title: 'test' }]
/* import {
    Placeholder,
    PlaceholderMedia,
    PlaceholderLine,
    Fade, Shine, ShineOverlay
} from "rn-placeholder"; */

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      DataCategories: [],
      DataOfferes: [],
      DataBestSelling: [],

      dataFlageCat: false,
      dataFlageOff: false,
      dataFlageBest: false,
      links: {}
    };
  }
  _keyExtractor = (item, index) => item.id;

  _renderItem = ({ item }) => (
    <View style={{ margin: 20 }}>
      <TouchableOpacity
        style={Styles.shadowStyle}
        //onPress={() => { this.props.navigation.navigate('Kind') }}
        onPress={() => {
          this.myKindHandeler(item.link, item.name);
        }}
      >
        <Text style={{ fontSize: 18 }}> {item.name}</Text>
      </TouchableOpacity>
    </View>
  );

  componentDidMount() {
    axios
      .get("http://market360.herokuapp.com/api")
      .then(res => {
        this.setState({
          DataCategories: res.data.data.lateast_Category,
          dataFlageCat: true,
          DataOfferes: res.data.data.best_offers,
          dataFlageOff: true,
          DataBestSelling: res.data.data.Best_Selling,
          dataFlageBest: true
        });
        console.log("res ", res.data.data.lateast_Category);
      })
      .catch(err => alert(err));

    /* axios.get('http://market360.herokuapp.com/api/products/2')
            .then(res => {
                this.setState({
                    DataKind: res.data.data.Product_By_CatID,
                    dataFlageCat: true,
                    
                   
                }

                ); console.log('res ', this.state.DataKind)
            }
            )
            .catch((err) => alert(err)) */
  }

  requestHandler = (item, title) => {
    return (
      <View key={item}>
        <View style={Styles.headerTitleStyle}>
          <Text style={{ fontSize: 18 }}> {title} </Text>
          <Text onPress={() => this.seeAllHandeler(item, title)}>see all</Text>
        </View>

        <FlatList
          data={item}
          showsHorizontalScrollIndicator={false}
          horizontal
          extraData={this.state}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
          //ListHeaderComponent={<Text>{item.id}</Text>}
          style={{ paddingTop: 0 }}

          //onPress={() => this.props.navigation.navigate('Kind')}
        />
      </View>
    );
  };
  seeAllHandeler = (item, title) => {
    this.props.navigation.navigate("Display", { Data: item, Title: title });
  };

  myKindHandeler = (URL, NAME) => {
    this.props.kindHandler({ URL, NAME });
    console.log("fwefvjklwefvekwfjkwefekw");
    this.props.navigation.navigate("Kind", { title: NAME });
  };

  render() {
    console.log("kindHandlerkindHandler ", this.props.kindHandler);
    return (
      <View style={{ flex: 1 }}>
        <Header
          onPress={() => {
            this.props.navigation.openDrawer();
          }}
        />

        <Shadow>
          <TouchableOpacity onPress={() => alert("search")}>
            <Search />
          </TouchableOpacity>
        </Shadow>
        <View style={{ height: "30%" }}>
          <Swiper style={styles.wrapper} showsButtons>
            <View style={styles.slide1}>
              <Text style={styles.text}>Hello Swiper</Text>
            </View>
            <View style={styles.slide2}>
              <Text style={styles.text}>Beautiful</Text>
            </View>
            <View style={styles.slide3}>
              <Text style={styles.text}>And simple</Text>
            </View>
          </Swiper>
        </View>
        <ScrollView style={{ marginBottom: 20 }}>
          {this.state.dataFlageCat ? (
            this.requestHandler(this.state.DataCategories, "Categories")
          ) : (
            <Loading />
          )}
          {this.state.dataFlageOff ? (
            this.requestHandler(this.state.DataOfferes, "Offers")
          ) : (
            <Loading />
          )}
          {this.state.dataFlageBest ? (
            this.requestHandler(this.state.DataBestSelling, "Best Selling")
          ) : (
            <Loading />
          )}
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "gray",
    height: "40%"
  },
  slide1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#9DD6EB"
  },
  slide2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#97CAE5"
  },
  slide3: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#92BBD9"
  },
  text: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold"
  }
});

const mapStateToProps = state => {
  const { dataOfKind } = state.kindd;
  return { dataOfKind };
};
const mapDispatchToProps = dispatch => {
  return bindActionCreators({ kindHandler }, dispatch);
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
