import React, { Component } from 'react';
import { ScrollView, Picker, View, TouchableOpacity } from 'react-native';
import I18n from '@i18n/i18n';
import { ApplicationStyles, Metrics, Colors } from '@theme/';
import { Card, Text, Spacer } from '@ui/';
import AppStep from '@components/AppStep';

export default class Simulation extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: I18n.t('simulation'),
  });
  
  constructor (props){
    super(props);
    this.state = {
      initialInvestment: this.props.initialInvestment[0].value,
      monthlyContribution: this.props.monthlyContribution[0].value,
      yearPeriod: this.props.yearPeriod[0].value,
      interestRate: this.props.interestRate[0].value,
      futureValue: 0
    }
  }
  
  componentDidMount () {
    this.calculateFutureValue();
  }
  
  addPickerItems = (items) => {
    return items.map((item, key) => {
      return (
        <Picker.Item key={key} label={item.label} value={item.value} />
      );
    });
  }
  
  convertToCurrency = () => {
    let amount = parseFloat(this.state.futureValue).toFixed(2);
    let splitAmount = amount.split(".")[0];
    let i = splitAmount.length-4;
    
    while(i>=0){
      splitAmount = splitAmount.slice(0,i+1) + "," + splitAmount.slice(i+1);
      i=i-3;
    }
    return "\u20AC" + splitAmount + "." + amount.split(".")[1];
  }
  
  calculateFutureValue = () => {
    let r = this.state.interestRate / 100;
    let n = this.state.yearPeriod;
    let nt = n * 12;
    let rn = r / parseFloat(12);
    let newValue = this.state.initialInvestment* Math.pow((1 + rn),nt) + this.state.monthlyContribution * ((Math.pow((1 + rn), nt) - 1) / rn);
    this.setState({futureValue: newValue});
  }
  
  render () {
    const inputHeight = Metrics.DEVICE_HEIGHT / 6;
    const pickerHeight = inputHeight/2;
    const { navigate } = this.props.navigation;
    return (
      <ScrollView style={ApplicationStyles.container}>
        <Card>
          <View style={[{alignItems: 'center', justifyContent: 'center', paddingVertical: 20}]}>
              <Text h2 style={[ApplicationStyles.textCenterAligned]}>
                Em {this.state.yearPeriod} anos terá <Text h2 style={{color: Colors.stoikBlue}}>{this.convertToCurrency()}</Text>
              </Text>
          </View>
          <View style={[{flexDirection: 'row'}]}>
            <View style={[{flex: 1, flexDirection: 'column', marginRight: 5}]}>
              <View style={[{alignItems: 'center', justifyContent: 'center', height: inputHeight}]}>
                <Text h3 style={[ApplicationStyles.textCenterAligned]}>
                  Se o seu investimento inicial for
                </Text>
              </View>
              <Picker itemStyle={{height: pickerHeight}}
                selectedValue={this.state.initialInvestment}
                onValueChange={(itemValue, itemIndex) => {
                  this.setState({initialInvestment: itemValue}, () => this.calculateFutureValue())}}>
                {this.addPickerItems(this.props.initialInvestment)}
              </Picker>
  
              <View style={[{alignItems: 'center', justifyContent: 'center', height: inputHeight}]}>
                <Text h3 style={[ApplicationStyles.textCenterAligned]}>
                 durante
                </Text>
              </View>
  
              <Picker  itemStyle={{height: pickerHeight}}
                selectedValue={this.state.yearPeriod}
                onValueChange={(itemValue, itemIndex) => {
                  this.setState({yearPeriod: itemValue}, () => this.calculateFutureValue())}}>
                {this.addPickerItems(this.props.yearPeriod)}
              </Picker>
            </View>
            <View style={[{flex: 1, flexDirection: 'column'}]}>
              <View style={[{alignItems: 'center', justifyContent: 'center', height: inputHeight}]}>
                <Text h3 style={[ApplicationStyles.textCenterAligned]}>
                  e todos os meses contribuir
                </Text>
              </View>
              <Picker  itemStyle={{height: pickerHeight}}
                selectedValue={this.state.monthlyContribution}
                onValueChange={(itemValue, itemIndex) => {
                  this.setState({monthlyContribution: itemValue}, () => this.calculateFutureValue())}}>
                {this.addPickerItems(this.props.monthlyContribution)}
              </Picker>
  
              <View style={[{alignItems: 'center', justifyContent: 'center', height: inputHeight}]}>
                <Text h3 style={[ApplicationStyles.textCenterAligned]}>
                  com uma taxa anual de juros de
                </Text>
              </View>
  
              <Picker  itemStyle={{height: pickerHeight}}
                selectedValue={this.state.interestRate}
                onValueChange={(itemValue, itemIndex) => {
                  this.setState({interestRate: itemValue}, () => this.calculateFutureValue())}}>
                {this.addPickerItems(this.props.interestRate)}
              </Picker>
            </View>
          </View>

          <TouchableOpacity style={[ApplicationStyles.rightAligned,{marginTop: inputHeight/3 }]} onPress={() => navigate('Benefits')}>
            <Text p style={ApplicationStyles.nextLink}>
              { I18n.t('benefits') } >
            </Text>
          </TouchableOpacity>
        </Card>
        <AppStep index={0} { ...this.props }/>
      </ScrollView>
    );
  }
};