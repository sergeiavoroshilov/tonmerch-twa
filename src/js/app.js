import Framework7 from './framework7-custom.js';
import '../css/framework7-custom.less';
import '../css/icons.css';
import '../css/app.less';
import routes from './routes.js';
import store from './store.js';
import App from '../app.f7';

import '@lottiefiles/lottie-player';
import $ from 'dom7';

import './webAppBackButtonPlugin.js';
import './webAppClosingConfirmationPlugin.js';
import './webAppMainButtonPlugin.js';
import './timerToast';
import './i18nPlugin';
import './lottie';

var app = new Framework7({
  name: 'TON Merch',
  theme: 'auto',
  el: '#app',
  component: App,

  store: store,
  routes: routes,

  touch: {
    tapHold: true,
  },

  on: {
    init() {
      const tgThemeColor = window.Telegram?.WebApp?.themeParams?.button_color;
      if (tgThemeColor) {
        const colors = app.utils.colorThemeCSSProperties(tgThemeColor);
        $('body').attr('style', `--f7-theme-color: ${colors['--f7-theme-color']}; --f7-theme-color-rgb: ${colors['--f7-theme-color-rgb']}; --f7-theme-color-shade: ${colors['--f7-theme-color-shade']}; --f7-theme-color-tint: ${colors['--f7-theme-color-tint']};`);
      }

      $('html').addClass(Telegram.WebApp.colorScheme);

      window.Telegram?.WebApp?.ready();

      if (process.env.NODE_ENV !== 'development' && !window.Telegram?.WebApp?.initData) {
        this.popup.open('.lottie-popup', false);
        $('.view-main').remove();
        return;
      }

      window.Telegram?.WebApp?.onEvent('viewportChanged', (isStateStable) => {
        if (isStateStable) {
          document.querySelector('html').scrollTop = 1;
        }
      });

      const initData = process.env.NODE_ENV === 'development' ? import.meta.env.VITE_TELEGRAM_INIT_DATA : window.Telegram?.WebApp.initData;
      this.request.setup({
        headers: {
          authorization: `Bearer ${window.btoa(initData)}`,
        },
        beforeCreate: (parameters) => {
          const BASE_URL = /^test-tonmerch\.web\.app$/.test(window.location.host)
            ? import.meta.env.VITE_TEST_API_BASE_URL
            : import.meta.env.VITE_API_BASE_URL;
          parameters.url = /^http/.test(parameters.url)
            ? parameters.url
            : BASE_URL + parameters.url;
        },
        statusCode: {
          401: () => {
            this.popup.open('.lottie-popup', false);
            $('.view-main').remove();
          },
        },
      });

      this.store.dispatch('init');

      app.utils.nextTick(window.Telegram?.WebApp?.expand);
    },
  },
});
