import { StyleSheet } from 'react-native';
import { Metrics, Colors, Fonts } from '@theme/';

export default StyleSheet.create({
  threeButtons: {
    padding: Metrics.PADDING,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  circularBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    height: Metrics.DEVICE_WIDTH / 3.5,
    width: Metrics.DEVICE_WIDTH / 3.5,
    borderRadius: Metrics.DEVICE_WIDTH / 7,
    backgroundColor: Colors.stoikBlue,
    zIndex: 1,
  },
  btnText: {
    textAlign: 'center',
    color: 'white',
  },
});
