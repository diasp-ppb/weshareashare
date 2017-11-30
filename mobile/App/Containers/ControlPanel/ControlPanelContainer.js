/**
 * Control Panel Container
 *
 */
import { connect } from 'react-redux';
import * as Session from '@redux/Session';
import FormRender from './ControlPanelView';

const mapStateToProps = state => ({
  session: state.session,
  user: state.session.user,
});

const mapDispatchToProps = (dispatch) => ({
  onLogout: dispatch(Session.logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(FormRender);
