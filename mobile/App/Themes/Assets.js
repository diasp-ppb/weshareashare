const images = {
  logo: require('@assets/weshareashare_logo.png'),
  background: require('@assets/background.png'),
  grupoLobo: require('@assets/logoGrupoLobo.png'),
  wikipedia: require('@assets/logoWikipedia.png'),
  amnistia: require('@assets/logoAmnistiaInternacional.png'),
  wordpress: require('@assets/logoWorldPressPhoto.png'),
  piechart: require('@assets/pieChart.png'),
};

const fonts = {
  OpenSansBold: require('@assets/Fonts/OpenSans-Bold.ttf'),
  OpenSansItalic: require('@assets/Fonts/OpenSans-Italic.ttf'),
  OpenSansRegular: require('@assets/Fonts/OpenSans-Regular.ttf'),
  RobotoMedium: require('@assets/Fonts/Roboto_Medium.ttf'),
};

export default { ...images, ...fonts };
