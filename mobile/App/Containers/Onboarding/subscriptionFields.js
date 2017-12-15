import React, { Component } from 'react';
import { Item, Input, Text } from 'native-base';
import { ApplicationStyles, Colors } from '@theme/';
import {StyleSheet} from 'react-native';
import I18n from '@i18n/i18n';
var t = require('tcomb-form-native');

var Form = t.form.Form;

var Method = t.enums({
    0: 'Transferência Bancária',
    1: 'Depósito junto da CGD',
    2: 'Cheque',
    3: 'Transferência PPR',
}, "Method");

var Periodicity = t.enums({
    0: 'Mensal',
    1: 'Trimestral',
    2: 'Semestral',
    3: 'Anual',
}, "Method");

var subscriptionCheckFields = t.struct({
    VALUE: t.maybe(t.Number),
    METHOD: t.maybe(Method),
    IBAN: t.maybe(t.String),
    DEBIT: t.maybe(t.Number),
    GROWTH: t.maybe(t.Number),
    PERIODICITY: t.maybe(Periodicity),
    //INITIALDATE: t.maybe(t.Date),
});

class SubscriptionFields extends Component {
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
      return {key: "subscription", value: values};
  }

  render() {
    return (
      <Form
          ref="form"
          type={subscriptionCheckFields}
          options={this.props.options}
      />
    );
  };
};

export default SubscriptionFields;

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

stylesheet.datepicker.normal.flexDirection = "row";
stylesheet.datepicker.normal.flex = 1;
