import React, { Component } from 'react';
import RadioButton from 'radio-button-react-native';
import PropTypes from 'prop-types';
import { View, TouchableOpacity, Image, ScrollView, TextInput } from 'react-native';
import { Text } from 'native-base';
import Toast from 'react-native-root-toast';
import styles from './CausesListStyle';
import I18n from '@i18n/i18n';

const _ = require('lodash');
const t = require('tcomb-form-native');
const Form = t.form.Form;
let stylesheet = t.form.Form.stylesheet;
stylesheet.textbox.normal.borderWidth = 0;
stylesheet.textbox.error.borderWidth = 0;
stylesheet.textboxView.normal.borderWidth = 0;
stylesheet.textboxView.error.borderWidth = 0;
stylesheet.textboxView.normal.borderRadius = 0;
stylesheet.textboxView.error.borderRadius = 0;
stylesheet.textboxView.normal.borderBottomWidth = 1;
stylesheet.textboxView.error.borderBottomWidth = 1;
stylesheet.textboxView.normal.borderBottomColor = Colors.lightBlue;
stylesheet.textboxView.error.borderBottomColor = Colors.lightBlue;
stylesheet.textbox.normal.paddingBottom = 11;
stylesheet.textbox.error.paddingBottom = 11;
stylesheet.textbox.normal.marginBottom = -6;
stylesheet.textbox.error.marginBottom = -6;
stylesheet.textbox.normal.borderColor = Colors.lightBlue;
stylesheet.textbox.error.borderColor = Colors.lightBlue;
stylesheet.textbox.normal.borderBottomColor = Colors.lightBlue;
stylesheet.textbox.error.borderBottomColor = Colors.lightBlue;


const types = t.struct({
  CAUSE: t.maybe(t.String),
});

const options = {
  auto: 'placeholders',
  stylesheet,
  fields: {
    CAUSE: {
      placeholder: 'Outra Causa',
    },
  },
};

import { ApplicationStyles, Colors } from '@theme/';
import { Card, Spacer, Text as CustomText, Button } from '@ui/';

class CausesList extends Component {
  static propTypes = {
    submit: PropTypes.func,
    session: PropTypes.object,
    causes: PropTypes.array,
    informative: PropTypes.bool,
  }

  static defaultProps = {
    submit: null,
    session: null,
    causes: [],
    informative: true,
  }

  constructor(props) {
    super(props);
    let cause = this.props.session.user.cause;
    let causeName = "";
    if (cause === null) {
      if (causeName === null) {
        cause = -1;
      } else {
        cause = 0;
        causeName = this.props.session.user.causeName;
      }
    }

    this.state = {
      causeSelected: cause,
      causeName: causeName
    };
  }

  handleSubmit = () => {
    const id = this.state.causeSelected;
    const cause = _.find(this.props.causes, ['id', id]);
    const causeParams = {
      "id": id
    }

    if (id === '0') {
      causeName = this.refs.otherCauseForm.getValue().CAUSE;
    } else {
      causeName = cause.name;
    }

    causeParams.name = causeName;

    if (id !== -1 && this.props.submit) {
      this.props.submit(causeParams, this.props.session).then((res) => {
        if (this.props.onSuccessfulSubmit) {
        console.log(res);
          this.props.onSuccessfulSubmit(res);
        }
        Toast.show(`Causa ${causeName} selecionada com sucesso!`, ApplicationStyles.toastSuccess);
      }).catch((exc) => {
        Toast.show('Ocorreu um erro ao selecionar a causa desejada!', ApplicationStyles.toastError);
      });
    }
  }

  handleOnPress = (value) => {
    this.setState({ causeSelected: value });
  }

  createCausesButtons = () => {
    const { navigate } = this.props.navigation;
    if (this.props.causes && this.props.causes.length > 0) {
      return this.props.causes.map((s, i) => {
        return (
          <View key={i} style={[ApplicationStyles.paddingBottom, { flex: 1 }]}>
            <View style={{ flexDirection: 'row' }}>
              {(!this.props.informative) &&
                <RadioButton currentValue={this.state.causeSelected} value={s.id} onPress={this.handleOnPress} outerCircleColor={Colors.stoikBlue} innerCircleColor={Colors.stoikBlue}>
                  <Text style={[ApplicationStyles.h1, { paddingHorizontal: 5 }]}>{s.name}</Text>
                </RadioButton>
              }
              {(this.props.informative) &&
                <Text style={[ApplicationStyles.h1]}>{s.name}</Text>
              }
            </View>
            <View style={styles.logoAndDescription}>
              <View style={styles.logoContainer}>
                <Image
                  style={styles.logo}
                  resizeMode="contain"
                  source={s.image}
                />
              </View>
              <View style={styles.description}>
                <Text style={[ApplicationStyles.h4]}>{s.shortDescription}</Text>
                <Spacer size={10} />
              </View>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'flex-end' }}>
              <Text style={[ApplicationStyles.nextLink, { textAlign: 'right' }]} onPress={() => { navigate('Cause', { cause: s }); }}>Mais sobre {s.name}</Text>
            </View>
          </View>
        );
      });
    }
    return [];
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView style={ApplicationStyles.container}>
        <Card>
          {this.createCausesButtons()}
          <View key='0' style={[ApplicationStyles.paddingBottom, { flexDirection: 'row', flex: 1 }]}>
            <View style={{ flex: 1 }}>
              <RadioButton currentValue={this.state.causeSelected} value='0' onPress={this.handleOnPress} outerCircleColor={Colors.stoikBlue} innerCircleColor={Colors.stoikBlue}></RadioButton>
            </View>
            <View style={{ flex: 7 }}>
              <Form
                ref="otherCauseForm"
                type={types}
                options={options}
                value={{"CAUSE": this.state.causeName}}
              />
            </View>
          </View>
          <Spacer size={25} />

          {(this.props.informative) &&
            <TouchableOpacity
              style={[ApplicationStyles.rightAligned]}
              onPress={() => navigate('Invest')}
            >
              <CustomText p style={[ApplicationStyles.nextLink]}>
               Comece a Investir >
              </CustomText>
            </TouchableOpacity>
          }
          {(!this.props.informative) &&
            <Button title="Suporte a causa" onPress={this.handleSubmit} />
          }
        </Card>
      </ScrollView>
    );
  }
}

export default CausesList;
