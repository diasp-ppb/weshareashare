import { StyleSheet, View, TextInput, Text, StatusBar, TouchableHighlight } from 'react-native';

var React = require('react');
var t = require('tcomb-form-native');
var { AppRegistry} = React;

//Changing look of labels
t.form.Form.stylesheet.controlLabel.normal.backgroundColor = '#80deea';
t.form.Form.stylesheet.controlLabel.normal.borderWidth= 1;
t.form.Form.stylesheet.controlLabel.normal.borderRadius= 10;
t.form.Form.stylesheet.controlLabel.normal.borderColor = '#fff';
t.form.Form.stylesheet.controlLabel.normal.elevation= 20;
t.form.Form.stylesheet.controlLabel.normal.color = '#455a64';
t.form.Form.stylesheet.controlLabel.normal.padding= 10;
t.form.Form.stylesheet.controlLabel.normal.overflow= 'hidden';
t.form.Form.stylesheet.controlLabel.normal.marginRight = 100;

t.form.Form.stylesheet.textbox.normal.marginLeft = 100;
t.form.Form.stylesheet.checkbox.normal.alignSelf = 'flex-end';

var Form = t.form.Form;

var options = {
  fields: {
    name: {
      label: 'What is your name?' // <= label for the agree field
    },
    nif: {
      label: 'What is your NIF?', // <= label for the nif field
      placeholder: 'Fiscal identification number' // <= help for the nif field
    },
    agree: {
      label: 'Are you a US Person?' // <= label for the agree field
    }
  }
};

// here we are: define your domain model
var Person = t.struct({
  name: t.String,
  nif: t.Number,      // a required number
  agree: t.Boolean
});

var Subscription = React.createClass({
    onSubmit(){
      var value = this.refs.form.getValue();
      var valid = false;

      fetch('http://www.nif.pt/?json=1&q=' + value.nif + '&key=key')
      .then((response) => response.json())
      .then((responseJson) => {
        valid = responseJson.is_nif;

        if(value && valid){
          console.log("Valid inputs"); // value here is an instance of Person
        }
      })
      .catch((error) => {
        console.error(error);
      });
    },

    render:function() {
        return (
          <View style={styles.container}>
            {/* display */}
            <TextInput style={styles.message} editable={false} multiline={true}
                value="Hello, Luis Jordao! Please read the FATCA Agreement Form. "/>
            <Form style={styles.message}
              ref="form"
              options={options}
              type={Person}
            />

            <TouchableHighlight style={styles.button} onPress={this.onSubmit} underlayColor='#99d9f4'>
              <Text style={styles.buttonText}>Submit</Text>
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
    backgroundColor: '#80deea',
    borderColor: '#80deea',
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
