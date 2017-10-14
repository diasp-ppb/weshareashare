import { StyleSheet, View, Text, TouchableHighlight } from 'react-native';

var React = require('react');
var t = require('tcomb-form-native');

var Form = t.form.Form;

var LoginParams = t.struct({
  email: t.String,             
  password: t.String  
});

var options = {
    label: 'Login',
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

var Login = React.createClass({

  onPress: function () {
    var value = this.refs.form.getValue();
    if (value) { 
      console.log(value); 
    }
  },

  render: function() {
    return (
      <View style={styles.container}>
        {/* display */}
        <Form
          ref="form"
          type={LoginParams}
          options={options}
        />
        <TouchableHighlight style={styles.button} onPress={this.onPress} underlayColor='#99d9f4'>
          <Text style={styles.buttonText}>Log in</Text>
        </TouchableHighlight>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 50,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 30,
    alignSelf: 'center',
    marginBottom: 30
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  button: {
    height: 36,
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  }
});

export default Login;
