import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { Images } from '../Themes';
import { Container, Content, Button, Text } from 'native-base';
import styles from './Styles/HomepageStyle';
import { StoikHeader } from './general/StoikHeader'

export default class Homepage extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Container style={styles.background}>
        <Content>
          <StoikHeader />
          <View style={styles.container}>
            <Image resizeMode='contain' source={Images.background} style={styles.canvas}>
              <View style={styles.btnGroup}>
                <Button style={styles.btn}>
                  <Text style={styles.btnText}>
                    Sign In
                  </Text>
                </Button>
                <Button style={styles.btn}>
                  <Text style={styles.btnText}>
                    Sign Up
                  </Text>
                </Button>
                <Button style={styles.btn}>
                  <Text style={styles.btnText}>
                    Mock up account
                  </Text>
                </Button>
              </View>
            </Image>
          </View>
        </Content>
      </Container>
    );
  }
}
