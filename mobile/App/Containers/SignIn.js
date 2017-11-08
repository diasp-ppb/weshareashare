import React, { Component } from 'react'
import { View, TouchableHighlight, Image } from 'react-native';
import { Images, ApplicationStyles } from '../Themes/index';
import { Button, Text, Divider } from 'react-native-elements';
import { connect } from 'react-redux'
import * as Session from '../Redux/Session';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import * as SessionAPI from '../Redux/Session/api';

const t = require('tcomb-form-native');
const Form = t.form.Form;
import * as Utils from '../Services/Utils'

const SignInParams = t.struct({
  email: Utils.Email,
  password: Utils.Password,
  rememberMe: t.Boolean,
});
const defaultOptions = {
  auto: 'placeholders',
  fields: {
    email: {
      placeholder: 'Email',
      error: 'Insert a valid email',
      maxLength: 32,
    },
    password: {
      placeholder: 'Password',
      password: true,
      maxLength: 32,
      secureTextEntry: true,
      error: 'Insert a valid password',
    },
  },
};

class SignInForm extends Component {
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

  onSignIn = () => {
    let values = this.refs.form.getValue();
    if(values) {
      this.setState({value: null});
      this.props.authUser(values.email, values.password);
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
          <Text h4 style={ApplicationStyles.subTitle}>Sign in</Text>
          <KeyboardAwareScrollView>
            <View style={ApplicationStyles.container}>
              <Form
                ref="form"
                type={SignInParams}
                options={this.state.options}
                value={this.state.value}
                onChange={this.onChange}/>
              <Button
                buttonStyle={ApplicationStyles.btn}
                onPress={this.onSignIn}
                underlayColor='#99d9f4'
                title='Sign in' />
            </View>
          </KeyboardAwareScrollView>
          <Divider style={ApplicationStyles.divider}/>
          <Text h5 style={ApplicationStyles.infoText}>
            <Text style={ApplicationStyles.linkText} onPress={() => navigate('ForgotPassword')}>
              {' '}Forgot your password?
            </Text>
          </Text>
          <Text h5 style={ApplicationStyles.infoText}>Not yet registered?
            <Text style={ApplicationStyles.linkText} onPress={() => navigate('SignUp')}>
              {' '}Sign up
            </Text>
          </Text>
        </View>
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  authUser: (email, password) => dispatch(Session.authenticate(email, password)),
})

export default connect(null, mapDispatchToProps)(SignInForm)
