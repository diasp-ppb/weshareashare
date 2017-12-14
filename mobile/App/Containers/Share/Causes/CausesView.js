import React, { Component } from 'react';
import I18n from '@i18n/i18n';
import PropTypes from 'prop-types';
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';
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
    let navigationParams = props.navigation.state.params;
    let index = navigationParams ? navigationParams.categoryIndex : 0;
    super(props);
    this.state = {
      index: index,
      routes: [
        { key: 'first', title: I18n.t('people') },
        { key: 'second', title: I18n.t('animals&environment') },
        { key: 'third', title: I18n.t('arts&culture')}
      ],
    }
  }

  _handleIndexChange = index => this.setState({ index });

  _renderFooter = props => <TabBar {...props} />;

  _renderScene = SceneMap({
    first: this.props.FirstRoute,
    second: this.props.SecondRoute,
    third: this.props.ThirdRoute,
  });

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
