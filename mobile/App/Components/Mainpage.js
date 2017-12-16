import React, { Component } from 'react';
import { View } from 'react-native';
import I18n from '@i18n/i18n';
import StepIndicator from '@components/StepIndicator';
import { ApplicationStyles, Colors, Fonts } from '@theme/';

export default class Mainpage extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: I18n.t('mainMenu'),
  });

  constructor(props) {
    super(props);
    this.state = {
      currentPosition: 2,
    };
  }

  onStepPress = (position) => {
    const { navigate } = this.props.navigation;
    switch (position) {
      case 0: navigate('Saving'); break;
      case 1: navigate('Investment'); break;
      case 2: navigate('Share'); break;
      case 3: navigate('Invest'); break;
    }
  }

  render() {
    const labels = [
      { name: 'A POUPANÇA', description: 'Saiba mais sobre a importância de poupar e os benefícios do PPR SGF Stoik Ações. Simule diferentes níveis de poupança.' },
      { name: 'O INVESTIMENTO', description: 'Conheça a carteira de activos e rendibilidades do PPR SGF Stoik Ações.' },
      { name: 'A PARTILHA', description: 'Utilize o PPR SGF Stoik Ações como uma ferramenta de partilha com uma causa.' },
      { name: 'COMECE A INVESTIR', description: 'Subscreva ou reforce a sua participação no PPR SGF Stoik Ações.' }];
    const customStyles = {
      stepIndicatorSize: 75,
      currentStepIndicatorSize: 75,
      separatorStrokeWidth: 5,
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
      <View style={ApplicationStyles.mainContainer}>
        <View style={[ApplicationStyles.container, ApplicationStyles.containerCentered]}>
          <StepIndicator
            customStyles={customStyles}
            labels={labels}
            currentPosition={this.state.currentPosition}
            stepCount={4}
            direction={'vertical'}
            onPress={(position) => { this.onStepPress(position); }}
          />
        </View>
      </View>
    );
  }
}
