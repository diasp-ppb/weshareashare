import React, { Component } from 'react';
import PropTypes from 'prop-types';
import HTMLView from 'react-native-htmlview';
import { View, Image, ScrollView, WebView } from 'react-native';
import { Button, Text } from 'native-base';
import { ApplicationStyles, Metrics } from '@theme/'
import { Card, Spacer } from '@ui/';

class CausesList extends Component {
  static propTypes = {
    session: PropTypes.object,
    cause: PropTypes.object,
  }

  static defaultProps = {
    session: null,
    cause: {},
  }

  static navigationOptions = ({ navigation }) => ({
    title: typeof (navigation.state.params) === 'undefined' || typeof (navigation.state.params.title) === 'undefined' ? '' : navigation.state.params.title,
  });

  constructor(props) {
    super(props);
    this.state = {
      cause: props.navigation.state.params.cause,
    }
  }

  componentWillMount() {
    this.props.navigation.setParams({ title: this.state.cause.name });
  }

  render () {
    return (
      <View style={[ApplicationStyles.container]}>
        <ScrollView>
          <Card>
            <Image
              style={{
                height: Metrics.DEVICE_HEIGHT / 4,
                alignSelf: 'center',
                resizeMode: 'contain'}}
              source={this.state.cause.image}
            />

            <HTMLView
              value={this.state.cause.description}
            />

          </Card>
        </ScrollView>
      </View>
    );
  }
}

export default CausesList;
