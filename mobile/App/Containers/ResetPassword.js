import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { Images, ApplicationStyles } from '../Themes/index';
import { connect } from 'react-redux';
import { Button, Text, Divider } from 'react-native-elements';
import * as API from '../Services/API';
import Toast from 'react-native-root-toast';

const t = require('tcomb-form-native');

import * as Utils from '../Services/Utils';

const Form = t.form.Form;

const ResetParams = t.subtype(t.struct({
  token: t.String,
  password: Utils.Password,
  repeatPassword: Utils.Password,
  email: Utils.Email,
}), Utils.samePasswords);

const defaultOptions = {
  auto: 'placeholders',
  fields: {
    email: {
      placeholder: 'Email',
      error: 'Insert a valid email',
      maxLength: 32,
    },
    token: {
      placeholder: 'Insert your token',
      error: 'Insert a valid token',
      maxLength: 8,
    },
    password: {
      placeholder: 'Your new password',
      secureTextEntry: true,
      maxLength: 32,
      password: true,
      error: 'Insert a valid password',
    },
    repeatPassword: {
      placeholder: 'Repeat password',
      secureTextEntry: true,
      maxLength: 32,
      password: true,
      hasError: false,
    },
  },
};

class ResetPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      session: props.session.session,
      value: {},
      processingRequest: false,
      options: defaultOptions,
      serverResponse: '',
    };
  }

  onChange = (value) => {
    this.setState({ value });
  }

  onReset = () => {
    if(this.state.processingRequest)
      return;
    const values = this.refs.form.getValue();
    if (values) {
      this.state.processingRequest = true;
      API.resetPassword(values, this.state.session)
        .then(() => {
          this.setState({ value: null, serverResponse: '' });
          Toast.show('Your password has been successfully changed.', ApplicationStyles.toastSuccess);
        }).catch((err) => {
          this.setState({ serverResponse: err.response });
          Toast.show(this.state.serverResponse, ApplicationStyles.toastError);
        }).then(() => this.state.processingRequest = false);

    } else if (this.state.value.repeatPassword && !Utils.samePasswords(this.state.value)) {
      this.setState({ options: t.update(this.state.options, {
        fields: {
          repeatPassword: {
            hasError: { $set: true },
            error: { $set: 'Password must match' },
          },
        },
      }) });
    }
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
          <Text h4 style={ApplicationStyles.subTitle}>Reset password</Text>
          <Text style={{ textAlign: 'center', justifyContent: 'flex-start' }}>You can reset you password by using the token sent to your email.</Text>
          <View style={ApplicationStyles.container}>
            <Form
              ref="form"
              type={ResetParams}
              options={this.state.options}
              value={this.state.value}
              onChange={this.onChange}
            />
            <Button
              buttonStyle={ApplicationStyles.btn}
              onPress={this.onReset}
              underlayColor="#99d9f4"
              title="Reset password"
            />
          </View>
          <Divider style={ApplicationStyles.divider} />
          <Text h5 style={ApplicationStyles.infoText}>Not supposed to be here?
            <Text style={ApplicationStyles.linkText} onPress={() => navigate('Homepage')}>
              {' '}Go to the homepage
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

export default connect(mapStateToProps, null)(ResetPassword);
