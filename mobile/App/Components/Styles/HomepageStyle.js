import { StyleSheet } from 'react-native';
import { Metrics, Colors } from '@theme/';

export default StyleSheet.create({
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  btnGroup: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: Metrics.DEVICE_HEIGHT / 2,
  },
  canvas: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    flex: 1,
    height: null,
    width: null,
  },
  btn: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: Metrics.smallMargin,
    paddingVertical: Metrics.smallMargin,
    width: Metrics.DEVICE_WIDTH / 3,
    backgroundColor: Colors.background,
    borderRadius: 8,
  },
  orangeNextBtn: {
    alignSelf: 'flex-end',
    margin: Metrics.baseMargin,
    padding: Metrics.baseMargin,
    backgroundColor: Colors.stoikOrange,
    borderRadius: 8,
  },
  btnText: {
    textAlign: 'center',
    color: Colors.text,
  },
});
