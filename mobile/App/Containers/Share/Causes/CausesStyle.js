import { StyleSheet } from 'react-native';
import { Metrics, Colors, Fonts } from '@theme/';

export default StyleSheet.create({
  topBannerText: {
    marginVertical: Metrics.PADDING,
    color: '#26c6da',
    fontSize: 26,
    alignSelf: 'center',
  },
  radioButtonsGroup:{
    flex:1,
    paddingTop: 20,
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
