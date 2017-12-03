/**
 * Performances Container
 *
 */
import { connect } from 'react-redux';
import FormRender from './PerformancesView';

const mapStateToProps = (state) => ({
  session: state.session,
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(FormRender);
