import React, { Component } from 'react';
import { View } from 'react-native';
import { Footer } from 'native-base';
import StepIndicator from '@components/StepIndicator';
import { Assets, ApplicationStyles, Colors, Fonts, Metrics } from '@theme/';

export default class AppStep extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPosition: this.props.index
    }
    console.log(props)
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
      {name: "A POUPANÇA"},
      {name: "O INVESTIMENTO"},
      {name: "A PARTILHA"},
      {name: "COMECE A INVESTIR"}];
    const customStyles = {
      stepIndicatorSize: 25,
      currentStepIndicatorSize:30,
      separatorStrokeWidth: 2,
      currentStepStrokeWidth: 3,
      stepStrokeCurrentColor: '#fe7013',
      stepStrokeWidth: 3,
      stepStrokeFinishedColor: '#fe7013',
      stepStrokeUnFinishedColor: '#aaaaaa',
      separatorFinishedColor: '#fe7013',
      separatorUnFinishedColor: '#aaaaaa',
      stepIndicatorFinishedColor: '#fe7013',
      stepIndicatorUnFinishedColor: '#ffffff',
      stepIndicatorCurrentColor: '#ffffff',
      stepIndicatorLabelFontSize: 13,
      currentStepIndicatorLabelFontSize: 13,
      stepIndicatorLabelCurrentColor: '#fe7013',
      stepIndicatorLabelFinishedColor: '#ffffff',
      stepIndicatorLabelUnFinishedColor: '#aaaaaa',
      labelColor: '#999999',
      labelSize: 10,
      currentStepLabelColor: '#fe7013'
    }
    
    return (
      <View style={[ApplicationStyles.paddingVertical]}>
        <StepIndicator
          customStyles={customStyles}
          labels={labels}
          currentPosition={this.state.currentPosition}
          stepCount={4}
          direction={'horizontal'}
          onPress={(position) => {this.onStepPress(position)}}
        />
      </View>
    );
  }
}
