import React, { Component } from 'react';
import { View, DatePickerIOS } from 'react-native';
import { Text } from 'native-base';

export default class DatePicker extends Component {
  constructor(props) {
    super(props);

    this.date = new Date('1980-01-01');
  }
  onDataChange(date) {
    this.setState((s, p) => this.date = date);
    this.props.update(date);
  }

  render() {
    return (
      <View>
        <Text> Data de Nascimento </Text>
        <DatePickerIOS
          date={this.date}
          onDateChange={(value) => this.onDataChange(value)}
          mode="date"
        />
      </View>
    );
  }
}
