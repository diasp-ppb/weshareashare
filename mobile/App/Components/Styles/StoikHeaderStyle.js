import { StyleSheet } from 'react-native'
import { Fonts, Metrics, Colors, ApplicationStyles } from '../../Themes/index'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    maxHeight: Metrics.DEVICE_HEIGHT/2,
  },
  h1: {
    color: Colors.text,
    fontSize: Metrics.FONT_SIZE_TITLE,
    alignSelf: 'center',
    paddingVertical: Metrics.PADDING,
  },
  logo: {
    alignSelf: 'center',
    padding: Metrics.MARGIN,
    width: Metrics.DEVICE_WIDTH / 1.5,
    height: Metrics.DEVICE_HEIGHT / 7.5,
  },
  threeButtons: {
    padding: Metrics.PADDING,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  circularBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    height: Metrics.DEVICE_WIDTH / 4,
    width: Metrics.DEVICE_WIDTH / 4,
    borderRadius: Metrics.DEVICE_WIDTH / 8,
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
