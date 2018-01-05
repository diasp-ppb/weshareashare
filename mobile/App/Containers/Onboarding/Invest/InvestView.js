import React, { Component } from 'react';
import { View, ScrollView, Image, TouchableOpacity } from 'react-native';
import { ApplicationStyles, Colors, Fonts, Assets } from '@theme/';
import { Card, Text as CustomText, Spacer } from '@ui/';
import { Users } from '@services/API';
import AppStep from '@components/AppStep';
import BulletText from '@components/BulletText'

export default class Saving extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Comece a Investir',
  });

  constructor(props) {
    super(props);
    this.state = {
      cause: null,
    };
  }

  componentWillMount() {
    Users.getUserCause(this.props.session).then((res) => {
      if (res.message !== null) {
        const cause = res;
        cause.image = Assets[res.image];
        this.setState({ cause });
      }
    }).catch((err) => {
      console.log(err);
    });
  }

  onStepPress = (position) => {
    const { navigate } = this.props.navigation;
    switch (position) {
      case 0:
        navigate('Participant', { formIndex: 2 });
        break;
      case 1:
        navigate('Investor', { index: 0 });
        break;
      case 2:
        navigate('Causes', { categoryIndex: 0, informative: false });
        break;
    }
  }

  currentCause = () => {
    return (
      <View>
        <CustomText h3 style={[ApplicationStyles.paddingTop, { color: Colors.textSecondary }]}>
          Está a suportar a seguinte causa:
        </CustomText>
        <Spacer size={10} />
        <CustomText h2 style={[ApplicationStyles.textCenterAligned]}>{this.state.cause.name}</CustomText>
        <Spacer size={10} />
        <Image
          style={ApplicationStyles.logo}
          resizeMode="contain"
          source={this.state.cause.image}
        />
        <Spacer size={10} />
        <CustomText h3>{this.state.cause.shortDescription}</CustomText>
      </View>
    );
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView style={ApplicationStyles.container}>
        <Card>
          <CustomText h3 style={[ApplicationStyles.paddingTop, { color: Colors.textSecondary }]}>
            Bem-vindo(a)!
          </CustomText>
          <Spacer size={10} />
          <CustomText h3 style={{ color: Colors.textSecondary, fontWeight: '500' }}>
            Passos para começar a investir:
          </CustomText>

          <TouchableOpacity onPress={() => navigate('Participant', { formIndex: 2 })}>
            <BulletText text={'1. Indique os seus Dados Pessoais'}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigate('Investor', { index: 0 })}>
            <BulletText text={'2. Defina o seu Perfil de Risco'}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigate('Causes', { categoryIndex: 0, informative: false })}>
            <BulletText bulletColor={Colors.stoikOrange} text={'3. Escolha a Causa a Apoiar'}/>
          </TouchableOpacity>
          { (this.state.cause !== null) ?
            this.currentCause() : console.log('hello')
          }
        </Card>
        <AppStep index={3} {...this.props} />
      </ScrollView>
    );
  }
}
