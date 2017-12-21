import React, { Component } from 'react';
import { ScrollView, TouchableOpacity } from 'react-native';
import { VictoryChart, VictoryTheme, VictoryLine } from 'victory-native';
import { ApplicationStyles, Colors } from '@theme/';
import { Card, Text as CustomText, Spacer } from '@ui/';
import AppStep from '@components/AppStep';
import BulletText from '@components/BulletText'

export default class Performances extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'O Investimento',
  });

  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView style={ApplicationStyles.container}>
        <CustomText h1 style={[ApplicationStyles.padding, { paddingBottom: 0}]}>Evolução do Valor da Up</CustomText>
        <VictoryChart
          theme={VictoryTheme.material}
        >
          <VictoryLine
            name="PPR SGF Stoik Ações"
            domain={{ y: [5, 5.6] }}
            style={{
              tickLabels: { angle: 45 },
              data: { stroke: Colors.stoikBlue },
              parent: { border: '1px solid #ccc' },
            }}
            data={this.props.data}
          />
        </VictoryChart>
        <Card>

          <BulletText text={'O gráfico mostra a evolução da unidade de participação do PPR SGF Stoik Ações desde o início, em 15.02.2016. Lembre-se que a performance passada não é uma garantia da performance futura.'}/>

          <TouchableOpacity style={[ApplicationStyles.rightAligned]} onPress={() => navigate('Share')}>
            <CustomText p style={[ApplicationStyles.nextLink]}>
              We Share A Share >
            </CustomText>
          </TouchableOpacity>
        </Card>
        <AppStep index={1} {...this.props} />
      </ScrollView>
    );
  }
}
