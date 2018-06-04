/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  PanResponder,
} from 'react-native';
import { DrawerNavigator } from 'react-navigation';
import Dashboard from './components/drawer/dashboard';
import Profile from './components/drawer/profile';
import Deck from './components/drawer/deck';
import Acel from './components/drawer/acel';
import {Card , Button} from 'react-native-elements';
const DATA = [
  { id: 1, text: 'Samsung Grand Prime', uri: 'https://cdn.homeshopping.pk/product_images/o/531/On5_2016__03890_std.jpg' },
  { id: 2, text: 'Samsung J3', uri: 'https://cdn.homeshopping.pk/product_images/w/506/small_oneplus_6_mirror_black_1__23562_std.jpg' },
  { id: 3, text: 'Samsung J3 Pro', uri: 'https://cdn.homeshopping.pk/product_images/w/505/my-galaxy-j3-pro-2017-sm-j330gzkdxme-black-70674464__23929_std.jpg' },
  { id: 4, text: 'Samsung Grand Prime', uri: 'https://cdn.homeshopping.pk/product_images/o/531/On5_2016__03890_std.jpg' },
  { id: 5, text: 'Samsung J3', uri: 'https://cdn.homeshopping.pk/product_images/w/506/small_oneplus_6_mirror_black_1__23562_std.jpg' },
  { id: 6, text: 'Samsung J3 Pro', uri: 'https://cdn.homeshopping.pk/product_images/w/505/my-galaxy-j3-pro-2017-sm-j330gzkdxme-black-70674464__23929_std.jpg' },
  { id: 7, text: 'Samsung Grand Prime', uri: 'https://cdn.homeshopping.pk/product_images/o/531/On5_2016__03890_std.jpg' },
  { id: 8, text: 'Samsung J3', uri: 'https://cdn.homeshopping.pk/product_images/w/506/small_oneplus_6_mirror_black_1__23562_std.jpg' },
  { id: 9, text: 'Samsung J3 Pro', uri: 'https://cdn.homeshopping.pk/product_images/w/505/my-galaxy-j3-pro-2017-sm-j330gzkdxme-black-70674464__23929_std.jpg' },
  ]
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});
// const Drawer=DrawerNavigator({
//   Dashboard:{screen:Dashboard},
//   Profile:{screen:Profile},
// },{
  
  
//     drawerLabel: 'Notifications',
//     drawerIcon: ({ tintColor }) => (
//       <Image
//         source={require('./icon.png')}
//         style={[styles.icon, {tintColor: tintColor}]}
//       />
//     ),
//     drawerPosition:'left',
//     drawerWidth:200,
//     drawerBackgroundColor:'#333333',
//     contentOptions:{
//       activeTintColor:'#ffffff',
//       inactiveTintColor:'#000000',
//       activeBackgroundColor:'#ff5500',
//       inactiveBackgroundColor:'#ffffff',
//       itemsContainerStyle:{
//        marginTop:20 
//       },
//       itemStyle:{
//         marginTop:10
//       },
//       labelStyle:{
        
//         fontSize:16
//       },
//       iconContainerStyle:{
//         backgroundColor:"#000000"
//       }
//     }
//   });
type Props = {};
export default class App extends Component<Props> {
  constructor(props){
    super(props);
    const panResponder=PanResponder.create({
      onStartShouldSetPanResponder:()=>{   },
      onPanResponderMove:(event,gesture)=>{console.log(gesture)},
      onPanResponderRelease:()=>{}
    });
    
    this.state={panResponder}
  }
  renderCard(item){
    
    return(
      <Card
      key={item.id}
      title={item.text}
      image={{uri:item.uri}}
      >
      <TouchableOpacity style={{alignContent:'center',alignItems:'center'}}>
        <Text style={{fontWeight:'bold'}}>Rs 2000</Text>
        </TouchableOpacity>
        <Button
        icon={{name:'shopping-cart'}}
        backgroundColor='powderblue'
        title='Add Cart'
        >
        </Button>
     </Card>
    );
    }
  render() {
    var a=2;
    if(a==1){
    return (
      <ScrollView>
      <Deck
      data={DATA}
      renderCard={this.renderCard}
      />
      </ScrollView>
    );}
    else{
      return (<Acel/>)
    }
  }
}
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });