import React, { Component } from 'react';
import { NavigationActions, addNavigationHelpers } from 'react-navigation';
import { BackHandler } from 'react-native';
import AppNavigation from './AppNavigation';
import { connect } from 'react-redux';

class ReduxNavigation extends Component {
  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
  }
  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.onBackPress);
  }
  onBackPress = () => {
    const { dispatch, nav } = this.props;
    if (nav.index === 0) {
      return false;
    }
    dispatch(NavigationActions.back());
    return true;
  };

  render() {
    const { dispatch, nav } = this.props;
    const navigation = addNavigationHelpers({
      dispatch,
      state: nav,
    });

    return <AppNavigation navigation={navigation} />;
  }
}

const mapStateToProps = (state) => ({ nav: state.nav });
export default connect(mapStateToProps)(ReduxNavigation);
