import React, { Component } from 'react';
import { Item, Input, Text } from 'native-base';
import { ApplicationStyles, Colors } from '@theme/';
import { View, Platform } from 'react-native';
import DatePicker from '@components/DatePicker';

const t = require('tcomb-form-native');

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

const Gender = t.enums({
  M: 'Masculino',
  F: 'Feminino',
}, 'Gender');

const Person = t.struct({
  NAME: t.maybe(t.String),
  GENDER: t.maybe(Gender),
});

const Person2 = t.struct({
  TELEPHONE: t.maybe(t.Number),
  CELLPHONE: t.maybe(t.Number),
  ADDRESS: t.maybe(t.String),
  POSTAL: t.maybe(t.String),
  AREA: t.maybe(t.String),
  ID: t.maybe(t.Number),
  NIF: t.maybe(t.Number),
  JOB: t.maybe(t.String),
  EMPLOYER: t.maybe(t.String),
});

const options = {
  auto: 'placeholders',
  stylesheet,
  fields: {
    NAME: {
      placeholder: 'Nome Completo',
    },
    GENDER: {
      label: 'Género',
    },
  },
};

const options2 = {
  auto: 'placeholders',
  stylesheet,
  fields: {
    TELEPHONE: {
      placeholder: 'Nº de telefone',
    },
    CELLPHONE: {
      placeholder: 'Nº de telemóvel',
    },
    ADDRESS: {
      placeholder: 'Morada',
    },
    POSTAL: {
      placeholder: 'Código Postal',
    },
    AREA: {
      placeholder: 'Localidade',
    },
    ID: {
      placeholder: 'BI/CC nº',
    },
    NIF: {
      placeholder: 'NIF',
    },
    JOB: {
      placeholder: 'Profissão',
    },
    EMPLOYER: {
      placeholder: 'Entidade Patronal',
    },
  },
};

const PersonAndroid = t.struct({
  NAME: t.maybe(t.String),
  GENDER: t.maybe(Gender),
  BIRTHDAY: t.maybe(t.Date),
  TELEPHONE: t.maybe(t.Number),
  CELLPHONE: t.maybe(t.Number),
  ADDRESS: t.maybe(t.String),
  POSTAL: t.maybe(t.String),
  AREA: t.maybe(t.String),
  ID: t.maybe(t.Number),
  NIF: t.maybe(t.Number),
  JOB: t.maybe(t.String),
  EMPLOYER: t.maybe(t.String),
});

const optionsAndroid = {
  auto: 'placeholders',
  stylesheet,
  fields: {
    NAME: {
      placeholder: 'Nome Completo',
    },
    GENDER: {
      label: 'Género',
      nullOption: false,
      mode: 'dropdown',
    },
    BIRTHDAY: {
      label: 'Data de Nascimento',
      config: {
        format: (date) => date.toDateString(),
      },
      mode: 'date',
    },
    TELEPHONE: {
      placeholder: 'Nº de telefone',
    },
    CELLPHONE: {
      placeholder: 'Nº de telemóvel',
    },
    ADDRESS: {
      placeholder: 'Morada',
    },
    POSTAL: {
      placeholder: 'Código Postal',
    },
    AREA: {
      placeholder: 'Localidade',
    },
    ID: {
      placeholder: 'BI/CC nº',
    },
    NIF: {
      placeholder: 'NIF',
    },
    JOB: {
      placeholder: 'Profissão',
    },
    EMPLOYER: {
      placeholder: 'Entidade Patronal',
    },
  },
};

const initialValue = {
  GENDER: 'M',
};

class ParticipantFields extends Component {
  constructor(props) {
    super(props);

    this.date = new Date('1980-01-01');

    this.updateDataIOS = this.updateDataIOS.bind(this);
  }

  componentDidMount() {
    this.props.onRef(this);
  }

  componentWillUnmount() {
    this.props.onRef(undefined);
  }

  retrieveValues() {
    if (Platform.OS === 'ios') {
      const inputArea1 = this.refs.form.getValue();
      const inputArea2 = this.refs.form2.getValue();


      const PersonIOS = {
        NAME: (inputArea1["NAME"] != undefined) ? inputArea1["NAME"] : '',
        GENDER: (inputArea1["GENDER"] != undefined) ? inputArea1["GENDER"] : '',
        BIRTHDAY: this.date.toISOString(),
        TELEPHONE:  (inputArea2["TELEPHONE"] != undefined) ? inputArea2["TELEPHONE"] : '',
        CELLPHONE: (inputArea2["CELLPHONE"] != undefined) ? inputArea2["CELLPHONE"] : '',
        ADDRESS:  (inputArea2["ADDRESS"] != undefined) ? inputArea2["ADDRESS"] : '',
        POSTAL:  (inputArea2["POSTAL"] != undefined) ? inputArea2["POSTAL"] : '',
        AREA:  (inputArea2["AREA"] != undefined) ? inputArea2["AREA"] : '',
        ID: (inputArea2["ID"] != undefined) ? inputArea2["ID"] : '',
        NIF: (inputArea2["NIF"] != undefined) ? inputArea2["NIF"] : '',
        JOB:  (inputArea2["JOB"] != undefined) ? inputArea2["JOB"] : '',
        EMPLOYER:  (inputArea2["EMPLOYER"] != undefined) ? inputArea2["EMPLOYER"] : '',
      };

      console.log(PersonIOS);
      return PersonIOS;
    } else if (Platform.OS === 'android') {
    console.log(this.refs.formAndroid.getValue());
      return this.refs.formAndroid.getValue();
    }
  }

  updateDataIOS(date) {
    this.date = date;
    console.log(this.date);
  }

  render() {
    if (Platform.OS === 'ios') {
      return (
        <View>
          <Form
            ref="form"
            type={Person}
            options={options}
            value={initialValue}
          />
          <DatePicker update={this.updateDataIOS} />
          <Form
            ref="form2"
            type={Person2}
            options={options2}
          />
        </View>
      );
    } else if (Platform.OS === 'android') {
      return (
        <View>
          <Form
            ref="formAndroid"
            type={PersonAndroid}
            options={optionsAndroid}
            value={initialValue}
          />
        </View>
      );
    }
  }
}

export default ParticipantFields;
