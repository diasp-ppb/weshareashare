import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { Button, Divider } from 'react-native-elements';
import { connect } from 'react-redux';
import { ApplicationStyles, Assets, Metrics } from '@theme/';
import { Text } from '@ui/';

export default class StoikBenefits extends Component {

  constructor(props) {
    super(props);
    this.state = {
      sizeItem: 30,
    };
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={[ApplicationStyles.container, ApplicationStyles.containerCentered]}>

        <View style={{paddingVertical: Metrics.PADDING}}>
          <Text h1>Stoik PPR benefits</Text>
        </View>

        <View style={[ApplicationStyles.row, ApplicationStyles.padding]}>
          <View style={ApplicationStyles.benefitItem} />
          <Text h3>Possibility of automatizing savings</Text>
        </View>

        <View style={[ApplicationStyles.row, ApplicationStyles.padding]}>
          <View style={ApplicationStyles.benefitItem} />
          <Text h3>Diverse and global portfolio at a low cost</Text>
        </View>

        <View style={[ApplicationStyles.row, ApplicationStyles.padding]}>
          <View style={ApplicationStyles.benefitItem} />
          <Text h3>Fiscal advantages</Text>
        </View>

        <View style={[ApplicationStyles.row, ApplicationStyles.padding]}>
          <View style={ApplicationStyles.benefitItem} />
          <Text h3>Support a cause</Text>
        </View>


        <View>
          <Divider style={ApplicationStyles.divider} />
          <Text h3 style={[ApplicationStyles.subtext, ApplicationStyles.textCenterAligned]}>By joining We Share a Share,
            you can make a profit and make an impact in the same journey.</Text>
        </View>

      </View>
    );
  }
}
