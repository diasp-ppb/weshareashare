import React, { Component } from 'react';
import RadioButton from 'radio-button-react-native';
import PropTypes from 'prop-types';
import { View, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Button, Text } from 'native-base';
import styles from './CausesListStyle'
import I18n from '@i18n/i18n';
import { ApplicationStyles } from '@theme/'
import { Card, Spacer, Text as CustomText } from '@ui/';

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
    this.state = {
      value: 0
    }
  }
  
  onRequest = () => {
    const { navigate } = this.props.navigation;
    console.log(`chose ${this.causesAndDescriptions[this.state.value].cause}!`);
    navigate('OnboardingOverview');
  }
  
  handleOnPress = (value) => {
    this.setState({ value });
  }
  
  createCausesButtons = () => {
    const { navigate } = this.props.navigation;
    if (this.props.causes && this.props.causes.length > 0) {
      return this.props.causes.map((s, i) => {
        return (
          <View key={i} style={[ApplicationStyles.paddingBottom]}>
            {/*<RadioButton currentValue={this.state.value} value={i}*/}
            {/*onPress={this.handleOnPress}*/}
            {/*outerCircleColor="#feab2b" innerCircleColor="#feab2b">*/}
            
            <Text style={[ApplicationStyles.h1]}>{s.name}</Text>
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
                <Text style={[ApplicationStyles.link, {textAlign: 'right'}]} onPress={() => {navigate('Cause', {cause: s})}}>Mais sobre {s.name}</Text>
              </View>
            </View>
            {/*</RadioButton>*/}
          </View>
        );
      });
    }
    return [];
  }
  
  render () {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView style={ApplicationStyles.container}>
        <Card>
          {this.createCausesButtons()}
          
          <Spacer size={25}/>
          
          <TouchableOpacity style={[ApplicationStyles.rightAligned]} onPress={() => navigate('Invest')}>
            <CustomText p style={[ApplicationStyles.nextLink]}>
              { I18n.t('onboarding') } >
            </CustomText>
          </TouchableOpacity>
        </Card>
      </ScrollView>
    );
  }
}

export default CausesList;