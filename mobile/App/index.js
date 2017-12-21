import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Expo from 'expo';
import I18n from 'ex-react-native-i18n';
import RootContainer from './Containers/RootContainer';
import createStore from '@redux/index';
import { Assets } from '@theme/';

const store = createStore();

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      isReady: false,
    };
  }
  async componentWillMount() {
    await Expo.Font.loadAsync({
      OpenSans: Assets.OpenSansRegular,
      'OpenSans-Bold': Assets.OpenSansBold,
      'OpenSans-Italic': Assets.OpenSansItalic,
      Roboto_medium: Assets.RobotoMedium,
    });

    await I18n.initAsync();

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
