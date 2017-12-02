/**
 * Control Panel Container
 *
 */
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import * as Session from '@redux/Session';
import FormRender from './ControlPanelView';

const resetAction = NavigationActions.reset({
  index: 0,
  actions: [
    NavigationActions.navigate({ routeName: 'visitorStack' }),
  ],
  key: null,
});

const mapStateToProps = (state) => ({
  resetAction,
  session: state.session,
  user: state.session.user,
});

const mapDispatchToProps = (dispatch) => ({
  onLogout: () => dispatch(Session.logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(FormRender);
