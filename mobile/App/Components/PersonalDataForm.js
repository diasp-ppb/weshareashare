import React, { Component } from 'react';
import { Item, Input, Text } from 'native-base';
var t = require('tcomb-form-native');

var Form = t.form.Form;

var Gender = t.enums({
    'M': 'Male',
    'F': 'Female'
});

var Person = t.struct({
    name: t.String,
    gender: Gender,
    address: t.String,
    postal: t.String,
    city: t.String,
    id: t.Number,
    nif: t.Number,
    job: t.String,
    nationality: t.String
});

var options = {
    auto:'placeholders',
}

class PersonalDataForm extends Component {
  constructor(props) {
    super(props);
  };

  render() {
    return (
      <Form
          ref="form"
          type={Person}
          options={options}
      />
    );
  };
};

export default PersonalDataForm;
