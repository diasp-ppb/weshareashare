import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Expo from 'expo';
import RootContainer from './Containers/RootContainer'
import createStore from './Redux'

const store = createStore()

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      isReady: false
    };
  }
  async componentWillMount() {
    await Expo.Font.loadAsync({
      'OpenSans': require('./Assets/Fonts/OpenSans-Regular.ttf'),
      'OpenSans-Bold': require('./Assets/Fonts/OpenSans-Bold.ttf'),
      'OpenSans-Italic': require('./Assets/Fonts/OpenSans-Italic.ttf'),
      'Roboto_medium': require('./Assets/Fonts/Roboto_Medium.ttf'),
    });

    this.setState({ isReady: true });
  }

  render() {
    if (!this.state.isReady) {
      return <Expo.AppLoading />;
    }
    return (
      <Provider store={store}>
        <RootContainer />
      </Provider>
    );
  }
}
