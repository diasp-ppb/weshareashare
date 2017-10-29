import React, { Component } from 'react'
import { StyleSheet, View, TouchableHighlight, Image, Picker } from 'react-native';
import SignUpStyles from './Styles/SignUpStyle';
import { Button, Text, Divider } from 'react-native-elements';
import { ApplicationStyles, Images } from '../Themes'


const t = require('tcomb-form-native');
const Form = t.form.Form;
const SignUpParams = t.struct({
  username: t.String,
  email: t.String,
  password: t.String,
  repeatPassword: t.String,
});

const options = {
  auto: 'placeholders',
  fields: {
    username: {
      placeholder: 'Username',
      error: 'Insert a valid username'
    },
    email: {
      placeholder: 'Email',
      error: 'Insert a valid email'
    },
    password: {
      placeholder: 'Password',
      password: true,
      secureTextEntry: true,
    },
    repeatPassword: {
      placeholder: 'Repeat Password',
      password: true,
      secureTextEntry: true,
    }
  },
};

export default class SignUpForm extends Component {

  onSignUp() {
    const value = this.refs.form.getValue();
    if (value) {
      console.log(value);
    }
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={SignUpStyles.mainContainer}>
        <Image
          source={Images.logo}
          style={SignUpStyles.logo}
          resizeMode="contain"
        />
        <Text h2 style={SignUpStyles.title}>Stoik PPR</Text>
        <View>
          <View style={SignUpStyles.container}>
            <Form
              ref="form"
              type={SignUpParams}
              options={options}
            />
            <Button
              buttonStyle={SignUpStyles.button}
              onPress={this.onSignUp}
              underlayColor='#99d9f4'
              title='Sign Up' />
          </View>
          <Divider style={SignUpStyles.divider}/>
          <Text h5 style={{padding: 0, alignContent: 'flex-start', alignSelf: 'center', color: 'lightgrey'}}>Already have an account?
            <Text style={{fontWeight: 'bold', color: 'black'}} onPress={() => navigate('SignIn')}>
              {' '}Sign In here.
            </Text>
          </Text>
        </View>
      </View>
    );
  }
};
