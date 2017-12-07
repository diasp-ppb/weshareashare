/**
 * Wallet Container
 *
 */
import { connect } from 'react-redux';
import FormRender from './WalletView';

const mapStateToProps = (state) => ({
  session: state.session,
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(FormRender);
