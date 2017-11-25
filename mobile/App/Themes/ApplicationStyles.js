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
    ...Fonts.h1
  },
  subTitle: {
    alignSelf: 'center',
    color: Colors.text,
    ...Fonts.h2
  },
  subSubTitle: {
    textAlign: 'center',
    ...Fonts.h5
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
    ...Fonts.h4,
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
    ...Fonts.h5
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
    ...Fonts.h4,
    color: Colors.text,
  },

  appContainer: {
    backgroundColor: '#000',
  },

  // Default
  container: {
    position: 'relative',
    flex: 1,
    flexDirection: 'column',
    backgroundColor: Colors.background,
  },
  containerCentered: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  windowSize: {
    height: Metrics.screen.height,
    width: Metrics.screen.width,
  },

  // Aligning items
  leftAligned: {
    alignItems: 'flex-start',
  },
  centerAligned: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightAligned: {
    alignItems: 'flex-end',
  },

  // Text Styles
  baseText: {
    fontFamily: Fonts.base.family,
    fontSize: Fonts.base.size,
    lineHeight: Fonts.base.lineHeight,
    color: Colors.textPrimary,
    fontWeight: '300',
  },
  p: {
    fontFamily: Fonts.base.family,
    fontSize: Fonts.base.size,
    lineHeight: Fonts.base.lineHeight,
    color: Colors.textPrimary,
    fontWeight: '300',
    marginBottom: 8,
  },
  h1: {
    fontFamily: Fonts.h1.family,
    fontSize: Fonts.h1.size,
    lineHeight: Fonts.h1.lineHeight,
    color: Colors.headingPrimary,
    fontWeight: '800',
    margin: 0,
    marginBottom: 4,
    left: 0,
    right: 0,
  },
  h2: {
    fontFamily: Fonts.h2.family,
    fontSize: Fonts.h2.size,
    lineHeight: Fonts.h2.lineHeight,
    color: Colors.headingPrimary,
    fontWeight: '800',
    margin: 0,
    marginBottom: 4,
    left: 0,
    right: 0,
  },
  h3: {
    fontFamily: Fonts.h3.family,
    fontSize: Fonts.h3.size,
    lineHeight: Fonts.h3.lineHeight,
    color: Colors.headingPrimary,
    fontWeight: '500',
    margin: 0,
    marginBottom: 4,
    left: 0,
    right: 0,
  },
  h4: {
    fontFamily: Fonts.h4.family,
    fontSize: Fonts.h4.size,
    lineHeight: Fonts.h4.lineHeight,
    color: Colors.headingPrimary,
    fontWeight: '800',
    margin: 0,
    marginBottom: 4,
    left: 0,
    right: 0,
  },
  h5: {
    fontFamily: Fonts.h5.family,
    fontSize: Fonts.h5.size,
    lineHeight: Fonts.h5.lineHeight,
    color: Colors.headingPrimary,
    fontWeight: '800',
    margin: 0,
    marginTop: 4,
    marginBottom: 4,
    left: 0,
    right: 0,
  },
  strong: {
    fontWeight: '900',
  },
  link: {
    textDecorationLine: 'underline',
    color: Colors.brand.primary,
  },
  subtext: {
    fontFamily: Fonts.base.family,
    fontSize: Fonts.base.size * 0.8,
    lineHeight: parseInt(Fonts.base.lineHeight * 0.8, 10),
    color: Colors.textSecondary,
    fontWeight: '500',
  },

  // Helper Text Styles
  textCenterAligned: {
    textAlign: 'center',
  },
  textRightAligned: {
    textAlign: 'right',
  },

  // Give me padding
  padding: {
    paddingVertical: Metrics.padding,
    paddingHorizontal: Metrics.padding,
  },
  paddingHorizontal: {
    paddingHorizontal: Metrics.padding,
  },
  paddingLeft: {
    paddingLeft: Metrics.padding,
  },
  paddingRight: {
    paddingRight: Metrics.padding,
  },
  paddingVertical: {
    paddingVertical: Metrics.padding,
  },
  paddingTop: {
    paddingTop: Metrics.padding,
  },
  paddingBottom: {
    paddingBottom: Metrics.padding,
  },
  paddingSml: {
    paddingVertical: Metrics.paddingSml,
    paddingHorizontal: Metrics.paddingSml,
  },
  paddingHorizontalSml: {
    paddingHorizontal: Metrics.paddingSml,
  },
  paddingLeftSml: {
    paddingLeft: Metrics.paddingSml,
  },
  paddingRightSml: {
    paddingRight: Metrics.paddingSml,
  },
  paddingVerticalSml: {
    paddingVertical: Metrics.paddingSml,
  },
  paddingTopSml: {
    paddingTop: Metrics.paddingSml,
  },
  paddingBottomSml: {
    paddingBottom: Metrics.paddingSml,
  },

  // General HTML-like Elements
  hr: {
    left: 0,
    right: 0,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
    height: 1,
    backgroundColor: 'transparent',
    marginTop: Metrics.padding,
    marginBottom: Metrics.padding,
  },

  // Grid
  row: {
    left: 0,
    right: 0,
    flexDirection: 'row',
  },
  flex1: {
    flex: 1,
  },
  flex2: {
    flex: 2,
  },
  flex3: {
    flex: 3,
  },
  flex4: {
    flex: 4,
  },
  flex5: {
    flex: 5,
  },
  flex6: {
    flex: 6,
  },

  // Navbar
  navbar: {
    backgroundColor: Colors.brand.primary,
    borderBottomWidth: 0,
  },
  navbarTitle: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontFamily: Fonts.base.family,
    fontSize: Fonts.base.size,
  },
  navbarButton: {
    tintColor: '#ffffff',
  },

  // TabBar
  tabbar: {
    backgroundColor: Colors.tabbar.background,
    borderTopColor: Colors.border,
    borderTopWidth: 1,
  },

};

export default ApplicationStyles;
