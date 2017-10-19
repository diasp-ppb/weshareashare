import { StyleSheet } from 'react-native'
import { Fonts, Metrics, Colors } from '../../Themes/index'

export default StyleSheet.create({
  h1: {
    color: Colors.text,
    fontSize: 48,
    alignSelf: 'center',
    paddingVertical: Metrics.baseMargin,
  },
  logo: {
    alignSelf: 'center',
    padding: Metrics.baseMargin,
    width: Metrics.images.logo,
    height: Metrics.images.large,
  },
  threeButtons: {
    padding: Metrics.doubleSection,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  circularBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    height: Metrics.screenWidth / 4,
    width: Metrics.screenWidth / 4,
    borderRadius: Metrics.screenWidth / 8,
  },
  centerBtn: {
    backgroundColor: Colors.stoikGrey,
    zIndex: 1,
  },
  sideBtn: {
    backgroundColor: Colors.stoikOrange,
    zIndex: 2,
  },
  centerBtnText: {
    color: Colors.background,
  },
  sideBtnText: {
    color: Colors.stoikGrey,
  },
  h5: Fonts.style.h5,
});
