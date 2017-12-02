import { StyleSheet } from 'react-native';
import { Metrics, Colors, Fonts } from '../../Themes/index';

export default StyleSheet.create({
  topBannerText: {
    marginVertical: Metrics.PADDING,
    color: '#26c6da', //ele nao quer saber de Colors. ou de Fonts. por alguma razao
    fontSize: 26,
    alignSelf: 'center',
  },
  radioButtonsGroup:{
    flex:1,
    paddingTop: 20,
  //  paddingBottom: Metrics.smallMargin,
    paddingLeft: 20,
    paddingRight:  Metrics.smallMargin,
    height: Metrics.DEVICE_HEIGHT - 70, //70 = header height + paddingTop + real padding
  },
 radioButtons: {
    flex:1,
  },
  causeNameText: {
    flex:1,
    paddingLeft: Metrics.smallMargin,
    fontSize: Metrics.FONT_SIZE_BIG,
  },
  logoAndDescription: {
    flex: 1,
    flexDirection: 'row',
  },
  logo: {
    flexDirection: 'row',
    flex:1,
    paddingHorizontal: Metrics.smallMargin,
    alignItems: 'flex-start',
  },
  description: {
    flex:2,
    flexWrap: 'wrap',
    paddingRight: Metrics.smallMargin,
  },
  thisbtn: {
    backgroundColor:'white',
  }
});
