import React, { Component } from 'react';
import { Item, Input, Text } from 'native-base';
var t = require('tcomb-form-native');

var Form = t.form.Form;

var Gender = t.enums({
    'M': 'Male',
    'F': 'Female'
});

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
      />
    );
  };
};

export default PersonalDataForm;
