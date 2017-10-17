import React from 'react';
import styles from './Styles/StoikHeaderStyle';
import { Images } from '../../Themes';
import { View, Text, TouchableHighlight, Image } from 'react-native';

export const StoikHeader = () => {
  return (
    <View>
      <Text style={[styles.h1]}>
        Stoik PPR
      </Text>

      <Image
        source={Images.logo}
        style={styles.logo}
        resizeMode="contain"
      />
      <View style={styles.threeButtons}>
        <TouchableHighlight style={[styles.circularBtn, styles.sideBtn]}>
          <Text style={[styles.sideBtnText, styles.h5]}>Save</Text>
        </TouchableHighlight>

        <TouchableHighlight style={[styles.circularBtn, styles.centerBtn]}>
          <Text style={[styles.centerBtnText, styles.h5]}>Invest</Text>
        </TouchableHighlight>

        <TouchableHighlight style={[styles.circularBtn, styles.sideBtn]}>
          <Text style={[styles.sideBtnText, styles.h5]}>Share</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};
