import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { Divider } from 'react-native-elements';
import { ApplicationStyles, Metrics, Assets } from '@theme/';
import { Text } from '@ui/';
import styles from './Styles/StoikHeaderStyle'

export default class StoikBenefits extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Stoik Benefits',
  });

  constructor(props) {
    super(props);
    this.state = {
      sizeItem: 30,
    };
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={[ApplicationStyles.container]}>

        <Image
          source={Assets.logo}
          style={styles.logo}
          resizeMode="contain"
        />

        <View style={[ApplicationStyles.row, ApplicationStyles.padding, ApplicationStyles.rightAligned]}>
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
          <Text h3>Support a social, environment or cultural cause</Text>
        </View>

        <View style={[ApplicationStyles.row, ApplicationStyles.padding]}>
          <View style={ApplicationStyles.benefitItem} />
          <Text h3>Contribute to society and have a positive impact in the world</Text>
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
