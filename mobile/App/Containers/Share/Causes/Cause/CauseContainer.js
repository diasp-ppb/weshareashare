import { connect } from 'react-redux';
const _ = require('lodash');
import FormRender from './CauseView';

const mapStateToProps = (state, ownProps) => ({
  session: state.session,
  cause: ownProps.cause,
})

export default connect(mapStateToProps, null)(FormRender);
