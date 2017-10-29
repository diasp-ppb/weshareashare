import React, { Component } from 'react'
import { StyleSheet, View, TouchableHighlight, Image } from 'react-native';
import SignInStyles from './Styles/SignInStyle';
import { Images, ApplicationStyles } from '../Themes/index';
import { StoikHeader } from '../Components/StoikHeader';
import * as Session from '../Redux/Session'
import { Button, Text, Divider } from 'react-native-elements';

const t = require('tcomb-form-native');
const Form = t.form.Form;
const SignInParams = t.struct({
  email: t.String,
  password: t.String,
});
const options = {
  auto: 'placeholders',
  fields: {
    email: {
      placeholder: 'Email',
    },
    password: {
      placeholder: 'Password',
      secureTextEntry: true,
    },
  },
};

export default class SignInForm extends Component {

  onSignIn() {
    Session.authenticate('renatoabreu@122143', '124124');
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
        <View>
          <View style={SignInStyles.container}>
              <Form
                ref="form"
                type={SignInParams}
                options={options} />
              <Button
                buttonStyle={SignInStyles.button}
                onPress={this.onSignIn}
                underlayColor='#99d9f4'
                title='Sign In' />
          </View>
          <Divider style={SignInStyles.divider}/>
          <Text h5 style={{padding: 0, alignContent: 'flex-start', alignSelf: 'center', color: 'lightgrey'}}>
            <Text style={{fontWeight: 'bold', color: 'black'}} onPress={() => navigate('ResetPassword')}>
              {' '}Forgot password?
            </Text>
          </Text>
        </View>
        <Text h5 style={{padding: 0, alignContent: 'flex-start', alignSelf: 'center', color: 'lightgrey'}}>Not registered?
            <Text style={{fontWeight: 'bold', color: 'black'}} onPress={() => navigate('SignUp')}>
              {' '}Sign Up here.
            </Text>
          </Text>
      </View>
    );
  }
}
