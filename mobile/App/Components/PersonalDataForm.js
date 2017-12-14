import React, { Component } from 'react';
import { Item, Input, Text } from 'native-base';
import { ApplicationStyles, Colors } from '@theme/';
import {StyleSheet} from 'react-native';
var t = require('tcomb-form-native');

var Form = t.form.Form;

var Gender = t.enums({
    'M': 'Male',
    'F': 'Female'
}, "Gender");

var Person = t.struct({
    name: t.maybe(t.String),
    gender: t.maybe(Gender),
    address: t.maybe(t.String),
    postal: t.maybe(t.String),
    city: t.maybe(t.String),
    id: t.maybe(t.Number),
    nif: t.maybe(t.Number),
    job: t.maybe(t.String),
    nationality: t.maybe(t.String)
});

var options = {
    auto:'placeholders',
    stylesheet: stylesheet,
    fields:{
        name:{
            placeholder: "Name"
        },
        gender: {
            nullOption: false
        },
        address: {
            placeholder: "Address",
        },
        postal: {
            placeholder: "Postal",
        },
        city: {
            placeholder: "City",
        },
        id: {
            placeholder: "Id",
        },
        nif: {
            placeholder: "Nif",
        },
        job: {
            placeholder: "Job",
        },
        nationality: {
            placeholder: "Nationality",
        },
    }
}

var initialValues = {
    // gender: 'M',
}

class PersonalDataForm extends Component {
  constructor(props) {
    super(props);
  };

  //assigning function to be used by parent
  componentDidMount(){
      this.props.onRef(this);
  }

  componentWillUnmount(){
      this.props.onRef(undefined);
  }

  retrieveValues(){
      var values = this.refs.form.getValue();
      return values;
  }

  render() {
    return (
      <Form
          ref="form"
          type={Person}
          options={options}
          value={initialValues}
      />
    );
  };
};

export default PersonalDataForm;

var styles = StyleSheet.create({
    center: {
        borderColor: Colors.lightBlue,
    }

});


var stylesheet = t.form.Form.stylesheet;

stylesheet.textbox.normal.borderWidth = 0;
stylesheet.textbox.error.borderWidth = 0;
stylesheet.textbox.normal.marginBottom = 0;
stylesheet.textbox.error.marginBottom = 0;

stylesheet.textboxView.normal.borderWidth = 0;
stylesheet.textboxView.error.borderWidth = 0;
stylesheet.textboxView.normal.borderRadius = 0;
stylesheet.textboxView.error.borderRadius = 0;
stylesheet.textboxView.normal.borderBottomWidth = 1;
stylesheet.textboxView.error.borderBottomWidth = 1
stylesheet.textboxView.normal.borderBottomColor = Colors.lightBlue;
stylesheet.textboxView.error.borderBottomColor = Colors.lightBlue;
stylesheet.textbox.normal.marginBottom = 5;
stylesheet.textbox.error.marginBottom = 5;
stylesheet.textbox.normal.borderColor = Colors.lightBlue;
stylesheet.textbox.error.borderColor = Colors.lightBlue;
stylesheet.textbox.normal.borderBottomColor = Colors.lightBlue;
stylesheet.textbox.error.borderBottomColor = Colors.lightBlue;
