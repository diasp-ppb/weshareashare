import React, { Component } from 'react';
import I18n from '@i18n/i18n';
import PropTypes from 'prop-types';
import { TabViewAnimated, TabBar } from 'react-native-tab-view';
import { ApplicationStyles, Metrics, Assets } from '@theme/';
import { Users } from '@services/API';

const _ = require('lodash');

import CausesList from './CausesList/CausesListContainer';

const initialLayout = {
  height: 0,
  width: Metrics.DEVICE_WIDTH,
};

export default class CausesView extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'A Partilha',
  });

  static propTypes = {
    submit: PropTypes.func,
    session: PropTypes.object,
    informative: PropTypes.bool,
  }

  static defaultProps = {
    submit: null,
    session: null,
    informative: true,
  }

  constructor(props) {
    const navigationParams = props.navigation.state.params;
    const index = navigationParams ? navigationParams.categoryIndex : 0;
    super(props);
    this.state = {
      causes: [],
      _renderScene: null,
      requestDone: false,
      index,
      routes: [
        { key: 'first', title: I18n.t('people') },
        { key: 'second', title: I18n.t('animals&environment') },
        { key: 'third', title: I18n.t('arts&culture') },
      ],
    };
  }

  componentWillMount() {
    Users.getCauses(this.props.session).then((res) => {
      _.forEach(res, (value) => {
        const image = value.image;
        value.image = Assets[image];
      });
      this.setState({ causes: res });
    }).catch(() => {});
  }

  _handleIndexChange = (index) => this.setState({ index });

  _renderScene = ({ route }) => {
    switch (route.key) {
      case 'first':
        return (
          <CausesList navigation={this.props.navigation} causes={this.state.causes} category={'Social'} informative={this.props.informative} />
        );
      case 'second':
        return (
          <CausesList navigation={this.props.navigation} causes={this.state.causes} category={'Ambient'} informative={this.props.informative} />
        );
      case 'third':
        return (
          <CausesList navigation={this.props.navigation} causes={this.state.causes} category={'Cultural'} informative={this.props.informative} />
        );
      default:
        return null;
    }
  };

  _renderFooter = (props) => <TabBar {...props} />;

  render() {
    return (
      <TabViewAnimated
        style={ApplicationStyles.container}
        navigationState={this.state}
        renderScene={this._renderScene}
        renderFooter={this._renderFooter}
        onIndexChange={this._handleIndexChange}
        initialLayout={initialLayout}
      />
    );
  }
}
