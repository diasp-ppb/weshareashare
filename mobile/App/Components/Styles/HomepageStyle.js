import { StyleSheet } from 'react-native';
import { Metrics, Colors, Fonts } from '../../Themes/index';

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.background,
    justifyContent: 'space-between',
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  container: {
    flex: 1,
    backgroundColor: Colors.background,
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
    resizeMode: 'stretch',
    flex: 1,
    height: null,
    width: null,
  },
  btn: {
    alignSelf: 'center',
    marginVertical: Metrics.smallMargin,
    paddingVertical: Metrics.smallMargin,
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
    color: Colors.text,
    fontSize: Fonts.h5,
  },
});
