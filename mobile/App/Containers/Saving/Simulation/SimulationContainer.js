/**
 * Simulation Container
 *
 */
import { connect } from 'react-redux';
import FormRender from './SimulationView';

const mapStateToProps = (state) => ({
  session: state.session,
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(FormRender);
