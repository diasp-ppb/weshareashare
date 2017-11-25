/**
 * Form Validation Message
 *
     <FormValidationMessage></FormValidationMessage>
 *
 */
import React, { Component, PropTypes } from 'react';
import { FormValidationMessage } from 'react-native-elements';

// Consts and Libs
import { Fonts } from '@theme/';

/* Component ==================================================================== */
class CustomFormValidationMessage extends Component {
  static propTypes = {
    containerStyle: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.shape({}),
    ]),
    labelStyle: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.shape({}),
    ]),
  }

  static defaultProps = {
    containerStyle: [],
    labelStyle: [],
  }

  inputProps = () => {
    // Defaults
    const props = {
      ...this.props,
      containerStyle: [],
      labelStyle: [{
        marginLeft: 0,
        marginRight: 0,
        fontFamily: Fonts.base.family,
      }],
    };

    if (this.props.containerStyle) {
      props.containerStyle.push(this.props.containerStyle);
    }

    if (this.props.labelStyle) {
      props.labelStyle.push(this.props.labelStyle);
    }

    return props;
  }

  render = () => <FormValidationMessage {...this.inputProps()} />
}

/* Export Component ==================================================================== */
export default CustomFormValidationMessage;
