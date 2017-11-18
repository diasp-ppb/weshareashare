import { StyleSheet, View, TextInput, Text, StatusBar } from 'react-native';

const React = require('react');
const t = require('tcomb-form-native');

const { AppRegistry, TouchableHighlight } = React;

const Form = t.form.Form;

const Method = t.enums({
  T: 'Transfer',
  D: 'Deposit',
  C: 'Check',
});

// here we are: define your domain model
const Person = t.struct({
  money: t.Number, // a required number
  method: Method, // a boolean
});

const Subscription = React.createClass({

  getInitialState() {
    const value = {
      method: 'T',
      iban: 'PT 23492y4 23147 21347',
      gcd: '23423456435',
    };
    const help = {
      iban: 'Transfer to this account',
    };
    const editable = {
      iban: { $set: !value.disable },
    };
    return { value, type: this.changeType(value) };
  },

  changeType(value) {
    switch (value.method) {
      case 'T':
        return t.struct({
          money: t.Number, // a required number
          method: Method, // a boolean
          iban: t.String,
        });
        break;
      case 'D':
        return t.struct({
          money: t.Number, // a required number
          method: Method, // a boolean
          gcd: t.String,
        });
        break;
      case 'C':
        return t.struct({
          money: t.Number, // a required number
          method: Method, // a boolean
          'Check No': t.Number,
          bank: t.String,
          ppr: t.Boolean,
        });
        break;
      default:
        return t.struct({
          money: t.Number, // a required number
          method: Method, // a boolean
        });
    }
  },

  onChange(value) {
    const type = value.method !== this.state.value.method ?
      this.changeType(value) :
      this.state.type;
    this.setState({ value, type });
  },

  render() {
    return (
      <View style={styles.container}>
        {/* display */}
        <TextInput
          style={styles.message}
          editable={false}
          multiline
          value="   Hello, Luis Jordao!
         Choose your method of payment. "
        />
        <Form
          ref="form"
          type={this.state.type}
          value={this.state.value}
          onChange={this.onChange}
        />

      </View>
    );
  },
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
    marginBottom: 30,
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center',
  },
  button: {
    height: 36,
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center',
  },
  message: {
    borderRadius: 10,
    height: 70,
    borderColor: '#80deea',
    borderWidth: 1,
    backgroundColor: '#80deea',
    color: '#455a64',
    elevation: 20,

  },
});

export default Subscription;
