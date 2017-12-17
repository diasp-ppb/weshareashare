import React, { Component } from 'react';
import { ScrollView, TouchableOpacity } from 'react-native';
import I18n from '@i18n/i18n';
import { ApplicationStyles, Colors} from '@theme/';
import { Text, Card, Spacer } from '@ui/';
import AppStep from '@components/AppStep';
import BulletText from '@components/BulletText'

export default class StoikBenefits extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'A Poupança',
  });

  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView style={[ApplicationStyles.container]}>
        <Card>
          <Text h1 style={[ApplicationStyles.paddingBottom]}>Benefícios do PPR SGF Stoik Ações</Text>

          <BulletText text={I18n.t('benefitsSaving')}/>
          <BulletText text={I18n.t('benefitsWallet')}/>
          <BulletText text={I18n.t('benefitsStructure')}/>
          <BulletText text={I18n.t('benefitsCause')} bulletColor={Colors.stoikOrange}/>

          <Spacer size={25} />

          <TouchableOpacity style={ApplicationStyles.rightAligned} onPress={() => navigate('Investment')}>
            <Text p style={ApplicationStyles.nextLink}>
              { I18n.t('stoikShares') } >
            </Text>
          </TouchableOpacity>
        </Card>
        <AppStep index={0} {...this.props} />
      </ScrollView>
    );
  }
}
