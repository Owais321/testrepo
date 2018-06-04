/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

import {
  Platform,
  View,
  ListView,
  Text,
  TouchableHighlight,
  TouchableOpacity
} from 'react-native';
var superheroArray = ["Superman","Batman2","Wonder Woman2","The Flash2","Aquaman2","Green Lantern2","Superman2","Batman1","Wonder Woman1","The Flash1","Aquaman1","Green Lantern1","Superman","Batman1","Wonder Woman1","The Flash","Aquamanq","Green Lanternq"];
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class Profile extends Component<Props> {
  constructor(props) {
    super(props);
    var dataSource = new ListView.DataSource({rowHasChanged:(r1,r2) => r1.guid != r2.guid});
    this.state = {
      dataSource: dataSource.cloneWithRows(superheroArray)
    }
  }
  renderRow(rowData, sectionID, rowID) {
 	return (
      <View style={{backgroundColor:'blue'}}>     
    	<TouchableOpacity style={{backgroundColor:'blue',flex: 1, flexDirection: 'row'}} style={{height:70}} >
      <View style={{backgroundColor:'blue',width:'100%'}}>
      <Text style={{fontSize: 20, color: 'red'}} numberOfLines={1}>{rowData}</Text>       
        <Text style={{fontSize: 20, color: 'red'}} numberOfLines={1}>{rowData}</Text>
        <View style={{height: 5, backgroundColor: 'red'}}/>
        </View>       
    	</TouchableOpacity>
      </View>


  );
}

  render() {

    return(
      <ListView dataSource={this.state.dataSource} renderRow={this.renderRow.bind(this)}>
      </ListView>
    );
  }

}
