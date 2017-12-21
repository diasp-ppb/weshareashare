import { connect } from 'react-redux';
import FormRender from './InvestView';

const mapStateToProps = (state) => {
  return {
    session: state.session,
  };
};

export default connect(mapStateToProps, null)(FormRender);
