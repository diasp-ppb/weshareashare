/**
 * Contact Us Container
 *
 */
import { connect } from 'react-redux';
import { ContactUs } from '@services/API';
import FormRender from './ContactUsView';

const mapStateToProps = (state) => ({
  session: state.session,
  user: state.session.user,
  formType: 'ContactUs',
  formFields: ['Email', 'FirstName', 'LastName', 'Subject', 'Message'],
  buttonTitle: 'Submit',
  successMessage: 'Your message has been received. Thank you very much!',
  introText: 'Send us a message and we\'ll get back to you via email as soon as possible.\nYour feedback is extremely important to us',
});

const mapDispatchToProps = () => ({
  submit: ContactUs.contactUs,
});

export default connect(mapStateToProps, mapDispatchToProps)(FormRender);
