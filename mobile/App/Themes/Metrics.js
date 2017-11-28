import { Dimensions, Platform } from 'react-native';

const x = Dimensions.get('window').width;
const y = Dimensions.get('window').height;

const ratioX = x < 375 ? (x < 320 ? 0.75 : 0.875) : 1;
const ratioY = y < 568 ? (y < 480 ? 0.75 : 0.875) : 1;

const base_unit = 20;

const unit = base_unit * ratioX;

function em(value) {
  return unit * value;
}

const { width, height } = Dimensions.get('window');
const screenHeight = width < height ? height : width;
const screenWidth = width < height ? width : height;

// Used via Metrics.baseMargin
const Metrics = {
  marginHorizontal: 10,
  marginVertical: 10,
  section: 25,
  baseMargin: 10,
  doubleBaseMargin: 20,
  smallMargin: 5,
  doubleSection: 50,
  horizontalLineHeight: 1,
  searchBarHeight: 30,
  navBarHeight: (Platform.OS === 'ios') ? 64 : 54,
  buttonRadius: 4,
  icons: {
    tiny: 15,
    small: 20,
    medium: 30,
    large: 45,
    xl: 50,
  },
  images: {
    small: 20,
    medium: 40,
    large: 72,
    logo: 248,
  },

  // GENERAL
  DEVICE_WIDTH: x < y ? x : y,
  DEVICE_HEIGHT: x < y ? y : x,
  RATIO_X: ratioX,
  RATIO_Y: ratioY,
  UNIT: em(1),
  PADDING: em(1),
  MARGIN: em(1),

  // CARD
  CARD_WIDTH: x - em(1.25) * 2,
  CARD_HEIGHT: (x - em(1.25) * 2) * (3 / 5),
  CARD_PADDING_X: em(1.875),
  CARD_PADDING_Y: em(1.25),

  // FONT
  FONT_SIZE: em(1),
  FONT_SIZE_SMALLER: em(0.75),
  FONT_SIZE_SMALL: em(0.875),
  FONT_SIZE_BIG: em(1.25),
  FONT_SIZE_BIGGER: em(1.5),
  FONT_SIZE_TITLE: em(2.5),

  screen: {
    height: screenHeight,
    width: screenWidth,

    widthHalf: screenWidth * 0.5,
    widthThird: screenWidth * 0.333,
    widthTwoThirds: screenWidth * 0.666,
    widthQuarter: screenWidth * 0.25,
    widthThreeQuarters: screenWidth * 0.75,
  },
  statusBarHeight: (Platform.OS === 'ios') ? 16 : 0,
  tabbarHeight: 51,

  padding: 20,
  paddingSml: 10,

  borderRadius: 2,
};

export default Metrics;
