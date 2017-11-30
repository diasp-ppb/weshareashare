import { StyleSheet } from 'react-native';
import { Metrics, Colors, Fonts } from '@theme/';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    maxHeight: Metrics.DEVICE_HEIGHT / 3,
  },
  h1: {
    fontFamily: Fonts.h1.family,
    fontSize: Fonts.h1.size * 1.5,
    lineHeight: Fonts.h1.lineHeight,
    color: Colors.text,
    fontWeight: '600',
    paddingVertical: Metrics.PADDING,
    margin: 0,
    marginBottom: 4,
    left: 0,
    right: 0,
    alignSelf: 'center',
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
  }
});
