import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import I18n from '@i18n/i18n';
import PropTypes from 'prop-types';
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';
import CausesList from './CausesList';
import { ApplicationStyles, Metrics } from '@theme/'

const initialLayout = {
  height: 0,
  width: Metrics.DEVICE_WIDTH
};

export default class CausesView extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: I18n.t('causes'),
  });

  static propTypes = {
    submit: PropTypes.func,
    session: PropTypes.object,
    causes: PropTypes.array,
    informative: PropTypes.bool,
  }

  static defaultProps = {
    submit: null,
    session: null,
    causes: [],
    informative: true,
  }

  constructor(props) {
    super(props);
    this.FirstRoute = () => <CausesList causes={this.props.causes} category={'People'} informative={true}/>;
    this.SecondRoute = () => <CausesList causes={this.props.causes} category={'People'} informative={true}/>;
    this.ThirdRoute = () => <CausesList causes={this.props.causes} category={'People'} informative={true}/>;
  }

  state = {
    index: 0,
    routes: [
      { key: 'first', title: 'People' },
      { key: 'second', title: 'Animals & Environment' },
      { key: 'third', title: 'Arts & Culture'}
    ],
  };

  _handleIndexChange = index => this.setState({ index });

  _renderHeader = props => <TabBar {...props} />;

  _renderScene = SceneMap({
    first: this.FirstRoute,
    second: this.SecondRoute,
    third: this.ThirdRoute,
  });

  render() {
    return (
      <TabViewAnimated
        style={ApplicationStyles.container}
        navigationState={this.state}
        renderScene={this._renderScene}
        renderHeader={this._renderHeader}
        onIndexChange={this._handleIndexChange}
        initialLayout={initialLayout}
      />
    );
  }
}
