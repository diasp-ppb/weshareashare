/**
 * Password Reset Container
 *
 */
import { connect } from 'react-redux';
import I18n from '@i18n/i18n';
import { Users } from '@services/API';
import FormRender from './FormView';

const mapStateToProps = (state) => ({
  session: state.session,
  screenName: I18n.t('passwordReset'),
  formType: 'PasswordReset',
  formFields: ['Email'],
  buttonTitle: I18n.t('sendResetToken'),
  successMessage: I18n.t('resetSuccessMessage'),
  introText: I18n.t('resetIntroText'),
});

const mapDispatchToProps = () => ({
  submit: Users.resetPassword,
});

export default connect(mapStateToProps, mapDispatchToProps)(FormRender);
