/**
 * Contact Us Container
 *
 */
import { connect } from 'react-redux';
import I18n from '@i18n/i18n';
import { ContactUs } from '@services/API';
import FormRender from './ContactUsView';

const mapStateToProps = (state) => ({
  session: state.session,
  user: state.session.user,
  formType: 'ContactUs',
  screenName: I18n.t('contactUsScreen'),
  formFields: ['Email', 'FirstName', 'LastName', 'Subject', 'Message'],
  buttonTitle: I18n.t('contactUsButton'),
  successMessage: I18n.t('contactUsSuccessMessage'),
  introText: I18n.t('contactUsIntroText'),
});

const mapDispatchToProps = () => ({
  submit: ContactUs.contactUs,
});

export default connect(mapStateToProps, mapDispatchToProps)(FormRender);
