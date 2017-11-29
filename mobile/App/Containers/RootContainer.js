import React, { Component } from 'react'
import { View, StatusBar } from 'react-native'
import ReduxNavigation from '../Navigation/ReduxNavigation'
import { connect } from 'react-redux'
import StartupActions from '../Redux/StartupRedux'
import ReduxPersist from '../Config/ReduxPersist'
import * as Session from '../Redux/Session';


import Drawer from 'react-native-drawer';
import ControlPanel from '../Components/ControlPanel';


class RootContainer extends Component {
  componentDidMount () {
    // if redux persist is not active fire startup action
    if (!ReduxPersist.active) {
      this.props.authorizeClient();
      this.props.startup()
    }
  }
    state={
        drawerOpen: false,
        drawerDisabled: false,
    };

    closeDrawer = () => {
        this._drawer.close()
    };
    openDrawer = () => {
        this._drawer.open()
    };


  render () {
    return (
        <Drawer
            type="static"
            content={<ControlPanel />}
            openDrawerOffset={0.2}
            captureGestures={true}
            tweenHandler={Drawer.tweenPresets.parallax}
            panCloseMask={0.2}
            panOpenMask={0.2}
            disabled={false}
            acceptDoubleTap={true}
            negotiatePan={true}
        >
          <View style={{ flex: 1 }}>
            <StatusBar barStyle="light-content" />
            <ReduxNavigation />
          </View>
        </Drawer>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  startup: () => dispatch(StartupActions.startup()),
  authorizeClient: () => dispatch(Session.authorize()),
})

export default connect(null, mapDispatchToProps)(RootContainer)
