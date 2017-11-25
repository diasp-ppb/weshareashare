import { StyleSheet } from 'react-native';
import { Metrics, Colors, Fonts } from '@theme/';

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.background,
    justifyContent: 'space-around',
  },
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    justifyContent: 'space-around',
    paddingHorizontal: Metrics.marginHorizontal * 3,
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  title: {
    alignSelf: 'center',
    color: Colors.text,
  },
  subTitle: {
    alignSelf: 'center',
    color: Colors.stoikOrange,
    marginVertical: 30,
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
  causesText: {
    color: Colors.stoikOrange,
    textAlign: 'center',
  },
  causesView: {
    backgroundColor: Colors.stoikGrey,
    width: 130,
    height: 130,
    borderRadius: 130/2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  h1: {
    fontSize: Metrics.FONT_SIZE_TITLE / 2.2,
    alignSelf: 'center',
    paddingVertical: Metrics.PADDING,
    justifyContent: 'center',
    textAlign: 'center',
    flexWrap: 'wrap',
  },
  h2: {
    fontSize: Metrics.FONT_SIZE_TITLE / 2.5,
    alignSelf: 'center',
    paddingVertical: Metrics.PADDING,
    backgroundColor: 'rgba(0,0,0,0)',
  },
});
