import React, { Component } from 'react';
import { Provider } from 'react-redux';

import { StyleSheet, Text, View } from 'react-native';
import InvestorProfileQuiz  from './Containers/InvestorProfileQuiz';


export default class App extends Component {
  render() {
    return (
        <InvestorProfileQuiz />
    );
  }
}
