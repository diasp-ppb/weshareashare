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
      session: props.session.session,
      value: {},
      options: defaultOptions,
      serverResponse: '',
    };
  }

  onChange = (value) => {
    this.setState({value});
  }

  onSignIn = () => {
    let values = this.refs.form.getValue();
    this.setState({value: null});

    if (values) {
      SessionAPI.authenticate(values.email, values.password, this.state.session)
      .then((res) => {
        this.props.authUser(res);
      })
      .catch(err => {
        if (err.response && err.response.json) {
          err.response.json().then((json) => {
          var statusRes = err.response.status;
          var messageRes = json[0].message;
          this.setState({serverResponse: messageRes});
          });
        }
        
        this.props.onRequestFailed(err); 
      });
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
          <Text>{this.state.serverResponse}</Text>

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

const mapStateToProps = (state) => {
  return { session: state };
};

const mapDispatchToProps = (dispatch) => ({
  authUser: (res) => dispatch(Session.authenticate(res)),
  onRequestFailed: (exception) => dispatch(Session.onRequestFailed(exception)),
})

export default connect(mapStateToProps, mapDispatchToProps)(SignInForm)
