import I18n from 'ex-react-native-i18n';
import pt from './locales/pt';

I18n.fallbacks = true;
I18n.defaultLocale = 'pt';

I18n.translations = {
  pt,
};

export default I18n;
