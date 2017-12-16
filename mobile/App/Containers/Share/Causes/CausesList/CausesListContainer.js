import { connect } from 'react-redux';

const _ = require('lodash');

import * as Session from '@redux/Session';
import FormRender from './CausesListView';
import { Users } from '@services/API';

const mapStateToProps = (state, ownProps) => {
  const category = ownProps.category;
  const causesFiltered = _.filter(ownProps.causes, ['category', category]);
  return {
    session: state.session,
    informative: ownProps.informative,
    causes: causesFiltered,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  if (ownProps.informative) { return { submit: null }; }
  return { submit: Users.selectCause, onSuccessfulSubmit: (res) => dispatch(Session.updateCause(res)) };
};

export default connect(mapStateToProps, mapDispatchToProps)(FormRender);
