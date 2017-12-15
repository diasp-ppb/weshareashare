import React, { Component } from 'react';
import { Item, Input, Text } from 'native-base';
import { ApplicationStyles, Colors } from '@theme/';
import {StyleSheet,View, DatePickerAndroid, DatePickerIOS, Platform,TouchableNativeFeedback} from 'react-native';
import I18n from '@i18n/i18n';
var t = require('tcomb-form-native');

var Form = t.form.Form;

var Gender = t.enums({
    'M': 'Masculino',
    'F': 'Feminino'
}, "Gender");

var Person = t.struct({
    NAME: t.maybe(t.String),
    GENDER: t.maybe(Gender),
});


var Person2 = t.struct({
    TELEPHONE: t.maybe(t.String),
    CELLPHONE: t.maybe(t.String),
    ADDRESS: t.maybe(t.String),
    POSTAL: t.maybe(t.String),
    AREA: t.maybe(t.String),
    ID: t.maybe(t.Number),
    NIF: t.maybe(t.Number),
    JOB: t.maybe(t.String),
    EMPLOYER: t.maybe(t.String)
});

var options = {
    auto:'placeholders',
    stylesheet: stylesheet,
    fields:{
        NAME:{
            placeholder: "Nome",
        },
        GENDER: {
            label: "Género",
        }
    }
}

var options2 =  {
    auto:'placeholders',
    stylesheet: stylesheet,
    fields:{
        TELEPHONE: {
            placeholder: "Nº de telefone",
        },
        CELLPHONE: {
            placeholder: "Nº de telemóvel",
        },
        ADDRESS: {
            placeholder: "Morada",
        },
        POSTAL: {
            placeholder: "Código Postal",
        },
        AREA: {
            placeholder: "Localidade",
        },
        ID: {
            placeholder: "BI/CC nº",
        },
        NIF: {
            placeholder: "NIF",
        },
        JOB: {
            placeholder: "Profissão",
        },
        EMPLOYER: {
            placeholder: "Entidade Patronal",
        }
    }
}

var initialValue = {
    GENDER : 'M'
}

class PersonalDataForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
        date: new Date("1980-01-01")
    }
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
      var inputArea2 = this.refs.forms2.getValue();

      values.push(this.state.date.toDateString());
      for(var i = 0; i < inputArea2.length; i++) {
          values.push(inputArea2[i]);
      }

      return values;
  }

  onDateChange(date) {
    this.setState({date: date})
      console.log(this.state.date.toDateString());
  }

  datePicker() {
      if(Platform.OS === 'ios'){
         return (
             <View>
                 <Text> Data de Nascimento </Text>
                <DatePickerIOS
                  date = {this.state.date}
                  onDateChange={value => this.onDateChange(value)}
                  mode="date"
                />
             </View>
         );
      } else if( Platform.OS === 'android') {
          let config = {
              date: this.state.date,
              mode: "date"
          }
          return (
              <TouchableNativeFeedback
                  accessible={true}
                  ref="input"
                  onPress={function() {
                      let config = {
                          date:  this.state.date,
                          mode: "data"
                      };

                      DatePickerAndroid.open(config).then(function(date) {
                          if (date.action !== DatePickerAndroid.dismissedAction) {
                              var newDate = new Date(locals.value);
                              newDate.setFullYear(date.year, date.month, date.day);
                              this.onDateChange(newDate);
                          }
                      });
                      if (typeof locals.onPress === "function") {
                          locals.onPress();
                      }
                  }}
              >
                <View>
                    <Text> Data de Nascimento </Text>
                    <Text> {this.state.date.toDateString()} </Text>
                </View>
              </TouchableNativeFeedback>
                  );
      }
  }


  render() {
    return (
        <View>
            <Form
                ref="form"
                type={Person}
                options={options}
                value={initialValue}
            />
            {this.datePicker()}
            <Form
                ref="form2"
                type={Person2}
                options={options2}
             />
        </View>
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

stylesheet.datepicker.normal.flexDirection = "row";
stylesheet.datepicker.normal.flex = 1;
