import { connect } from 'react-redux';
import FormRender from './CausesView';

const mapStateToProps = (state, ownProps) => {
  const navigationParams = ownProps.navigation.state.params;
  const informative = navigationParams ? navigationParams.informative : true;
  return {
    session: state.session,
    informative,
  };
};

export default connect(mapStateToProps, null)(FormRender);
