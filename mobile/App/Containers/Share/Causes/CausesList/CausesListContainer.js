import { connect } from 'react-redux';
const _ = require('lodash');
import FormRender from './CausesListView';

const mapStateToProps = (state, ownProps) => {
  let category = ownProps.category;
  let causesFiltered = _.filter(ownProps.causes, ['category', category]);
  return {
    session: state.session,
    informative: ownProps.informative,
    causes: causesFiltered,
  };
}

const mapDispatchToProps = () => ({
  submit: null,
});

export default connect(mapStateToProps, mapDispatchToProps)(FormRender);
