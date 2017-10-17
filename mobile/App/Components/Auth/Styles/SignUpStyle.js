import { StyleSheet } from 'react-native'
import { Fonts, Metrics, Colors } from '../../../Themes'

export default StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginHorizontal: 20,
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center',
  },
  button: {
    height: 36,
    backgroundColor: '#475B64',
    borderColor: '#475B64',
    borderWidth: 1,
    borderRadius: 8,
    alignSelf: 'stretch',
    justifyContent: 'center',
  },
});
