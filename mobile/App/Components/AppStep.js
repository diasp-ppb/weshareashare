import React, { Component } from 'react';
import { View } from 'react-native';
import StepIndicator from '@components/StepIndicator';
import { ApplicationStyles, Colors } from '@theme/';

export default class AppStep extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPosition: this.props.index,
    };
  }

  onStepPress = (position) => {
    const { navigate } = this.props.navigation;
    switch (position) {
      case 0: navigate('Saving'); break;
      case 1: navigate('Investment'); break;
      case 2: navigate('Share'); break;
      case 3: navigate('Onboarding'); break;
    }
  }

  render() {
    const labels = [
      { name: 'A POUPANÇA' },
      { name: 'O INVESTIMENTO' },
      { name: 'A PARTILHA' },
      { name: 'COMECE A INVESTIR' }];
    const customStyles = {
      stepIndicatorSize: 25,
      currentStepIndicatorSize: 30,
      separatorStrokeWidth: 2,
      currentStepStrokeWidth: 3,
      stepStrokeCurrentColor: Colors.stoikBlue,
      stepStrokeWidth: 3,
      stepStrokeFinishedColor: '#aaaaaa',
      stepStrokeUnFinishedColor: '#aaaaaa',
      separatorFinishedColor: '#aaaaaa',
      separatorUnFinishedColor: '#aaaaaa',
      stepIndicatorFinishedColor: '#aaaaaa',
      stepIndicatorUnFinishedColor: '#aaaaaa',
      stepIndicatorCurrentColor: Colors.stoikBlue,
      stepIndicatorLabelFontSize: 13,
      currentStepIndicatorLabelFontSize: 13,
      stepIndicatorLabelCurrentColor: '#ffffff',
      stepIndicatorLabelFinishedColor: '#ffffff',
      stepIndicatorLabelUnFinishedColor: '#ffffff',
      labelColor: '#999999',
      labelSize: 10,
      currentStepLabelColor: Colors.stoikBlue,
    };

    return (
      <View style={[ApplicationStyles.paddingVertical]}>
        <StepIndicator
          customStyles={customStyles}
          labels={labels}
          currentPosition={this.state.currentPosition}
          stepCount={4}
          direction={'horizontal'}
          onPress={(position) => { this.onStepPress(position); }}
        />
      </View>
    );
  }
}
