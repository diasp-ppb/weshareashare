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
      sizeItem: 30,
    };
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={ApplicationStyles.mainContainer}>
        <View style={ApplicationStyles.stoikBenefitsContainer}>

          <View style={{marginVertical: 30}}>
            <Text h3 style={ApplicationStyles.subTitle}>Stoik PPR benefits</Text>
          </View>

          <View style={{flex: 1, justifyContent: 'space-around'}}>

            <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
              <View style={ApplicationStyles.benefitItem} />
              <Text style={ApplicationStyles.benefitTextItem}>Possibility of automatizing savings</Text>
            </View>

            <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
              <View style={ApplicationStyles.benefitItem} />
              <Text style={ApplicationStyles.benefitTextItem}>Diverse and global portfolio at a low cost</Text>
            </View>

            <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
              <View style={ApplicationStyles.benefitItem} />
              <Text style={ApplicationStyles.benefitTextItem}>Fiscal advantages</Text>
            </View>

            <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
              <View style={ApplicationStyles.benefitItem} />
              <Text style={ApplicationStyles.benefitTextItem}>Support a cause</Text>
            </View>
          </View>
  
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
