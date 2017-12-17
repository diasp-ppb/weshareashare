import React, { Component } from 'react';
import {
  View,
} from 'react-native';
import { ApplicationStyles, Colors } from '@theme/';
import { Text } from '@ui/'
import PropTypes from 'prop-types'

export default class BulletText extends Component {
  static propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
  }
  static defaultProps = {
    text: '',
    textColor: Colors.textSecondary,
    bulletColor: Colors.stoikBlue,
  }
  render() {
    return (
      <View style={[ApplicationStyles.row, ApplicationStyles.paddingVertical]}>
        <View style={[ApplicationStyles.benefitItem, {backgroundColor: this.props.bulletColor}]} />
        <Text h3 style={[ApplicationStyles.benefitTest, {color: this.props.textColor}]}>{this.props.text}</Text>
      </View>
    );
  }
}
