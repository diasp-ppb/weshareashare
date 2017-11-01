import { StyleSheet } from 'react-native';
import { Metrics, ApplicationStyles } from '../../Themes/';

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    paddingBottom: Metrics.baseMargin,
  },
  logo: {
    marginTop: Metrics.doubleSection,
    height: Metrics.images.logo,
    width: Metrics.images.logo,
    resizeMode: 'contain',
  },
  centered: {
    alignItems: 'center',
  },
  footerContainer: {
    marginTop: 5,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
  },
  footerText: {
    fontSize: 14,
    color: '#aaa',
  },
  backgroundChat: {
      backgroundColor : "#6f946c",
      flex: 1
  },
  progressBar: {
      alignItems: "center",
      flex: 1,
      marginBottom: 5,
      marginTop: 10
  },
  button: {
      marginBottom: 10,
      alignItems: "center",
  },
  options: {
      backgroundColor: "#e6e6fa",
      minWidth: 20,
      alignSelf: "stretch",
      alignItems: "center",
      borderRadius: 30,
      marginHorizontal: 20,
      marginBottom: 10,
  }
});
