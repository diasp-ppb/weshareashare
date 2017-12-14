import { StyleSheet } from 'react-native';
import { Metrics, Colors, Fonts } from '@theme/';

export default StyleSheet.create({
  topBannerText: {
    marginVertical: Metrics.PADDING,
    color: '#26c6da',
    fontSize: 26,
    alignSelf: 'center',
  },
  causeNameText: {
    flex:1,
    paddingLeft: Metrics.smallMargin,
    fontSize: Metrics.FONT_SIZE_BIG,
  },
  logoAndDescription: {
    flexDirection: 'row',
    paddingTop: Metrics.paddingSml,
  },
  logoContainer: {
    flexDirection: 'row',
    flex: 1,
    paddingHorizontal: Metrics.smallMargin,
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    flexDirection: 'row',
    flex: 1,
    paddingHorizontal: Metrics.smallMargin,
    alignSelf: 'center',
  },
  description: {
    flex: 1,
    paddingRight: Metrics.smallMargin,
  },
  thisbtn: {
    backgroundColor:'white',
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
