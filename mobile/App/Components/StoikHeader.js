import React from 'react';
import { View, Text, TouchableHighlight, Image } from 'react-native';
import I18n from '@i18n/i18n';
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
          <Text style={[styles.sideBtnText]}>{ I18n.t('save') }</Text>
        </TouchableHighlight>

        <TouchableHighlight style={[styles.circularBtn, styles.centerBtn]}>
          <Text style={[styles.centerBtnText]}>{ I18n.t('invest') }</Text>
        </TouchableHighlight>

        <TouchableHighlight style={[styles.circularBtn, styles.sideBtn]}>
          <Text style={[styles.sideBtnText]}>{ I18n.t('share') }</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};
