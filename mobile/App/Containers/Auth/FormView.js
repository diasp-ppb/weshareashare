/**
 * Login/Sign Up/Forgot Password Screen
 *
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Image,
  Animated,
  KeyboardAvoidingView,
  Divider,
  Keyboard,
} from 'react-native';
import I18n from '@i18n/i18n';
import FormValidation from 'tcomb-form-native';
import Toast from 'react-native-root-toast';

// Consts and Libs
import { ApplicationStyles, Metrics, Colors, Assets } from '@theme/';

// Components
import { Card, Spacer, Text, Button } from '@ui/';
import * as Utils from '@services/Utils';
import TcombTextInput from '@components/tcomb/TextInput';

/* Component ==================================================================== */
class AuthForm extends Component {
  static propTypes = {
    user: PropTypes.shape({
      email: PropTypes.string,
      firstName: PropTypes.string,
      lastName: PropTypes.string,
    }),
    submit: PropTypes.func,
    onSuccessfulSubmit: PropTypes.func,
    screenName: PropTypes.string,
    formType: PropTypes.oneOf(['SignIn', 'SignUp', 'PasswordReset', 'PasswordUpdate']),
    formFields: PropTypes.arrayOf(PropTypes.string),
    buttonTitle: PropTypes.string,
    successMessage: PropTypes.string,
    introTitle: PropTypes.string,
    introText: PropTypes.string,
  }

  static navigationOptions = ({ navigation }) => ({
    title: typeof (navigation.state.params) === 'undefined' || typeof (navigation.state.params.title) === 'undefined' ? '' : navigation.state.params.title,
  });

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
          Token: {
            template: TcombTextInput,
            autoCapitalize: 'none',
            error: 'Please enter your token',
            clearButtonMode: 'while-editing',
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
        },
      },
    };
  }

  componentWillMount() {
    this.props.navigation.setParams({ title: this.props.screenName });
  }

  /**
   * Handle Form Submit
   */
  handleSubmit = () => {
    const formData = this.form.getValue();
    const { navigate } = this.props.navigation;

    if (formData && formData.Password && formData.ConfirmPassword) {
      const passwordsDontMatch = this.passwordsMatch(formData);
      if (passwordsDontMatch) return false;
    }

    if (formData) {
      this.setState({ form_values: formData }, () => {
        this.setState({ resultMsg: { status: 'One moment...' } });

        if (this.props.submit) {
          this.props.submit(formData, this.props.session)
            .then((res) => {
              if (this.props.onSuccessfulSubmit) {
                this.props.onSuccessfulSubmit(res);
              } else {
                this.setState({
                  resultMsg: { success: this.props.successMessage },
                });
                Toast.show(this.state.resultMsg.success, ApplicationStyles.toastSuccess);
              }
              return true;
            }).catch((err) => {
              this.setState({ resultMsg: { error: err.response } });
              Toast.show(this.state.resultMsg.error, ApplicationStyles.toastError);
            });
        } else {
          this.setState({ resultMsg: { error: 'Submit function missing' } });
        }
      });
    }

    return true;
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
  
  render = () => {
    const Form = FormValidation.form.Form;
    const { navigate } = this.props.navigation;

    return (

      <KeyboardAvoidingView
        style={ApplicationStyles.container}
        behavior="padding"
      >
        <Card>

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
            style={[ApplicationStyles.centerAligned]}
          />

          <Spacer size={20} />

          <Button title={this.props.buttonTitle} onPress={this.handleSubmit} />

          <Spacer size={20} />

          {this.props.formType === 'SignIn' &&
          <View>
            <TouchableOpacity onPress={() => navigate('PasswordReset', {email: this.form.getComponent('Email').getValue()})}>
              <Text p style={[ApplicationStyles.textCenterAligned, ApplicationStyles.link]}>
                { I18n.t('forgotPasswordQuestion') }
              </Text>
            </TouchableOpacity>

            <Spacer size={10} />

            <Text p style={[ApplicationStyles.textCenterAligned]}>
              - { I18n.t('or') } -
            </Text>

            <Spacer size={10} />

            <TouchableOpacity onPress={() => navigate('SignUp')}>
              <Text p style={[ApplicationStyles.textCenterAligned, ApplicationStyles.link]}>
                { I18n.t('dontHasAccountQuestion') }
              </Text>
            </TouchableOpacity>
          </View>
          }

          {this.props.formType === 'PasswordReset' &&
          <View>
            <TouchableOpacity onPress={() => navigate('PasswordUpdate', {email: this.form.getComponent('Email').getValue()})}>
              <Text p style={[ApplicationStyles.textCenterAligned, ApplicationStyles.link]}>
                { I18n.t('hasToken') }
              </Text>
            </TouchableOpacity>
          </View>
          }

          {this.props.formType === 'SignUp' &&
          <View>
            <TouchableOpacity onPress={() => navigate('SignIn')}>
              <Text p style={[ApplicationStyles.textCenterAligned, ApplicationStyles.link]}>
                { I18n.t('hasAccountQuestion') }
              </Text>
            </TouchableOpacity>
          </View>
          }

          <Spacer size={10} />
        </Card>
      </KeyboardAvoidingView>
    );
  }
}

/* Export Component ==================================================================== */
export default AuthForm;
