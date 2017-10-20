import { StyleSheet } from 'react-native';
import { Colors, Metrics, Fonts } from '../../Themes/index';



const SignInStyles = {
  formGroup: {
    flex: 1,
    alignSelf: 'center',
    width: 220,
    paddingVertical: 12,
    marginVertical: 10,
    justifyContent: 'center',
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
  button: {
    alignSelf: 'center',
    marginVertical: Metrics.smallMargin,
    paddingVertical: Metrics.smallMargin,
    backgroundColor: Colors.background,
    borderRadius: 8,
  },
  buttonText: {
    color: Colors.text,
    fontSize: Fonts.h5
  },
};

export default SignInStyles;

