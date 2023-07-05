import Framework7 from './framework7-custom.js';

const webAppMainButtonPlugin = {
  name: 'WebAppMainButton',

  create() {
    Telegram.WebApp.MainButton.onClick(() => this.emit('mainButton:click'));
  },

  instance: {
    MainButton: {
      setParams(params) {
        Telegram.WebApp.MainButton.setParams(params);
      },
    },
  },
};

Framework7.use(webAppMainButtonPlugin);
