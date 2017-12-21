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
        <View style={styles.bar}></View>
        <View>
          <TouchableOpacity style={styles.button} onPress={() => navigate('Saving')} >
            <Icon style={styles.icon} name="clock" size={35} color="#fff" />
            <Text style={styles.buttonText}>{ I18n.t('save') }</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => navigate('Simulation')}>
            <Icon style={styles.icon} name="chart-bubble" size={35} color="#fff" />
            <Text style={styles.buttonText}>{ I18n.t('simulation') }</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => navigate('Benefits')}>
            <Icon style={styles.icon} name="checkbox-marked-circle-outline" size={35} color="#fff" />
            <Text style={styles.buttonText}>{ I18n.t('benefits') }</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => navigate('Investment')}>
            <Icon style={styles.icon} name="clipboard-text" size={35} color="#fff" />
            <Text style={styles.buttonText}>{ I18n.t('invest') }</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => navigate('Performances')}>
            <Icon style={styles.icon} name="chart-line" size={35} color="#fff" />
            <Text style={styles.buttonText}>{ I18n.t('performances') }</Text>
          </TouchableOpacity>

          <View style={styles.bar}></View>

          <TouchableOpacity style={styles.button} onPress={() => navigate('Share')}>
            <Icon style={styles.icon} name="heart-half-full" size={35} color="#fff" />
            <Text style={styles.buttonText}>{ I18n.t('projectWeShareAShare') }</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => navigate('Causes', { categoryIndex: 0, informative: true })}>
            <Icon style={styles.icon} name="heart-outline" size={35} color="#fff" />
            <Text style={styles.buttonText}>{ I18n.t('causes') }</Text>
          </TouchableOpacity>

          <View style={styles.bar}></View>

          <TouchableOpacity style={styles.button} onPress={() => navigate('Invest')}>
            <Icon style={styles.icon} name="currency-eur" size={35} color="#fff" />
            <Text style={styles.buttonText}>{ I18n.t('onboarding') }</Text>
          </TouchableOpacity>

          <View style={styles.bar}></View>

          <TouchableOpacity style={styles.button} onPress={() => navigate('RiskWarnings')}>
            <Icon style={styles.icon} name="umbrella-outline" size={35} color="#fff" />
            <Text style={styles.buttonText}>{ I18n.t('riskWarnings') }</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => navigate('AboutUs')}>
            <Icon style={styles.icon} name="information-outline" size={35} color="#fff" />
            <Text style={styles.buttonText}>{ I18n.t('aboutUs') }</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => navigate('ContactUs')}>
            <Icon style={styles.icon} name="email" size={35} color="#fff" />
            <Text style={styles.buttonText}>{ I18n.t('contactUs') }</Text>
          </TouchableOpacity>

          <View style={styles.bar}></View>

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
