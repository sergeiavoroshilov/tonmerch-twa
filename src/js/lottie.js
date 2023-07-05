import Framework7 from './framework7-custom.js';
import lottie from 'lottie-web';
import pako from 'pako';

let app;
const lotties = {};

const timerToastPlugin = {
  name: 'Lottie',

  create() {
    app = this;
  },

  instance: {
    initLottie(div) {
      return new Promise((resolve, reject) => {
          const url = div.getAttribute('src');
          const name = div.getAttribute('data-name');
          const w = Number(div.getAttribute('width'));
          const h = Number(div.getAttribute('height'));
  
          const xmlHttp = new XMLHttpRequest();
          xmlHttp.responseType = 'arraybuffer';
          xmlHttp.onreadystatechange = function () {
              if (xmlHttp.readyState === 4) {
                  if (xmlHttp.status === 200) {
                      const canvas = document.createElement('canvas');
                      canvas.setAttribute('width', w * window.devicePixelRatio);
                      canvas.setAttribute('height', h * window.devicePixelRatio);
                      canvas.style.width = w + 'px';
                      canvas.style.height = h + 'px';
                      div.appendChild(canvas);
                      const ctx = canvas.getContext('2d');
  
                      const animationData = JSON.parse(new TextDecoder('utf-8').decode(pako.inflate(xmlHttp.response)));
                      lotties[name] = {
                          ctx: ctx,
                          player: lottie.loadAnimation({
                              renderer: 'canvas',
                              loop: true, //name === 'processing' || name === 'start' || name === 'about' || name === 'symbol',
                              autoplay: false,
                              animationData,
                              rendererSettings: {
                                  context: ctx,
                                  scaleMode: 'noScale',
                                  clearCanvas: true
                              },
                          })
                      };
                      ctx.clearRect(0, 0, 1000, 1000);
                      resolve(lotties[name]);
                  } else {
                      reject();
                  }
              }
          };
          xmlHttp.open('GET', url, true);
          xmlHttp.send(null);
      });
    },
  
    async initLotties() {
      const divs = document.querySelectorAll('tgs-player');
      for (let i = 0; i < divs.length; i++) {
        try {
          const lt = await this.initLottie(divs[i]);
          lt.player.play();
        } catch (e) {
          console.error(e);
        }
      }
    }
  },

  on: {
    init() {
      this.initLotties();
    }
  },
};

Framework7.use(timerToastPlugin);
