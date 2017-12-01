import React, { Component } from 'react';
import RadioButton from 'radio-button-react-native';
import { View, Image, ScrollView } from 'react-native';
import { Button, Text } from 'native-base';
import styles from './CausesStyle'
import { ApplicationStyles } from '@theme/'

class CausesList extends Component {
  onRequest = () => {
    const { navigate } = this.props.navigation;
    console.log(`chose ${this.causesAndDescriptions[this.state.value].cause}!`);
    navigate('OnboardingOverview');
  }

  handleOnPress = (value) => {
    this.setState({ value });
  }

  createCausesButtons = () => {
    if (this.props.causes && this.props.causes.length > 0) {
      return this.props.causes.map((s, i) => {
        return (
          <View key={i}>
            <RadioButton currentValue={this.state.value} value={i}
                         onPress={this.handleOnPress}
                         outerCircleColor="#feab2b" innerCircleColor="#feab2b">
              <View style={styles.radioButtons}>
                <Text style={styles.causeNameText}>{s.cause}{'\n'}</Text>
                <View style={styles.logoAndDescription}>
                  <View style={styles.logo}>
                    <Image
                      style={styles.logo}
                      resizeMode="contain"
                      source={s.image}
                    />
                  </View>
                  <View style={styles.description}>
                    <Text>{s.description}</Text>
                    <Text style={{textDecorationLine: 'underline'}}>{'\n'}Mais
                      sobre {s.cause}</Text>
                  </View>
                </View>
              </View>
            </RadioButton>
          </View>
        );
      });
    }
    return [];
  }

  render () {
    return (
      <View style={styles.radioButtonsGroup}>
        <ScrollView>
          {this.createCausesButtons()}
        </ScrollView>
      </View>
    );
  }
}

export default CausesList;
