import Framework7 from './framework7-custom.js';

const webAppClosingConfirmationPlugin = {
  name: 'WebAppClosingConfirmation',

  on: {
    cartUpdated: function (cart) {
      if (Telegram.WebApp.isVersionAtLeast('6.1')) {
        if (cart.length > 0) {
          !Telegram.WebApp.isClosingConfirmationEnabled &&
            Telegram.WebApp.enableClosingConfirmation();
        } else {
          Telegram.WebApp.isClosingConfirmationEnabled &&
            Telegram.WebApp.disableClosingConfirmation();
        }
      }
    }
  },
};

Framework7.use(webAppClosingConfirmationPlugin);
