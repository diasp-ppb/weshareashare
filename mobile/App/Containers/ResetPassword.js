import React, { Component } from 'react'
import { StyleSheet, View, TouchableHighlight, Image } from 'react-native';
import { Images, ApplicationStyles } from '../Themes/index';
import { Button, Text, Divider } from 'react-native-elements';

const t = require('tcomb-form-native');
import * as Utils from '../Services/Utils'
const Form = t.form.Form;

const ResetParams = t.subtype(t.struct({
  password: Utils.Password,
  repeatPassword: Utils.Password
}), Utils.samePasswords);

let defaultOptions = {
  auto: 'placeholders',
  fields: {
    password: {
      placeholder: 'Your new password',
      secureTextEntry: true,
      maxLength: 32,
      password: true,
      error: 'Insert a valid password'
    },
    repeatPassword: {
      placeholder: 'Repeat password',
      secureTextEntry: true,
      maxLength: 32,
      password: true
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

  onChange = (value) => {
    this.setState({value});
  }

  onReset = () => {
    let value = this.refs.form.getValue();
    this.setState({options: defaultOptions});
    if(value) {
      this.setState({value: null});
    } else {
      if (this.state.value.repeatPassword && !Utils.samePasswords(this.state.value)) {
        this.setState({options: t.update(this.state.options, {
          fields: {
            repeatPassword: {
              hasError: { $set: true },
              error: { $set: 'Password must match' }
            }
          }
        })});
      }
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
          resizeMode="contain"/>
        <View style={ApplicationStyles.form}>
          <Text h4 style={ApplicationStyles.subTitle}>Reset password</Text>
          <Text style={{textAlign:'center', justifyContent: 'flex-start'}}>This link will be available during the next 3 hours.</Text>
          <View style={ApplicationStyles.container}>
            <Form
              ref="form"
              type={ResetParams}
              options={this.state.options}
              value={this.state.value}
              onChange={this.onChange}/>
            <Button
              buttonStyle={ApplicationStyles.btn}
              onPress={this.onReset}
              underlayColor='#99d9f4'
              title='Reset password' />
          </View>
          <Divider style={ApplicationStyles.divider}/>
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
