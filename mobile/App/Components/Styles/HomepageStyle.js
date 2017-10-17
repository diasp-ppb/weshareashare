import { StyleSheet } from 'react-native';
import { Metrics, ApplicationStyles, Fonts, Colors } from '../../Themes';

export default StyleSheet.create({
  background: {
    backgroundColor: '#FFFFFF',
  },
  btnGroup: {
    paddingVertical: 12,
    marginVertical: 48,
    alignSelf: 'center',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  btn: {
    backgroundColor: Colors.background,
    borderRadius: 8,
  },
  btnText: {
    color: Colors.text,
    fontSize: Fonts.h5
  },
  backgroundImage: {
    flex: 1,
    width: null,
    height: null
  }
});
