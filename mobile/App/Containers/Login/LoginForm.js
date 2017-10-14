import { StyleSheet, View, Text, TouchableHighlight } from 'react-native';

var React = require('react');
var t = require('tcomb-form-native');
var Form = t.form.Form;

var LoginParams = t.struct({
  email: t.String,             
  password: t.String  
});

var options = {
    auto: 'placeholders',
    fields: {
        email: {
            placeholder: "Email"
        },
        password: {
            placeholder: "Password",
            secureTextEntry: true
        }
    }
}; 

var LoginForm = React.createClass({

  onPressLoginBtn() {
    var value = this.refs.form.getValue();
    if (value) { 
      console.log(value); 
    }
  },

  render() {
    return (
      <View style={stylesLoginForm.container}>
        <Form
          ref="form"
          type={LoginParams}
          options={options}
        />
        <TouchableHighlight style={stylesLoginForm.button} onPress={this.onPressLoginBtn} underlayColor='#99d9f4'>
          <Text style={stylesLoginForm.buttonText}>Log in</Text>
        </TouchableHighlight>
        <Text style={{color: '#475B64', alignSelf: 'center', marginVertical: 10}}>
          Not a member? Sign up now.
        </Text>
      </View>
    );
  }

});

var stylesLoginForm = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginHorizontal: 20,
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  button: {
    height: 36,
    backgroundColor: '#475B64',
    borderColor: '#475B64',
    borderWidth: 1,
    borderRadius: 8,
    alignSelf: 'stretch',
    justifyContent: 'center'
  }
});

export default LoginForm;