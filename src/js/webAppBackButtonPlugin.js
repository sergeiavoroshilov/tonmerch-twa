import Framework7 from './framework7-custom.js';

const webAppBackButtonPlugin = {
  name: 'WebAppBackButton',

  create() {
    if (Telegram.WebApp.isVersionAtLeast('6.1')) {
      Telegram.WebApp.BackButton.onClick(() => {
        if (this.view.main.history.length > 1) {
          this.view.main.router.back()
        }
      })
    }
  },

  on: {
    viewInit: function(view) {
      view.router.clearPreviousHistory();
    },
    routeChanged: function(_newRoute, _previousRoute, router) {
      if (Telegram.WebApp.isVersionAtLeast('6.1')) {
        if (router.history.length >= 1 && !Telegram.WebApp.BackButton.isVisible) {
          Telegram.WebApp.BackButton.show();
        }
        if (router.history.length === 1 && Telegram.WebApp.BackButton.isVisible) {
          Telegram.WebApp.BackButton.hide();
        }
      }
    },
  },
};

Framework7.use(webAppBackButtonPlugin);
