import { StyleSheet } from 'react-native'
import { Metrics } from '../../Themes/index'

export default StyleSheet.create({
  btnGroup: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: Metrics.DEVICE_HEIGHT/2,
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
});
