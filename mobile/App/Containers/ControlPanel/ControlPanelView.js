import React, { Component } from 'react';
import PropTypes from 'prop-types';
import I18n from '@i18n/i18n';
import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Assets } from '@theme/';

import styles from './ControlPanelStyle';

class ControlPanel extends Component {
  static propTypes = {
    user: PropTypes.shape({
      email: PropTypes.string,
      firstName: PropTypes.string,
      lastName: PropTypes.string,
    }),
    onLogout: PropTypes.func,
  }

  constructor(props) {
    super(props);
  }

  logout = () => {
    if (this.props.onLogout) { this.props.onLogout(); }
    this.props.navigation.dispatch(this.props.resetAction);
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.company} onPress={() => navigate('Mainpage')}>WeShareAShare</Text>
        <View style={styles.profile}>
          <Icon name="account-circle" size={60} color="#fff" />
          <View>
            <Text style={[styles.buttonText, styles.profileInfo]}> { `${this.props.user.firstName} ${this.props.user.lastName}` } </Text>
            <Text style={[styles.buttonText, styles.profileInfo]}> { this.props.user.email } </Text>
          </View>
        </View>

        <View>
          <TouchableOpacity style={styles.header} onPress={() => navigate('Saving')} >
            <View style={styles.headerIconView}>
              <Image source={Assets.iconSavings} />
            </View>
            <Text style={styles.controlText}>{ I18n.t('save') }</Text>
            <View style={styles.leftMark} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => navigate('Simulation')}>
            <View style={{flexDirection: 'row',alignItems: 'center',}}>
              <Image source={Assets.iconSimulation} />
            </View>
            <Text style={styles.buttonText}>{ I18n.t('simulation') }</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => navigate('Benefits')}>
            <View style={{flexDirection: 'row',alignItems: 'center',}}>
              <Image source={Assets.iconBenefits} />
            </View>
            <Text style={styles.buttonText}>{ I18n.t('benefits') }</Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity style={styles.header} onPress={() => navigate('Investment')}>
            <Text style={styles.controlText}>{ I18n.t('invest') }</Text>
            <View style={styles.leftMark} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => navigate('Wallet')}>
            <View style={{flexDirection: 'row',alignItems: 'center',}}>
              <Image source={Assets.iconWallet} />
            </View>
            <Text style={styles.buttonText}>{ I18n.t('wallet') }</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => navigate('Performances')}>
            <View style={{flexDirection: 'row',alignItems: 'center',}}>
              <Image source={Assets.iconPerformances} />
            </View>
            <Text style={styles.buttonText}>{ I18n.t('performances') }</Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity style={styles.header} onPress={() => navigate('Share')}>
            <View style={styles.headerIconView}>
              <Image source={Assets.iconShare} />
            </View>
            <Text style={styles.controlText}>{ I18n.t('share') }</Text>
            <View style={styles.leftMark} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => navigate('Causes', {categoryIndex: 0, informative: true})}>
            <View style={{flexDirection: 'row',alignItems: 'center',}}>
              <Image source={Assets.iconCauses} />
            </View>
            <Text style={styles.buttonText}>{ I18n.t('causes') }</Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity style={styles.header} onPress={() => navigate('Invest')}>
            <View style={styles.headerIconView}>
              <Image source={Assets.iconOnboarding} />
            </View>
            <Text style={styles.controlText}>{ I18n.t('onboarding') }</Text>
            <View style={styles.leftMark} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => navigate('InvestorProfileQuiz', { formIndex: 1 } )} >
            <Icon style={styles.icon} name="book-multiple" size={35} color="#fff" />
            <Text style={styles.buttonText}>{ I18n.t('participant') }</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => navigate('InvestorProfileQuiz', { formIndex: 2 } )} >
            <Icon style={styles.icon} name="book-multiple" size={35} color="#fff" />
            <Text style={styles.buttonText}>{ I18n.t('riskProfile') }</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => navigate('Causes', {categoryIndex: 0, informative: false})} >
            <Icon style={styles.icon} name="book-multiple" size={35} color="#fff" />
            <Text style={styles.buttonText}>{ I18n.t('chooseCause') }</Text>
          </TouchableOpacity>
        </View>


        <View>
          <View style={[styles.header,{backgroundColor: '#596a71'}]}>
            <Icon style={styles.icon} name="help-circle" size={35} color="#fff" />
            <Text style={styles.controlText}>{ I18n.t('more') }</Text>
            <View style={styles.leftMark} />
          </View>
          <TouchableOpacity style={styles.button} onPress={() => navigate('FAQ')}>
            <Icon style={styles.icon} name="email" size={35} color="#fff" />
            <Text style={styles.buttonText}>FAQ</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => navigate('RiskWarnings')}>
            <Icon style={styles.icon} name="email" size={35} color="#fff" />
            <Text style={styles.buttonText}>{ I18n.t('riskWarnings') }</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => navigate('ContactUs')}>
            <Icon style={styles.icon} name="information-variant" size={35} color="#fff" />
            <Text style={styles.buttonText}>{ I18n.t('contactUs') }</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => navigate('AboutUs')}>
            <Icon style={styles.icon} name="information-variant" size={35} color="#fff" />
            <Text style={styles.buttonText}>{ I18n.t('aboutUs') }</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.lastInMenu]} onPress={this.logout}>
            <Icon style={styles.icon} name="power" size={35} color="#fff" />
            <Text style={styles.buttonText}>{ I18n.t('signOut') }</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

/* Export Component ==================================================================== */
export default ControlPanel;
