import Fonts from './Fonts';
import Metrics from './Metrics';
import Colors from './Colors';
import Toast from 'react-native-root-toast';

const ApplicationStyles = {
  toastError: {
    duration: Toast.durations.SHORT,
    position: Toast.positions.BOTTOM,
    backgroundColor: '#F44336',
    shadow: true,
    animation: true,
    hideOnPress: true,
    delay: 0,
  },
  toastSuccess: {
    duration: Toast.durations.LONG,
    position: Toast.positions.CENTER,
    backgroundColor: '#66BB6A',
    shadow: true,
    animation: true,
    hideOnPress: true,
    delay: 0,
  },
  headerTitle: {
    alignSelf: 'center',
    padding: Metrics.PADDING * 1.2,
    paddingBottom: Metrics.PADDING * 0.4,
    color: Colors.text,
    fontFamily: Fonts.type.OpenSans,
  },
  subTitle: {
    alignSelf: 'center',
    color: Colors.text,
    fontFamily: Fonts.type.OpenSans,
  },
  subSubTitle: {
    textAlign: 'center',
    fontSize: Fonts.size.h6,
  },
  infoText: {
    padding: 0,
    justifyContent: 'flex-start',
    alignSelf: 'center',
    color: 'lightgrey',
  },
  linkText: {
    alignSelf: 'center',
    fontWeight: 'bold',
    color: Colors.stoikOrange,
  },
  benefitTextItem: {
    fontSize: Fonts.size.h4,
    flex: 1, 
    flexWrap: 'wrap',
  },
  benefitItem: {
    width: 25, 
    height: 25, 
    borderRadius: 25/2, 
    backgroundColor: Colors.stoikOrange,
    marginHorizontal: Metrics.marginHorizontal,
  },
  form: {
    flex: 1,
    margin: Metrics.MARGIN,
    padding: Metrics.PADDING,
    borderRadius: 4,
    justifyContent: 'space-around',
  },
  logo: {
    alignSelf: 'center',
    width: Metrics.DEVICE_WIDTH / 1.5,
    height: Metrics.DEVICE_HEIGHT / 7.5,
  },
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  container: {
    justifyContent: 'center',
    marginTop: Metrics.MARGIN,
    padding: Metrics.PADDING,
    paddingBottom: 1.2,
    backgroundColor: '#ffffff',
  },
  stoikBenefitsContainer: {
    flex: 1, 
    margin: Metrics.MARGIN, 
    justifyContent: 'space-around'
  },
  divider: {
    backgroundColor: Colors.charcoal,
    margin: Metrics.MARGIN,
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  btn: {
    backgroundColor: Colors.stoikGrey,
    borderRadius: 8,
  },
  btnText: {
    color: Colors.text,
    fontSize: Fonts.h5,
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

};

export default ApplicationStyles;
