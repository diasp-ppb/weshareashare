import { Provider } from 'react-redux';
import React, { Component } from 'react';
import '../Config';
import RootContainer from './RootContainer';

class App extends Component {
  render() {
    return (
      <Provider>
        <RootContainer />
      </Provider>
    );
  }
}
