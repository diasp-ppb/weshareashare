import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  formGroup: {
    flex: 1,
    alignSelf: 'center',
    paddingVertical: 12,
    marginVertical: 48,
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
  }
});
