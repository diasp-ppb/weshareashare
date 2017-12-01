/**
 * Password Update Container
 *
 */
import { connect } from 'react-redux';
import I18n from '@i18n/i18n';
import { Users } from '@services/API';
import FormRender from './FormView';

const mapStateToProps = (state) => ({
  session: state.session,
  formType: 'PasswordUpdate',
  screenName: I18n.t('passwordUpdateScreen'),
  formFields: ['Email', 'Token', 'Password', 'ConfirmPassword'],
  buttonTitle: I18n.t('passwordUpdateButton'),
  successMessage: I18n.t('passwordUpdateSuccessMessage'),
});

const mapDispatchToProps = () => ({
  submit: Users.updatePassword,
});

export default connect(mapStateToProps, mapDispatchToProps)(FormRender);
