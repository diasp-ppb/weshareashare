import React, { Component } from 'react';
import { Provider } from 'react-redux';

import Root from './Root';

export default class App extends Component {
  render() {
    return (
      <View styles={{flex: 1}}>
        <Homepage />
      </View>
    );
  }
}
