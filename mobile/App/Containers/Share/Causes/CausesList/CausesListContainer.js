import { connect } from 'react-redux';
const _ = require('lodash');
import FormRender from './CausesListView';
import { Assets } from '@theme/';

const mapStateToProps = (state) => {
  let category = state.category;
  let causesFiltered = _.filter(state.causes, ['category', category]);
  return {
    session: state.session,
    informative: state.informative,
    causes: causesFiltered,
  };
}

const mapDispatchToProps = () => ({
  submit: null,
});

export default connect(mapStateToProps, mapDispatchToProps)(FormRender);
