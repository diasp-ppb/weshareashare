import React, { Component } from 'react';
import { View, ScrollView, Image } from 'react-native';
import I18n from '@i18n/i18n';
import { ApplicationStyles, Colors, Fonts, Assets } from '@theme/';
import { Card, Text as CustomText, Spacer } from '@ui/';
import { Users } from '@services/API';
import StepIndicator from '@components/StepIndicator';
import AppStep from '@components/AppStep';

export default class Saving extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: I18n.t('otherInvest'),
  });

  constructor(props) {
    super(props);
    this.state = {
      currentPosition: 0,
      cause: null,
    };
  }

  componentWillMount() {
    Users.getUserCause(this.props.session).then((res) => {
      if (res.message !== null) {
        const cause = res;
        cause.image = Assets[res.image];
        this.setState({ cause });
      }
    }).catch((err) => {
      console.log(err);
    });
  }

  onStepPress = (position) => {
    const { navigate } = this.props.navigation;
    switch (position) {
      case 0:
        navigate('Subscription', { formIndex: 2 });
        break;
      case 1:
        navigate('Subscription', { index: 0 });
        break;
      case 2:
        navigate('Causes', { categoryIndex: 0, informative: false });
        break;
    }
  }

  currentCause = () => {
    return (
      <View>
        <CustomText h3 style={[ApplicationStyles.paddingTop, { color: Colors.textSecondary }]}>
          Está a suportar a seguinte causa:
        </CustomText>
        <Spacer size={10} />
        <CustomText h2 style={[ApplicationStyles.textCenterAligned]}>{this.state.cause.name}</CustomText>
        <Image
          style={ApplicationStyles.logo}
          resizeMode="contain"
          source={this.state.cause.image}
        />
        <CustomText h3>{this.state.cause.shortDescription}</CustomText>
      </View>
    );
  }

  render() {
    const labels = [
      { name: 'Indique os seus dados pessoais' },
      { name: 'Defina o seu perfil de risco' },
      { name: 'Escolha a causa a apoiar' }];
    const customStyles = {
      stepIndicatorSize: 40,
      currentStepIndicatorSize: 40,
      separatorStrokeWidth: 0,
      currentStepStrokeWidth: 6,
      stepStrokeCurrentColor: Colors.stoikOrange,
      stepStrokeWidth: 3,
      stepStrokeFinishedColor: Colors.stoikBlue,
      stepStrokeUnFinishedColor: Colors.stoikBlue,
      separatorFinishedColor: Colors.stoikBlue,
      separatorUnFinishedColor: Colors.stoikOrange,
      stepIndicatorFinishedColor: Colors.stoikBlue,
      stepIndicatorUnFinishedColor: Colors.stoikBlue,
      stepIndicatorCurrentColor: Colors.stoikOrange,
      stepIndicatorLabelFontSize: Fonts.base.size * 1.75,
      currentStepIndicatorLabelFontSize: Fonts.base.size * 1.75,
      stepIndicatorLabelCurrentColor: Colors.background,
      stepIndicatorLabelFinishedColor: Colors.background,
      stepIndicatorLabelUnFinishedColor: Colors.background,
      labelColor: Colors.stoikBlue,
      labelSize: Fonts.base.size * 1.5,
      descriptionColor: Colors.label,
      descriptionSize: Fonts.base.size,
      currentStepLabelColor: Colors.stoikOrange,
    };
    return (
      <ScrollView style={ApplicationStyles.container}>
        <Card>
          <CustomText h3 style={[ApplicationStyles.paddingTop, { color: Colors.textSecondary }]}>
            Bem-vindo!
          </CustomText>
          <Spacer size={10} />
          <CustomText h3 style={{ color: Colors.textSecondary, fontWeight: '500' }}>
            Passos para começar a investir:
          </CustomText>
          <Spacer size={25} />
          <View style={ApplicationStyles.containerCentered}>
            <StepIndicator
              customStyles={customStyles}
              labels={labels}
              currentPosition={this.state.currentPosition}
              stepCount={3}
              direction={'vertical'}
              onPress={(position) => { this.onStepPress(position); }}
            />
          </View>
          <Spacer size={10} />

          { (this.state.cause !== null) ?
            this.currentCause() : console.log('hello')
          }
        </Card>
        <AppStep index={3} {...this.props} />
      </ScrollView>
    );
  }
}
