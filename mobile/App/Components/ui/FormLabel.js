/**
 * Text Input
 *
     <FormLabel></FormLabel>
 *
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormLabel } from 'react-native-elements';

// Consts and Libs
import { Colors, Fonts } from '@theme/';

/* Component ==================================================================== */
class CustomFormLabel extends Component {
  static propTypes = {
    labelStyle: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.shape({}),
    ]),
    children: PropTypes.node,
  }

  static defaultProps = {
    containerStyle: [],
    labelStyle: [],
    children: null,
  }

  labelProps = () => {
    // Defaults
    const props = {
      ...this.props,
      labelStyle: [{
        color: Colors.lightGrey,
        fontFamily: Fonts.base.family,
        fontSize: Fonts.base.size * 1.25,
        fontWeight: '300',
        marginLeft: 0,
        marginRight: 0,
      }],
    };

    if (this.props.labelStyle) {
      props.labelStyle.push(this.props.labelStyle);
    }

    return props;
  }

  render = () => <FormLabel {...this.labelProps()}>{this.props.children}</FormLabel>;
}

/* Export Component ==================================================================== */
export default CustomFormLabel;
