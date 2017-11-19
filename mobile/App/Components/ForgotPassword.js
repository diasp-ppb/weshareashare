import React, { Component } from 'react';
import { View, Image } from 'react-native';
import Toast from 'react-native-root-toast';
import { connect } from 'react-redux';
import { Button, Text, Divider } from 'react-native-elements';
import { Images, ApplicationStyles } from '../Themes/index';
import * as API from '../Services/API';
import * as Utils from '../Services/Utils';

const t = require('tcomb-form-native');

const Form = t.form.Form;

const ForgotParams = t.struct({
  email: Utils.Email,
});
const defaultOptions = {
  auto: 'placeholders',
  fields: {
    email: {
      placeholder: 'Email',
      error: 'Insert a valid email',
      maxLength: 32,
    },
  },
};

class ForgotPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      session: props.session.session,
      value: {},
      options: defaultOptions,
      serverResponse: '',
    };
  }

  onRequest = () => {
    const value = this.refs.form.getValue();
    if (value) {
      API.forgotPassword(value.email, this.state.session)
        .then(() => {
          Toast.show(`A reset token was sent to ${value.email}. You can use it to reset your password.`, ApplicationStyles.toastSuccess);
          this.setState({ value: null, serverResponse: '' });
        }).catch((err) => {
          this.setState({ serverResponse: err.response });
          Toast.show(this.state.serverResponse, ApplicationStyles.toastError);
        });
    }
  }

  onChange = (value) => {
    this.setState({ value });
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={ApplicationStyles.mainContainer}>
        <Text h1 style={ApplicationStyles.headerTitle}>Stoik PPR</Text>
        <Image
          source={Images.logo}
          style={ApplicationStyles.logo}
          resizeMode="contain"
        />
        <View style={ApplicationStyles.form}>
          <Text h4 style={ApplicationStyles.subTitle}>Forgot password</Text>
          <Text style={{ textAlign: 'center', justifyContent: 'flex-start' }}>Enter your email. We'll send you instructions to safely reset your password.</Text>
          <View style={ApplicationStyles.container}>
            <Form
              ref="form"
              type={ForgotParams}
              options={this.state.options}
              value={this.state.value}
              onChange={this.onChange}
            />
            <Button
              buttonStyle={ApplicationStyles.btn}
              onPress={this.onRequest}
              underlayColor="#99d9f4"
              title="Send me a reset token"
            />
          </View>
          <Divider style={ApplicationStyles.divider} />
          <Text h5 style={ApplicationStyles.infoText}>Already have a reset token?
            <Text style={ApplicationStyles.linkText} onPress={() => navigate('ResetPassword')}>
              {' '}Reset password.
            </Text>
          </Text>
          <Text h5 style={ApplicationStyles.infoText}>Already registered?
            <Text style={ApplicationStyles.linkText} onPress={() => navigate('SignIn')}>
              {' '}Sign In here.
            </Text>
          </Text>
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return { session: state };
};

export default connect(mapStateToProps, null)(ForgotPassword);
