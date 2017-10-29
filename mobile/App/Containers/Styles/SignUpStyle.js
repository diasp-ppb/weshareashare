import { StyleSheet } from 'react-native'
import { Colors, Metrics, Fonts } from '../../Themes/index';

const SignUpStyles = {
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.background,
    justifyContent: 'space-between',
  },
  container: {
    justifyContent: 'center',
    padding: Metrics.PADDING,
    backgroundColor: '#ffffff',
  },
  logo: {
    alignSelf: 'center',
    padding: Metrics.PADDING*1.2,
    width: Metrics.DEVICE_WIDTH / 1.5,
    height: Metrics.DEVICE_HEIGHT / 7.5,
  },
  title: {
    alignSelf: 'center',
    color: Colors.text,
    fontFamily: Fonts.type.OpenSans,
  },
  button: {
    backgroundColor: Colors.stoikGrey,
    borderRadius: 8,
  },
  divider: {
    backgroundColor: Colors.charcoal,
    margin: Metrics.MARGIN,
  },
  link: {
    fontWeight: 'bold',
  },
};

export default SignUpStyles;
