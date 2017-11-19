import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';
import { connect } from 'react-redux';
import Drawer from 'react-native-drawer';
import ReduxNavigation from '../Navigation/ReduxNavigation';
import StartupActions from '../Redux/StartupRedux';
import ReduxPersist from '../Config/ReduxPersist';
import * as Session from '../Redux/Session';
import ControlPanel from '../Components/ControlPanel';


class RootContainer extends Component {
  componentDidMount() {
    // if redux persist is not active fire startup action
    if (!ReduxPersist.active) {
      this.props.authorizeClient();
      this.props.startup();
    }
  }

  constructor(props) {
    super(props);
    this.state = {
      session: this.props.session.session,
      drawerOpen: false,
    };
    this.state.drawerDisabled = this.state.session.user.id === null;
  }

    closeDrawer = () => {
      this._drawer.close();
    };
    openDrawer = () => {
      this._drawer.open();
    };
  
    render() {
      return (
        <Drawer
          type="static"
          content={<ControlPanel />}
          openDrawerOffset={0.2}
          captureGestures
          tweenHandler={Drawer.tweenPresets.parallax}
          panCloseMask={0.2}
          panOpenMask={0.2}
          disabled={this.state.drawerDisabled}
          acceptDoubleTap
          negotiatePan
        >
          <View style={{ flex: 1 }}>
            <StatusBar barStyle="light-content" />
            <ReduxNavigation />
          </View>
        </Drawer>
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
