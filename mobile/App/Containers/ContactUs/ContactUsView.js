import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  KeyboardAvoidingView,
  Animated,
  Keyboard,
} from 'react-native';
import I18n from '@i18n/i18n';
import FormValidation from 'tcomb-form-native';
import Toast from 'react-native-root-toast';

// Consts and Libs
import { ApplicationStyles, Metrics, Assets } from '@theme/';

// Components
import { Card, Spacer, Text, Button } from '@ui/';
import * as Utils from '@services/Utils';
import TcombTextInput from '@components/tcomb/TextInput';

/* Component ==================================================================== */
class ContactUs extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: I18n.t('contactUsScreen'),
});

  static propTypes = {
    user: PropTypes.shape({
      email: PropTypes.string,
      firstName: PropTypes.string,
      lastName: PropTypes.string,
    }),
    submit: PropTypes.func,
    onSuccessfulSubmit: PropTypes.func,
    formType: PropTypes.oneOf(['ContactUs']),
    formFields: PropTypes.arrayOf(PropTypes.string),
    buttonTitle: PropTypes.string,
    successMessage: PropTypes.string,
    introTitle: PropTypes.string,
    introText: PropTypes.string,
  }

  constructor(props) {
    super(props);

    const formFields = {};
    if (props.formFields.indexOf('Email') > -1) formFields.Email = Utils.validEmail;
    if (props.formFields.indexOf('FirstName') > -1) formFields.FirstName = FormValidation.String;
    if (props.formFields.indexOf('LastName') > -1) formFields.LastName = FormValidation.String;
    if (props.formFields.indexOf('Subject') > -1) formFields.Subject = FormValidation.String;
    if (props.formFields.indexOf('Message') > -1) formFields.Message = FormValidation.String;

    this.state = {
      resultMsg: {
        status: '',
        success: '',
        error: '',
      },
      form_fields: FormValidation.struct(formFields),
      form_values: {
        Email: (props.user && props.user.email) ? props.user.email : '',
        FirstName: (props.user && props.user.firstName) ? props.user.firstName : '',
        LastName: (props.user && props.user.lastName) ? props.user.lastName : '',
      },
      options: {
        auto: 'placeholders',
        fields: {
          Email: {
            template: TcombTextInput,
            error: 'Please enter a valid email',
            autoCapitalize: 'none',
            clearButtonMode: 'while-editing',
          },
          FirstName: {
            template: TcombTextInput,
            error: 'Please enter your first name',
            clearButtonMode: 'while-editing',
          },
          LastName: {
            template: TcombTextInput,
            error: 'Please enter your last name',
            clearButtonMode: 'while-editing',
          },
          Subject: {
            template: TcombTextInput,
            error: 'Please enter your subject',
            clearButtonMode: 'while-editing',
          },
          Message: {
            template: TcombTextInput,
            error: 'Please enter your message',
            clearButtonMode: 'while-editing',
            multiline: true,
            numberOfLines: 4,
          },
        },
      },
    };
  }

  /**
   * Handle Form Submit
   */
  handleSubmit = () => {
    const formData = this.form.getValue();

    if (formData) {
      this.setState({ form_values: formData }, () => {
        this.setState({ resultMsg: { status: 'One moment...' } });

        if (this.props.submit) {
          this.props.submit(formData, this.props.session)
            .then(() => {
              this.setState({
                resultMsg: { success: this.props.successMessage },
              }, () => {
                Toast.show(this.state.resultMsg.success, ApplicationStyles.toastSuccess);
                return true;
              });
            }).catch((err) => {
              this.setState({ resultMsg: { error: err.response } });
              Toast.show(this.state.resultMsg, ApplicationStyles.toastError);
            });
        } else {
          this.setState({ resultMsg: { error: 'Submit function missing' } });
        }
      });
    }

    return true;
  }

  render = () => {
    const Form = FormValidation.form.Form;

    return (

      <KeyboardAvoidingView
        style={ApplicationStyles.container}
        behavior="padding"
      >
        <Card>

          <Form
            ref={(b) => { this.form = b; }}
            type={this.state.form_fields}
            value={this.state.form_values}
            options={this.state.options}
          />

          <Spacer size={20} />

          <Button title={this.props.buttonTitle} onPress={this.handleSubmit} />

          <Spacer size={20} />

          {(!!this.props.introTitle || !!this.props.introText) &&
          <View>
            {!!this.props.introTitle &&
            <Text h1>{this.props.introTitle}</Text>
            }
            {!!this.props.introText &&
            <Text>{this.props.introText}</Text>
            }

            <Spacer size={10} />
          </View>
          }

        </Card>
      </KeyboardAvoidingView>
    );
  }
}

/* Export Component ==================================================================== */
export default ContactUs;
