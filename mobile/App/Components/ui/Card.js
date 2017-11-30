/**
 * Cards
 *
     <Card></Card>
 *
 */
import React, { Component } from 'react';
import { Platform } from 'react-native';
import PropTypes from 'prop-types';
import { Card } from 'react-native-elements';

// Consts and Libs
import { Metrics, Colors, ApplicationStyles } from '@theme/';

/* Component ==================================================================== */
class CustomCard extends Component {
  static propTypes = {
    containerStyle: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.shape({}),
    ]),
    titleStyle: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.shape({}),
    ]),
  }

  static defaultProps = {
    containerStyle: [],
    titleStyle: [],
  }

  cardProps = () => {
    // Defaults
    const props = {
      dividerStyle: [{
        backgroundColor: Colors.border,
      }],
      ...this.props,
      containerStyle: [{
        backgroundColor: Colors.cardBackground,
        borderWidth: 0,
        borderColor: Colors.cardBackground,
        ...Platform.select({
          ios: {
            shadowColor: 'rgba(0,0,0, .2)',
            shadowOffset: { height: 0, width: 0 },
            shadowOpacity: 0,
            shadowRadius: 0,
          },
          android: {
            elevation: 0,
          },
        }),
      }],
      titleStyle: [
        ApplicationStyles.h2,
        { marginBottom: 15 },
      ],
    };

    if (this.props.containerStyle) {
      props.containerStyle.push(this.props.containerStyle);
    }

    if (this.props.titleStyle) {
      props.titleStyle.push(this.props.titleStyle);
    }

    return props;
  }

  render = () => <Card {...this.cardProps()} />
}

/* Export Component ==================================================================== */
export default CustomCard;
