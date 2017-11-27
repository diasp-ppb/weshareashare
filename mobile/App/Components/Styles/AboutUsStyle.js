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
    minHeight: Metrics.DEVICE_HEIGHT / 1.5,
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
    width: Metrics.DEVICE_WIDTH / 2.7,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    color: Colors.text,
    fontSize: Fonts.h5,
  },
  logo: {
    alignSelf: 'center',
    padding: Metrics.MARGIN,
    width: Metrics.DEVICE_WIDTH / 1.2,
    height: Metrics.DEVICE_HEIGHT / 7,
  },
  h1: {
    fontSize: Metrics.FONT_SIZE_TITLE / 2.5,
    alignSelf: 'center',
    paddingVertical: Metrics.PADDING,
    justifyContent: 'center',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  h2: {
    fontSize: Metrics.FONT_SIZE_TITLE / 2.5,
    alignSelf: 'center',
    paddingVertical: Metrics.PADDING,
    backgroundColor: 'rgba(0,0,0,0)',
    color: '#FFF',
  },
  circle: {
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    backgroundColor: 'darkorange',
    margin: 20,
  },
  circleBot: {
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    backgroundColor: 'darkorange',
    bottom: 20,
  },
});
