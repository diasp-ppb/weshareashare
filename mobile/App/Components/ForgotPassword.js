import React, { Component } from 'react'
import { StyleSheet, View, TouchableHighlight, Image } from 'react-native';
import { Images, ApplicationStyles } from '../Themes/index';
import { Button, Text, Divider } from 'react-native-elements';
import * as Session from '../Redux/Session'

const t = require('tcomb-form-native');
import * as Utils from '../Services/Utils'
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

export default class ForgotPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: {},
      options: defaultOptions
    };
  }

  onRequest = () => {
    let value = this.refs.form.getValue();
    this.setState({options: defaultOptions});
    if(value) {
      Session.forgotPassword(value.email);
      this.setState({value: null});
    }
  }

  onChange = (value) => {
    this.setState({value});
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={ApplicationStyles.mainContainer}>
        <Text h1 style={ApplicationStyles.headerTitle}>Stoik PPR</Text>
        <Image
          source={Images.logo}
          style={ApplicationStyles.logo}
          resizeMode="contain"/>
        <View style={ApplicationStyles.form}>
          <Text h4 style={ApplicationStyles.subTitle}>Forgot password</Text>
          <Text style={{textAlign:'center', justifyContent: 'flex-start'}}>Enter your email. We'll send you instructions to safely reset your password.</Text>
          <View style={ApplicationStyles.container}>
            <Form
              ref="form"
              type={ForgotParams}
              options={this.state.options}
              value={this.state.value}
              onChange={this.onChange}/>
            <Button
              buttonStyle={ApplicationStyles.btn}
              onPress={this.onRequest}
              underlayColor='#99d9f4'
              title='Send me a reset link' />
          </View>
          <Divider style={ApplicationStyles.divider}/>
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
