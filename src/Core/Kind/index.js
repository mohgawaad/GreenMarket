import React, { Component } from "react";
import {
  Platform,
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
import { Search } from "../../Components/Search";
import { LoadingKind } from "../../Components/LoadingKind";
import { Images } from "../../assets/Images";
import { SafeAreaView } from "react-navigation";
import Swiper from "react-native-swiper";
import { Styles } from "./Styles";

import { kindHandler, priceItem } from "../../redux/actions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

class Kind extends Component {
  constructor(props) {
    super(props);
    //this.props.navigation.navigate('Intro')
    this.state = {
      DataKind: "", //this.props.dataOfKind ? this.props.dataOfKind.URL: '' ,
      dataFlageKind: false,
      // url: this.props.navigation.getParam("MyUrl"),
      //
      title: "" //this.props.dataOfKind ? this.props.title.dataOfKind.NAME : ''
    };

    // this.props.kindHandler("http://market360.herokuapp.com/api/products/2")
  }

  /*  componentWillReceiveProps(nextProps) {
         console.log("hehehedfergergergergerkejdwekdewkd" , nextProps)
         axios.get(nextProps.navigation.state.params.MyUrl)
             .then(res => {
                 console.log('ressssssss', res.data.data.Product_By_CatID)
                 this.setState({
                     DataKind: res.data.data.Product_By_CatID,
                     dataFlageKind: true,
 
 
                 }
 
                 );
                 console.log('res ', this.state.DataKind)
             }
             )
             .catch((err) => alert(err))
 
     } */
  /*  componentDidMount() {
         console.log("hehehedkejdwekdewkd" , )
         axios.get(this.state.url)
             .then(res => {
                 console.log('ressssssss', res.data.data.Product_By_CatID)
                 this.setState({
                     DataKind: res.data.data.Product_By_CatID,
                     dataFlageKind: true,
 
 
                 }
 
                 );
                 console.log('res ', this.state.DataKind)
             }
             )
             .catch((err) => alert(err))
     } */

  _keyExtractor = (item, index) => {
    /*  alert("extractor "+item.id) ; */ return item.id;
  };

  _renderItem = ({ item }) => (
    /* <Image
            source={item.image}
            style={{
                width: 100,
                height: 100,
                marginHorizontal: 20
            }}
        /> */

    <View style={{ margin: 20 }}>
      {console.log("item", item)}
      <TouchableOpacity
        style={Styles.shadowStyle}
        onPress={() => {
          this.props.priceItem({
            item
          });
          this.props.navigation.navigate("Prices", {
            Item: item,
            MyTitle: this.state.title
          });
        }}
        //onPress={()=> this.handleItemPressed(item.id)}
      >
        <Text style={{ fontSize: 18 }}> {item.name} </Text>
      </TouchableOpacity>
    </View>
  );

  handleItemPressed = id => {
    console.log("id", id);
    const filterData = this.state.Data.filter(item => item.id !== id);
    // alert(filterData)
    console.log(filterData);
    this.setState({ Data: filterData });

    // Data = filterData;
  };
  render() {
    const data = this.props.dataOfKind;

    const title = this.props.navigation.getParam("title");
    console.log("datadatadatadata ", this.props.dataOfKind);

    return (
      <SafeAreaView style={{ flex: 1 }}>
        <HeaderSub
          IconName1="bars"
          IconName2="bell"
          clicked={() => {
            this.props.navigation.goBack();
          }}
        />
        <Shadow>
          <TouchableOpacity
            onPress={() => {
              alert("search");
            }}
            style={{ paddingTop: Platform.OS == "android" ? 17 : 0 }}
          >
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
          {this.props.loading ? (
            <View>
              <Text style={Styles.titleStyle}>{title}</Text>

              <FlatList
                data={this.props.dataOfKind}
                showsHorizontalScrollIndicator={false}
                numColumns={2}
                extraData={this.state}
                keyExtractor={this._keyExtractor}
                renderItem={this._renderItem}
                // ListHeaderComponent={<Text>{item.title}</Text>}
                style={{ paddingTop: 0 }}
              />
            </View>
          ) : (
            <LoadingKind />
          )}
        </ScrollView>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "gray"
    // height: '40%'
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
  console.log("state ", state.kindd);
  const { dataOfKind, loading, itemOfCart } = state.kindd;
  return { dataOfKind, loading, itemOfCart };
};
const mapDispatchToProps = dispatch => {
  return bindActionCreators({ kindHandler, priceItem }, dispatch);
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Kind);
