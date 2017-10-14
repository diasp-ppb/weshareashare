import { StyleSheet, View, Text } from 'react-native';

var React = require('react');

var Header = React.createClass({

  getInitialState () {
    return {
      title: "Stoik PPR"
    };
  },

  render() {
    return (
      <View>
        <Text style={stylesHeader.title}>
          {this.state.title}
        </Text>
      </View>
    );
  }

});

var stylesHeader = StyleSheet.create({
  title: {
    color: '#475B64',
    fontWeight: 'bold',
    fontSize: 40,
    alignSelf: 'center',
  }
});

export default Header;