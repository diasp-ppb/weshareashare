import { connect } from 'react-redux';
import FormRender from './CauseView';

const mapStateToProps = (state, ownProps) => ({
  session: state.session,
  cause: ownProps.cause,
});

export default connect(mapStateToProps, null)(FormRender);
