import React, { Component } from 'react'
import { StyleSheet, View, TouchableHighlight, Image } from 'react-native';
import SignInStyles from './Styles/SignInStyle';
import ResetPasswordStyles from './Styles/ResetPasswordStyle';
import { Images, ApplicationStyles, Colors, Metrics } from '../Themes/index';
import { StoikHeader } from '../Components/StoikHeader';
import * as Session from '../Redux/Session';
import { Button, Text, Divider } from 'react-native-elements';

const t = require('tcomb-form-native');
const Form = t.form.Form;
const SignInParams = t.struct({
  email: t.String,
});
const options = {
  auto: 'placeholders',
  fields: {
    email: {
      placeholder: 'Email',
    },
  },
};

export default class ResetPassword extends Component {

  onRecover() {
      // TODO
  }

  render() {
    const { navigate } = this.props.navigation;    
    return (
      <View style={SignInStyles.mainContainer}>
        <Image
          source={Images.logo}
          style={SignInStyles.logo}
          resizeMode="contain"/>
        <Text h1 style={SignInStyles.title}>Stoik PPR</Text>
        <View style={ResetPasswordStyles.resetPasswordForm}>
          <Text h4 style={ResetPasswordStyles.subTitle}>Reset password</Text>
          <Text style={{textAlign:'center'}}>Enter your registered email. We'll send instructions to there.</Text>
          <View style={SignInStyles.container}>
              <Form
                ref="form"
                type={SignInParams}
                options={options} />
              <Button
                buttonStyle={SignInStyles.button}
                onPress={this.onRecover}
                underlayColor='#99d9f4'
                title='Continue' />
          </View>
        </View>
      </View>
    );
  }
}
