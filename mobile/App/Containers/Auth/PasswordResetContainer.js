/**
 * Password Reset Container
 *
 */
import { connect } from 'react-redux';
import I18n from '@i18n/i18n';
import { Users } from '@services/API';
import FormRender from './FormView';

const mapStateToProps = (state, ownProps) => ({
  session: state.session,
  user: {
    firstName: null,
    lastName: null,
    email: ownProps.navigation.state.params.email,
  },
  screenName: I18n.t('passwordReset'),
  formType: 'PasswordReset',
  formFields: ['Email'],
  buttonTitle: I18n.t('sendResetToken'),
  successMessage: I18n.t('resetSuccessMessage'),
  introText: I18n.t('resetIntroText'),
});

const mapDispatchToProps = () => ({
  submit: Users.resetPassword,
  onSuccessfulSubmit: null,
});

export default connect(mapStateToProps, mapDispatchToProps)(FormRender);
