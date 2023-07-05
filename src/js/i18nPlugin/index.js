import Framework7 from '../framework7-custom.js';
import i18next from 'i18next';
import resources from './resources';

const i18nPlugin = {
  name: 'i18n',

  create() {
    i18next.init({
      lng: getLocale(),
      fallbackLng: 'en',
      debug: process.env.NODE_ENV === 'development',
      resources: resources,
    }, (err, t) => {
      if (!err) {
        this.$t = t;
      } else {
        console.error(err);
      }
    });
  },
};

function getLocale() {
  try {
    return Telegram.WebApp.initDataUnsafe.user.language_code;
  } catch {
    return navigator.language.substr(0, 2)
  }
}

Framework7.use(i18nPlugin);
