import { StyleSheet, View, TextInput, Text, StatusBar } from 'react-native';

var React = require('react');
var t = require('tcomb-form-native');
var { AppRegistry, TouchableHighlight } = React;

var Nif = t.refinement(t.Number, function (n) { return n >= 100000000; });

// if you define a getValidationErrorMessage function, it will be called on validation errors
Nif.getValidationErrorMessage = function (value, path, context) {
  return 'Invalid nif, locale: ' + context.locale;
};

var Form = t.form.Form;

var options = {
  fields: {
    agree: {
      label: 'I am US Person' // <= label for the agree field
    },
    nif: {
      label: 'NIF', // <= label for the nif field
      placeholder: 'Fiscal identification number' // <= help for the nif field
    }
  }
};

// here we are: define your domain model
var Person = t.struct({
  name: t.String,
  nif: Nif,      // a required number
  agree: t.Boolean
});

var Subscription = React.createClass({
    onChange(){
        var value = this.refs.form.getValue();
        if(value && value.agree){
          console.log(value); // value here is an instance of Person
        }
    },

    render:function() {
        return (
          <View style={styles.container}>
            {/* display */}
            <TextInput style={styles.message} editable={false} multiline={true}
                value="Hello, Luis Jordao! Please read the FATCA Agreement Form. "/>
            <Form
              ref="form"
              options={options}
              type={Person}
              onChange={this.onChange}
            />

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
  },
  message: {
    borderRadius: 10,
    height: 70,
    borderColor: '#80deea',
    borderWidth: 1,
    backgroundColor: "#80deea",
    color: "#455a64",
    elevation: 20,

  }
});

export default Subscription;
