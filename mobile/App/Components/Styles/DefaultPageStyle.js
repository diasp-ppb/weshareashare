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
  topBanner: {
    position: 'absolute',
    top:  0,
    left: 0,
    right: 0,
    bottom: Metrics.DEVICE_HEIGHT/6.5 * 5.5, //tentar dimensions
    resizeMode: 'stretch',
    flex: 1,
    height: null,
    width: null,
  },
  topBannerText: {
    // flex:.2,
    // minHeight: 30,
    marginVertical: Metrics.PADDING,
    color: '#26c6da', //ele nao quer saber de Colors. ou de Fonts. por alguma razao
    fontSize: 26,
    alignSelf: 'center',
  },
  btn: {
    alignSelf: 'center',
    marginVertical: Metrics.smallMargin,
    paddingVertical: Metrics.smallMargin,
    backgroundColor: Colors.background,
    borderRadius: 8,
  },
  btnText: {
    color: Colors.text,
    fontSize: Fonts.h5,
  },
});
