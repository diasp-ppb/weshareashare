import React, { Component } from 'react'
import { StyleSheet, View, TouchableHighlight, Image, Picker } from 'react-native';
import { Button, Text, Divider } from 'react-native-elements';
import { ApplicationStyles, Images } from '../Themes'
import * as Session from '../Redux/Session';
import { connect } from 'react-redux';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const t = require('tcomb-form-native');
const Form = t.form.Form;
import * as Utils from '../Services/Utils';

const SignUpParams = t.subtype(t.struct({
  username: t.String,
  email: Utils.Email,
  password: Utils.Password,
  repeatPassword: Utils.Password,
}), Utils.samePasswords);

const defaultOptions = {
  auto: 'placeholders',
  fields: {
    username: {
      placeholder: 'Username',
      error: 'Insert a valid username',
      maxLength: 32,
    },
    email: {
      placeholder: 'Email',
      error: 'Insert a valid email',
      maxLength: 32,
    },
    password: {
      placeholder: 'Password',
      error: 'Insert a valid password',
      maxLength: 32,
      password: true,
      secureTextEntry: true,
    },
    repeatPassword: {
      placeholder: 'Repeat Password',
      maxLength: 32,
      password: true,
      secureTextEntry: true,
    }
  },
};

class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: {},
      options: defaultOptions
    };
  }

  onChange = (value) => {
    this.setState({value})
  }

  onSignUp = () => {
    let values = this.refs.form.getValue();
    this.setState({options: defaultOptions});
    if(values) {
      try {
        this.props.createUser(values)
      } catch(res) {
        console.log(66666666);
        console.log(res);
      }
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
      <KeyboardAwareScrollView>
      <View style={ApplicationStyles.mainContainer}>
        <Text h1 style={ApplicationStyles.headerTitle}>Stoik PPR</Text>
        <Image
          source={Images.logo}
          style={ApplicationStyles.logo}
          resizeMode="contain"/>
        <View style={ApplicationStyles.form}>
          <Text h4 style={ApplicationStyles.subTitle}>Sign up</Text>
          <View style={ApplicationStyles.container}>
            <Form
              ref="form"
              type={SignUpParams}
              options={this.state.options}
              value={this.state.value}
              onChange={this.onChange}/>
            <Button
              buttonStyle={ApplicationStyles.btn}
              onPress={this.onSignUp}
              underlayColor='#99d9f4'
              title='Sign up' />
          </View>
          <Divider style={ApplicationStyles.divider}/>
          <Text h5 style={ApplicationStyles.infoText}>Already have an account?
            <Text style={ApplicationStyles.linkText} onPress={() => navigate('SignIn')}>
              {' '}Sign in here
            </Text>
          </Text>
        </View>
      </View>
      </KeyboardAwareScrollView>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  createUser: (user) => dispatch(Session.signup(user)),
})

export default connect(null, mapDispatchToProps)(SignUpForm)