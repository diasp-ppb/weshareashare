/**
 * Text
 *
     <Text h1>Hello World</Text>
 *
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';

// Consts and Libs
import { ApplicationStyles } from '@theme/';

/* Component ==================================================================== */
class CustomText extends Component {
  static propTypes = {
    h1: PropTypes.bool,
    h2: PropTypes.bool,
    h3: PropTypes.bool,
    h4: PropTypes.bool,
    h5: PropTypes.bool,
    p: PropTypes.bool,
    onPress: PropTypes.func,
    style: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.shape({}),
    ]),
    children: PropTypes.node,
  }

  static defaultProps = {
    h1: false,
    h2: false,
    h3: false,
    h4: false,
    h5: false,
    p: false,
    onPress: null,
    style: null,
    children: null,
  }

  textProps = () => {
    // Defaults
    const props = {
      ...this.props,
      style: [ApplicationStyles.baseText],
    };

    if (this.props.p) props.style = [ApplicationStyles.p];
    if (this.props.h1) props.style = [ApplicationStyles.h1];
    if (this.props.h2) props.style = [ApplicationStyles.h2];
    if (this.props.h3) props.style = [ApplicationStyles.h3];
    if (this.props.h4) props.style = [ApplicationStyles.h4];
    if (this.props.h5) props.style = [ApplicationStyles.h5];
    if (this.props.onPress) props.style.push(ApplicationStyles.link);

    if (this.props.style) {
      props.style.push(this.props.style);
    }

    return props;
  }

  render = () => <Text {...this.textProps()}>{this.props.children}</Text>;
}

/* Export Component ==================================================================== */
export default CustomText;
