import React, { Component } from 'react';
import PropTypes from 'prop-types';
import I18n from '@i18n/i18n';
import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

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
            <Text style={styles.controlText}>{ I18n.t('save') }</Text>
            <View style={styles.leftMark} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => navigate('Simulation')}>
            <Icon style={styles.icon} name="chart-line" size={35} color="#fff" />
            <Text style={styles.buttonText}>{ I18n.t('simulation') }</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => navigate('Benefits')}>
            <Icon style={styles.icon} name="chart-line" size={35} color="#fff" />
            <Text style={styles.buttonText}>{ I18n.t('benefits') }</Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity style={styles.header} onPress={() => navigate('Investment')}>
            <Text style={styles.controlText}>{ I18n.t('invest') }</Text>
            <View style={styles.leftMark} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => navigate('Wallet')}>
            <Icon style={styles.icon} name="home" size={35} color="#fff" />
            <Text style={styles.buttonText}>{ I18n.t('wallet') }</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => navigate('Performances')}>
            <Icon style={styles.icon} name="trending-up" size={35} color="#fff" />
            <Text style={styles.buttonText}>{ I18n.t('performances') }</Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity style={styles.header} onPress={() => navigate('Share')}>
            <Text style={styles.controlText}>{ I18n.t('share') }</Text>
            <View style={styles.leftMark} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => navigate('Causes', {categoryIndex: 0, informative: true})}>
            <Icon style={styles.icon} name="book-multiple" size={35} color="#fff" />
            <Text style={styles.buttonText}>{ I18n.t('causes') }</Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity style={styles.header} onPress={() => navigate('Invest')}>
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
          <TouchableOpacity style={styles.button} onPress={() => navigate('Causes', {categoryIndex: 0, informative: true})} >
            <Icon style={styles.icon} name="book-multiple" size={35} color="#fff" />
            <Text style={styles.buttonText}>{ I18n.t('chooseCause') }</Text>
          </TouchableOpacity>
        </View>


        <View>
          <View style={styles.header}>
            <Text style={styles.controlText}>{ I18n.t('more') }</Text>
            <View style={styles.leftMark} />
          </View>
          <TouchableOpacity style={styles.button} onPress={() => navigate('FAQ')}>
            <Icon style={styles.icon} name="help" size={35} color="#fff" />
            <Text style={styles.buttonText}>FAQ</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => navigate('RiskWarnings')}>
            <Icon style={styles.icon} name="email" size={35} color="#fff" />
            <Text style={styles.buttonText}>{ I18n.t('riskWarnings') }</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => navigate('ContactUs')}>
            <Icon style={styles.icon} name="email" size={35} color="#fff" />
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
