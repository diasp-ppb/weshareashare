import { StyleSheet, View, Text, TouchableHighlight } from 'react-native';

var React = require('react');
const Dimensions = require('Dimensions');
var deviceWidth = Dimensions.get('window').width;
var deviceHeight = Dimensions.get('window').height;

var ThreeButtons = React.createClass({

  render() {
    return (
      <View style={{flexDirection: 'row', justifyContent: 'center'}}>
        <TouchableHighlight style={stylesThreeButtons.yellowBtn} onPress={this.onPressSaveBtn} underlayColor='#99d9f4'>
        <Text style={stylesThreeButtons.yellowBtnText}>Save</Text>
        </TouchableHighlight>

        <TouchableHighlight style={stylesThreeButtons.blueBtn} onPress={this.onPressSaveBtn} underlayColor='#99d9f4'>
        <Text style={stylesThreeButtons.blueBtnText}>Invest</Text>
        </TouchableHighlight>

        <TouchableHighlight style={stylesThreeButtons.yellowBtn} onPress={this.onPressSaveBtn} underlayColor='#99d9f4'>
        <Text style={stylesThreeButtons.yellowBtnText}>Share</Text>
        </TouchableHighlight>
      </View>
    );
  }

});

var stylesThreeButtons = StyleSheet.create({
  blueBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    height: deviceWidth/4,
    width: deviceWidth/4,
    backgroundColor: '#4A4C4E',
    borderRadius: deviceWidth/8,
    zIndex: 1
  },
  yellowBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    height: deviceWidth/4,
    width: deviceWidth/4,
    backgroundColor: '#FFAB2E',
    borderRadius: deviceHeight/8,
    zIndex: 2
  },
  blueBtnText: {
    color: '#FFAB2E',
    fontSize: 20, 
  },
  yellowBtnText: {
    color: '#4A4C4E',
    fontSize: 20, 
  }
});

export default ThreeButtons;