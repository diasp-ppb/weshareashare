import React, { Component } from 'react';
import RadioButton from 'radio-button-react-native';
import PropTypes from 'prop-types';
import { View, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Text } from 'native-base';
import Toast from 'react-native-root-toast';
import styles from './CausesListStyle';
import I18n from '@i18n/i18n';

const _ = require('lodash');

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
    if (cause === null) { cause = -1; }
    this.state = {
      causeSelected: cause,
    };
  }

  handleSubmit = () => {
    const id = this.state.causeSelected;
    const cause = _.find(this.props.causes, ['id', id]);
    if (id !== -1 && this.props.submit) {
      this.props.submit(id, this.props.session).then((res) => {
        if (this.props.onSuccessfulSubmit) {
          this.props.onSuccessfulSubmit(res);
        }
        Toast.show(`Causa ${cause.name} selecionada com sucesso!`, ApplicationStyles.toastSuccess);
      }).catch(() => {
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
