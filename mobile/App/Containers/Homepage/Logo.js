import { View, Image } from 'react-native';

var React = require('react');
const Dimensions = require('Dimensions');
var deviceWidth = Dimensions.get('window').width;
var deviceHeight = Dimensions.get('window').height;

var Logo = React.createClass({

  render() {
    return (
      <View>
        <Image 
          source={require('../../Assets/weshareashare_logo.png')} 
          style={{ marginHorizontal: 20, width: deviceWidth/1.2, height: deviceHeight/5}}
          resizeMode="contain"/>      
      </View>
    );
  }

});

export default Logo;