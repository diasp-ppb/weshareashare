import React, { Component, View } from 'react';
import { Header, FormLabel, FormInput } from 'react-native-elements';

export default class ResetPassword extends Component {
  render() {
    return (
      <View>
        <Header
          leftComponent={{ icon: 'arrow-back', color: '#fff' }}
          centerComponent={{ text: 'We Share a Share', style: { color: '#fff' } }}
          rightComponent={{ icon: 'home', color: '#fff' }}
        />
      </View>
    );
  }
}
