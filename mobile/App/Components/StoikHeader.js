import React from 'react';
import { View, Text, TouchableHighlight, Image } from 'react-native';
import styles from './Styles/StoikHeaderStyle';
import { Assets } from '@theme/';

export const StoikHeader = () => {
  return (
    <View style={styles.container}>
      <Image
        source={Assets.logo}
        style={styles.logo}
        resizeMode="contain"
      />
      <View style={styles.threeButtons}>
        <TouchableHighlight style={[styles.circularBtn, styles.sideBtn]}>
          <Text style={[styles.sideBtnText]}>Save</Text>
        </TouchableHighlight>

        <TouchableHighlight style={[styles.circularBtn, styles.centerBtn]}>
          <Text style={[styles.centerBtnText]}>Invest</Text>
        </TouchableHighlight>

        <TouchableHighlight style={[styles.circularBtn, styles.sideBtn]}>
          <Text style={[styles.sideBtnText]}>Share</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};
