import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';
import moment from 'moment';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ReduxNavigation from '../Navigation/ReduxNavigation';
import StartupActions from '../Redux/StartupRedux';
import ReduxPersist from '../Redux/ReduxPersist';
import * as Session from '../Redux/Session';
import { NavigationActions } from 'react-navigation';

const resetAction = NavigationActions.reset({
  index: 0,
  actions: [
    NavigationActions.navigate({ routeName: 'userStack' }),
  ],
  key: null,
});

class RootContainer extends Component {
  static propTypes = {
    startup: PropTypes.func,
    authorizeClient: PropTypes.func,
  }

  componentDidMount() {
    // if redux persist is not active fire startup action
    if (!ReduxPersist.active) {
      this.props.startup();
    }

    const session = this.props.session.session;

    if (session.client.id === null) {
      this.props.authorizeClient();
    } else if (session.user.id !== null) {
      this.props.navigateToUserStack();
    }

    if(session.client['createdAt'] !== null) {
      if(moment(session.client['createdAt'] ).unix() < moment().subtract(4,  'hours').unix()) {
        this.props.authorizeClient();
      }
    }
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar backgroundColor="#455a64" barStyle="light-content" />
        <ReduxNavigation />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return { session: state };
};

const mapDispatchToProps = (dispatch) => ({
  startup: () => dispatch(StartupActions.startup()),
  authorizeClient: () => dispatch(Session.authorize()),
  navigateToUserStack: () => dispatch(resetAction),
});

export default connect(mapStateToProps, mapDispatchToProps)(RootContainer);
