import React, { Component } from 'react';
const t = require('tcomb-form-native');

import { Colors } from '@theme/';

const Form = t.form.Form;

const stylesheet = t.form.Form.stylesheet;

stylesheet.textbox.normal.borderWidth = 0;
stylesheet.textbox.error.borderWidth = 0;
stylesheet.textbox.normal.marginBottom = 0;
stylesheet.textbox.error.marginBottom = 0;

stylesheet.textboxView.normal.borderWidth = 0;
stylesheet.textboxView.error.borderWidth = 0;
stylesheet.textboxView.normal.borderRadius = 0;
stylesheet.textboxView.error.borderRadius = 0;
stylesheet.textboxView.normal.borderBottomWidth = 1;
stylesheet.textboxView.error.borderBottomWidth = 1;
stylesheet.textboxView.normal.borderBottomColor = Colors.lightBlue;
stylesheet.textboxView.error.borderBottomColor = Colors.lightBlue;
stylesheet.textbox.normal.marginBottom = 5;
stylesheet.textbox.error.marginBottom = 5;
stylesheet.textbox.normal.borderColor = Colors.lightBlue;
stylesheet.textbox.error.borderColor = Colors.lightBlue;
stylesheet.textbox.normal.borderBottomColor = Colors.lightBlue;
stylesheet.textbox.error.borderBottomColor = Colors.lightBlue;

stylesheet.datepicker.normal.flexDirection = 'row';
stylesheet.datepicker.normal.flex = 1;


const Method = t.enums({
  0: 'Transferência Bancária',
  1: 'Depósito junto da CGD',
  2: 'Cheque',
  3: 'Transferência PPR',
}, 'Method');

const Periodicity = t.enums({
  0: 'Mensal',
  1: 'Trimestral',
  2: 'Semestral',
  3: 'Anual',
}, 'Method');

const subscriptionCheckFields = t.struct({
  VALUE: t.maybe(t.Number),
  METHOD: t.maybe(Method),
  IBAN: t.maybe(t.String),
  DEBIT: t.maybe(t.Number),
  GROWTH: t.maybe(t.Number),
  PERIODICITY: t.maybe(Periodicity),
  // INITIALDATE: t.maybe(t.Date),
});

const options = {
  auto: 'placeholders',
  stylesheet,
  fields: {
    VALUE: {
      placeholder: 'Entrega Inicial (€)',
    },
    METHOD: {
      label: 'Método para a entrega inicial',
    },
    CHECKNO: {
      placeholder: 'Número do cheque (caso escolha cheque)',
    },
    CHECKBANK: {
      placeholder: 'Banco do cheque (caso escolha cheque)',
    },
    IBAN: {
      label: 'Preencha os próximos campos apenas se desejar débito direto.',
      placeholder: 'IBAN para débito direto',
    },
    DEBIT: {
      placeholder: 'Valor para débito direto (€)',
    },
    GROWTH: {
      placeholder: 'Crescimento anual do valor (%)',
    },
    PERIODICITY: {
      label: 'Periodicidade de transferência',
    },
  },
};

class SubscriptionFields extends Component {
  componentDidMount() {
    this.props.onRef(this);
  }

  componentWillUnmount() {
    this.props.onRef(undefined);
  }

  retrieveValues() {
    return this.refs.form.getValue();
  }

  render() {
    return (
      <Form
        ref="form"
        type={subscriptionCheckFields}
        options={options}
      />
    );
  }
}

export default SubscriptionFields;
