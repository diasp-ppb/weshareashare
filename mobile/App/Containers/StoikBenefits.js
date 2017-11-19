import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { Button, Text, Divider } from 'react-native-elements';
import { connect } from 'react-redux';
import Toast from 'react-native-root-toast';
import { ApplicationStyles, Images } from '../Themes/index';

export default class StoikBenefits extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={ApplicationStyles.mainContainer}>
        <View style={ApplicationStyles.form}>
          <Text h3 style={ApplicationStyles.subTitle}>Stoik PPR benefits</Text>

          <Text style={ApplicationStyles.subSubTitle}>Hello! Send us a message and we'll get back to you via email as soon as possible.
          Your feedback is extremely important to us.</Text>

          <View>
          <Divider style={ApplicationStyles.divider} />
          <Text style={ApplicationStyles.subSubTitle}>By joining We Share a Share, 
          you can make a profit and make an impact in the same journey.</Text>
          </View>
        </View>
      </View>
    );
  }
}
