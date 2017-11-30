import React, { Component } from 'react';
import RadioButton from 'radio-button-react-native';
import { View, Image, ScrollView } from 'react-native';
import { Button, Text } from 'native-base';
import { Images } from '@theme/';
import styles from './Styles/HomepageStyle.js';
import CauseStyles from './Styles/CausesFormStyle.js';

export default class weShareAShareForm extends Component {
  constructor(props) {
    super(props);
    this.causesAndDescriptions = [
      { image: Images.logoGrupoLobo, cause: 'Grupo Lobo', description: 'Etiam eget diam et elit gravida vestibulum. Cras interdum egestas lectus, nec commodo nisi tincidunt sit amet. Integer in orci viverra, pharetra nisl nec, condimentum justo. Fusce facilisis velit sed nulla dictum commodo. Fusce a sollicitudin dolor, id aliquam augue. Suspendisse potenti. Suspendisse nec urna vitae nulla efficitur bibendum id et lacus. Fusce quis nisl vitae lorem fringilla ornare. Quisque eu ex et mauris iaculis molestie nec et neque.' },
      { image: Images.logoWikipedia, cause: 'Wikipedia', description: 'Curabitur molestie felis id venenatis imperdiet.' },
      { image: Images.logoAmnistiaInternacional, cause: 'Amnistia Internacional', description: 'Vestibulum sagittis, est non luctus imperdiet, nibh mauris congue arcu, eget bibendum diam sem ac nisi. ' },
      { image: Images.logoWorldPressPhoto, cause: 'World Press Photo', description: 'Aenean rhoncus, nunc eget pulvinar dictum, libero arcu rhoncus ligula, a euismod nisl nisi gravida orci. Donec sed lacus placerat, elementum enim vel, rhoncus nisl.' },
    ];
    this.state = {
      value: 0,
    };
    this.createCauses = this.createCausesButtons.bind(this);
    this.onRequest = this.onRequest.bind(this);
  }

  onRequest = () => {
    const { navigate } = this.props.navigation;
    console.log(`chose ${this.causesAndDescriptions[this.state.value].cause}!`);
    navigate('InvestorProfileQuiz');
  }

  handleOnPress(value) {
    this.setState({ value });
  }

  createCausesButtons = (causes) => {
    if (causes && causes.length > 0) {
      const Items = causes.map((s, i) => {
        return (
          <View key={i}>
            <RadioButton currentValue={this.state.value} value={i} onPress={this.handleOnPress.bind(this)} outerCircleColor="#feab2b" innerCircleColor="#feab2b">
              <View style={CauseStyles.radioButtons} >
                <Text style={CauseStyles.causeNameText}>{s.cause}{'\n'}</Text>
                <View style={CauseStyles.logoAndDescription}>
                  <View style={CauseStyles.logo}>
                    <Image
                      style={CauseStyles.logo}
                      resizeMode="contain"
                      source={s.image}
                    />
                  </View>
                  <View style={CauseStyles.description}>
                    <Text>{s.description}</Text>
                    <Text style={{ textDecorationLine: 'underline' }}>{'\n'}Mais sobre {s.cause}</Text>
                  </View>
                </View>
              </View>
            </RadioButton>
          </View>
        );
      });
      return Items;
    }
    return [];
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View>
          <Text style={CauseStyles.topBannerText}>
                Choose a cause:
          </Text>
        </View>
        <View style={CauseStyles.radioButtonsGroup}>
          <ScrollView >
            {this.createCausesButtons(this.causesAndDescriptions)}
          </ScrollView>
        </View>
        <View>
          <Button style={styles.orangeNextBtn} onPress={() => { this.onRequest(); }}>
            <Text style={styles.btnText}>
                Next
            </Text>
          </Button>
        </View>
      </View>
    );
  }
}
