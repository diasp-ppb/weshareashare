import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ReduxNavigation from '../Navigation/ReduxNavigation';
import StartupActions from '../Redux/StartupRedux';
import ReduxPersist from '../Config/ReduxPersist';
import * as Session from '../Redux/Session';

class RootContainer extends Component {
  static propTypes = {
    startup: PropTypes.func,
    authorizeClient: PropTypes.func,
  }

  componentDidMount() {
    // if redux persist is not active fire startup action
    if (!ReduxPersist.active) {
      this.props.authorizeClient();
      this.props.startup();
    }
  }

  constructor(props) {
    super(props);
  }

    render() {
      return (
        <View style={{ flex: 1 }}>
          <StatusBar barStyle="light-content" />
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
});

export default connect(mapStateToProps, mapDispatchToProps)(RootContainer);
