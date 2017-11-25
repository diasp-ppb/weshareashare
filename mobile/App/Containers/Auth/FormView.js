/**
 * Login/Sign Up/Forgot Password Screen
 *
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  ScrollView,
  AsyncStorage,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import FormValidation from 'tcomb-form-native';

// Consts and Libs
import { ApplicationStyles, Metrics, Colors, Assets } from '@theme/';

// Components
import { Alerts, Card, Spacer, Text, Button } from '@ui/';
import * as Utils from '@services/Utils'
import TcombTextInput from '@components/tcomb/TextInput';

/* Component ==================================================================== */
let redirectTimeout;
class AuthForm extends Component {
  static componentName = 'SignIn';

  static propTypes = {
    user: PropTypes.shape({
      email: PropTypes.string,
      firstName: PropTypes.string,
      lastName: PropTypes.string,
    }),
    submit: PropTypes.func,
    onSuccessfulSubmit: PropTypes.func,
    formType: PropTypes.oneOf(['SignIn', 'SignUp', 'PasswordReset', 'PasswordUpdate']),
    formFields: PropTypes.arrayOf(PropTypes.string),
    buttonTitle: PropTypes.string,
    successMessage: PropTypes.string,
    introTitle: PropTypes.string,
    introText: PropTypes.string,
  }

  static defaultProps = {
    user: null,
    submit: null,
    onSuccessfulSubmit: null,
    formType: 'SignIn',
    formFields: ['Email', 'Password'],
    buttonTitle: 'Sign In',
    successMessage: 'You\'re now logged in',
    introTitle: null,
    introText: null,
  }

  constructor(props) {
    super(props);

    const formFields = {};
    if (props.formFields.indexOf('Email') > -1) formFields.Email = Utils.validEmail;
    if (props.formFields.indexOf('Password') > -1) formFields.Password = Utils.validPassword;
    if (props.formFields.indexOf('ConfirmPassword') > -1) formFields.ConfirmPassword = Utils.validPassword;
    if (props.formFields.indexOf('FirstName') > -1) formFields.FirstName = FormValidation.String;
    if (props.formFields.indexOf('LastName') > -1) formFields.LastName = FormValidation.String;
    if (props.formFields.indexOf('Token') > -1) formFields.Token = FormValidation.String;

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
        fields: {
          Email: {
            template: TcombTextInput,
            error: 'Please enter a valid email',
            autoCapitalize: 'none',
            clearButtonMode: 'while-editing',
          },
          Password: {
            template: TcombTextInput,
            error: 'Passwords must be more than 8 characters and contain letters and numbers',
            clearButtonMode: 'while-editing',
            secureTextEntry: true,
          },
          ConfirmPassword: {
            template: TcombTextInput,
            error: 'Your passwords must match',
            clearButtonMode: 'while-editing',
            secureTextEntry: true,
          },
          FirstName: {
            template: TcombTextInput,
            error: 'Please enter your first name',
            clearButtonMode: 'while-editing',
          },
          LastName: {
            template: TcombTextInput,
            error: 'Please enter your first name',
            clearButtonMode: 'while-editing',
          },
          Token: {
            template: TcombTextInput,
            error: 'Please enter your token',
            clearButtonMode: 'while-editing',
          },
        },
      },
    };
  }

  /**
    * Password Confirmation - password fields must match
    * - Sets the error and returns bool of whether to process form or not
    */
  passwordsMatch = (form) => {
    const error = form.Password !== form.ConfirmPassword;

    this.setState({
      options: FormValidation.update(this.state.options, {
        fields: {
          ConfirmPassword: {
            hasError: { $set: error },
            error: { $set: error ? 'Passwords don\'t match' : '' },
          },
        },
      }),
      form_values: form,
    });

    return error;
  }

  /**
    * Handle Form Submit
    */
  handleSubmit = () => {
    // Get new credentials and update
    const formData = this.form.getValue();

    // Check whether passwords match
    if (formData && formData.Password && formData.ConfirmPassword) {
      const passwordsDontMatch = this.passwordsMatch(formData);
      if (passwordsDontMatch) return false;
    }

    // Form is valid
    if (formData) {
      this.setState({ form_values: formData }, () => {
        this.setState({ resultMsg: { status: 'One moment...' } });

        // Scroll to top, to show message
        if (this.scrollView) this.scrollView.scrollTo({ y: 0 });

        if (this.props.submit) {
          this.props.submit(formData).then(() => {
            this.setState({
              resultMsg: { success: this.props.successMessage },
            }, () => {
              // If there's another function to fire on successful submit
              // eg. once signed up, let's log them in - pass the Login function
              // through as the onSuccessfulSubmit prop
              if (this.props.onSuccessfulSubmit) {
                return this.props.onSuccessfulSubmit(formData, true)
                  .then(() => {

                  }).catch(err => this.setState({ resultMsg: { error: err.message } }));
              }

              // Timeout to ensure success message is seen/read by user
              redirectTimeout = setTimeout(() => {

              }, 500);

              return true;
            });
          }).catch(err => this.setState({ resultMsg: { error: err.message } }));
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

      <ScrollView
        automaticallyAdjustContentInsets={true}
        ref={(a) => { this.scrollView = a; }}
        style={[ApplicationStyles.container]}
        contentContainerStyle={[ApplicationStyles.container]}
      >
          <Alerts
            status={this.state.resultMsg.status}
            success={this.state.resultMsg.success}
            error={this.state.resultMsg.error}
          />

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

          <Form
            ref={(b) => { this.form = b; }}
            type={this.state.form_fields}
            value={this.state.form_values}
            options={this.state.options}
          />

          <Spacer size={20} />

          <Button title={this.props.buttonTitle} onPress={this.handleSubmit} />

          <Spacer size={10} />

          {this.props.formType === 'login' &&
            <View>
              <TouchableOpacity onPress={console.log()}>
                <Text p style={[ApplicationStyles.textCenterAligned, ApplicationStyles.link]}>
                  Forgot Password
                </Text>
              </TouchableOpacity>

              <Spacer size={10} />

              <Text p style={[ApplicationStyles.textCenterAligned]}>
                - or -
              </Text>

              <Button outlined title={'Sign Up'} onPress={console.log()} />
            </View>
          }

        <Spacer size={60} />
      </ScrollView>
    );
  }
}

/* Export Component ==================================================================== */
export default AuthForm;
