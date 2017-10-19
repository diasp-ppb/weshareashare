import Fonts from './Fonts';
import Metrics from './Metrics';
import Colors from './Colors';

const ApplicationStyles = {
  screen: {
    mainContainer: {
      flex: 1,
      backgroundColor: Colors.background,
      justifyContent: 'space-between',
    },
    backgroundImage: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
    },
    container: {
      flex: 1,
      backgroundColor: Colors.background,
    },
    btn: {
      alignSelf: 'center',
      marginVertical: Metrics.smallMargin,
      paddingVertical: Metrics.smallMargin,
      backgroundColor: Colors.background,
      borderRadius: 8,
    },
    btnText: {
      color: Colors.text,
      fontSize: Fonts.h5
    },
    section: {
      margin: Metrics.section,
      padding: Metrics.baseMargin,
    },
    sectionText: {
      paddingVertical: Metrics.doubleBaseMargin,
      marginVertical: Metrics.smallMargin,
      textAlign: 'center',
    },
    title: {
      paddingVertical: Metrics.doubleBaseMargin,
      marginVertical: Metrics.smallMargin,
      textAlign: 'center',
      color: Colors.text,
    },
    subtitle: {
      padding: Metrics.smallMargin,
      marginBottom: Metrics.smallMargin,
      marginHorizontal: Metrics.smallMargin,
    },
    titleText: {
      ...Fonts.style.h2,
      fontSize: 14,
      color: Colors.text,
    },
  },
};

export default ApplicationStyles;
