import Framework7 from './framework7-custom.js';

let app;
let toast;

const timerToastPlugin = {
  name: 'TimerToast',

  create() {
    app = this;
  },

  instance: {
    timerToast: {
      show(undoCallback, time = 5000) {
        let interval;
        toast = app.toast.create({
          closeTimeout: time,
          closeButton: true,
          render: () => `
            <div class="toast toast-bottom toast-horizontal-left">
              <div class="toast-content">
                <div class="toast-text display-flex">
                  <svg width="19" height="19">
                    <circle cx='9.5' cy='9.5' r='8' fill="none" stroke="currentColor" stroke-width="2" transform-origin="9.5 9.5 0" transform="rotate(270)" stroke-dasharray="50.26" stroke-dashoffset="0">
                      <animate
                        attributeName="stroke-dashoffset"
                        values="0;50.26"
                        dur="5s"
                        repeatCount="1"/>
                    </circle>

                    <text class="value" x="9.5" y="13.5" text-anchor="middle" font-size="11" fill="currentColor" font-weight="500">
                      <tspan id="counter">5</tspan>
                    </text>
                  </svg>
                  <span style="margin-left: 7px;">${app.$t('product:ToastText')}</span>
                </div>
                <a class="toast-button button color-primary display-flex align-items-center">
                  <svg width="19" height="19" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.01299 15.25C4.59877 15.25 4.26299 15.5858 4.26299 16C4.26299 16.4142 4.59877 16.75 5.01299 16.75V15.25ZM4 7.45205L3.51362 6.88115C3.34636 7.02365 3.25 7.23232 3.25 7.45205C3.25 7.67178 3.34636 7.88046 3.51362 8.02296L4 7.45205ZM8.53833 4.5709C8.85363 4.30228 8.89147 3.82892 8.62285 3.51362C8.35423 3.19832 7.88087 3.16047 7.56557 3.4291L8.53833 4.5709ZM7.56557 11.475C7.88087 11.7436 8.35423 11.7058 8.62285 11.3905C8.89147 11.0752 8.85363 10.6018 8.53833 10.3332L7.56557 11.475ZM16.25 11.726C16.25 13.6535 14.6395 15.25 12.6104 15.25V16.75C15.4299 16.75 17.75 14.5194 17.75 11.726H16.25ZM12.6104 8.20205C14.6395 8.20205 16.25 9.79854 16.25 11.726H17.75C17.75 8.93262 15.4299 6.70205 12.6104 6.70205V8.20205ZM12.6104 15.25H5.01299V16.75H12.6104V15.25ZM12.6104 6.70205H4V8.20205H12.6104V6.70205ZM4.48638 8.02296L8.53833 4.5709L7.56557 3.4291L3.51362 6.88115L4.48638 8.02296ZM3.51362 8.02296L7.56557 11.475L8.53833 10.3332L4.48638 6.88115L3.51362 8.02296Z" fill="currentColor"/>
                  </svg>
                  <span style="margin-left: 7px;">${app.$t('product:ToastButtonText')}</span>
                </a>
              </div>
            </div>
          `,
          on: {
            closeButtonClick: () => {
              Telegram.WebApp.HapticFeedback.impactOccurred('light');
              undoCallback?.();
            },
            close: (event) => clearInterval(interval),
          },
        }).open();

        Telegram.WebApp.HapticFeedback.impactOccurred('light');

        let count = 4;
        interval = setInterval(() => {
          if (count >= 0) {
              document.querySelector('tspan').innerHTML = count--;
          } else {
            clearInterval(interval);
          }
        }, 1000);
      },

      close() {
        toast?.close();
      }
    },
  },
};

Framework7.use(timerToastPlugin);
