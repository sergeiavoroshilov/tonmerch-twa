import{c as se,F as A,S as ce,a as de,A as le,b as pe,d as ue,R as me,T as Xe,I as he,L as _e,e as ve,f as ye,g as fe,h as ge,P as ke,i as be,j as $e,r as D,k as we,p as Ce,l as Ae,$ as O}from"./vendor.6ae3e418.js";const Te=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const d of n.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function t(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerpolicy&&(n.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?n.credentials="include":i.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(i){if(i.ep)return;i.ep=!0;const n=t(i);fetch(i.href,n)}};Te();function F(){return function(o){var e=o.$,t=o.$h,r=o.$root,i=o.$f7,n=o.$f7route,d=o.$f7router,l=o.$theme,c=o.$update,m=o.$store;return t`
  <div class="tds-footer block-footer">
    <slot></slot>
  </div>
`}}F.id="29fdb305d7";F.style=`
.md .tds-footer {
  --f7-block-footer-text-color: var(--tg-theme-hint-color, #696A6F);
  --f7-block-footer-margin: 12px;
  --f7-block-padding-horizontal: 20px;
  --f7-block-footer-font-size: 13px;

  line-height: 14px;
}
`;function G(o,{$f7:e}){return function(t){var r=t.$,i=t.$h,n=t.$root,d=t.$f7,l=t.$f7route,c=t.$f7router,m=t.$theme,s=t.$update,u=t.$store;return i`
  <div class="tds-list ${d.theme==="md"&&!o.noShadow&&"default-shadow"}">
    <div class="block-header if-ios">
      <slot name="header"></slot>
    </div>
    <div class="list no-hairlines-md ${d.theme==="ios"&&"inset"} ${o.class}">
      <ul>
        <div class="block-title if-md">
          <slot name="header"></slot>
        </div>
        <slot name="items"></slot>
      </ul>
    </div>
    <div class="block-footer">
      <slot name="footer"></slot>
    </div>
  </div>
`}}G.id="c4cacae1f0";G.style=`
.md .tds-list {
  --f7-block-title-padding-horizontal: 20px;
  --f7-block-title-padding-vertical: 18px;
  --f7-block-margin-vertical: 0px;
  --f7-block-title-margin-bottom: 4px;
  --f7-block-title-bg-color: var(--f7-list-bg-color);
  --f7-block-title-text-color: var(--tds-theme-button-color);
  --f7-block-title-font-size: 15px;
  --f7-block-title-line-height: 18px;
  --f7-block-title-font-weight: 500;

  --f7-input-height: 34px;
  --f7-list-item-padding-horizontal: 20px;
  --f7-list-bg-color: var(--tds-theme-bg-color);
  --f7-list-item-title-font-size: 15px;
  --f7-list-item-title-line-height: 18px;
  --f7-list-item-min-height: 40px;
  --f7-list-item-after-font-size: 15px;
  --f7-list-item-after-line-height: 18px;

  --f7-list-item-divider-height: 12px;
  --f7-list-item-divider-bg-color: var(--tds-theme-secondary-bg-color);
}

.md .tds-list .media-list {
  --f7-list-item-padding-vertical: 11px;
  --f7-list-item-padding-horizontal: 20px;
  --f7-list-item-media-margin: 20px;
}

.md .tds-list .media-list .item-media {
  min-height: 64px;
  min-width: 25px;
}

.md .tds-list .media-list .item-inner {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
}

.md .tds-list .media-list .item-text {
  margin-top: 6px;
}

.md .tds-list .list {
  margin: 0;
  margin-bottom: 12px;
}

.md .tds-list .block-title {
  margin: 0;
  padding-top: var(--f7-block-title-padding-vertical);
  padding-left: var(--f7-block-title-padding-horizontal);
  padding-right: var(--f7-block-title-padding-horizontal);
  padding-bottom: var(--f7-block-title-margin-bottom);
  background-color: var(--f7-block-title-bg-color);
}

.tds-list .block-title:empty {
  display: none;
}

.ios .tds-list .block-header {
  text-transform: uppercase;
}

.md .tds-list .item-divider div:first-child {
  width: 200%;
  height: 100%;
  position: absolute;
  left: -50%;
  top: -100%;
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.2), 0px 1px 1px rgba(0, 0, 0, 0.05), 0px 2px 10px rgba(0, 0, 0, 0.04);
}

.md .tds-list .item-divider div:last-child {
  width: 200%;
  height: 100%;
  position: absolute;
  left: -50%;
  top: 100%;
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.2), 0px 1px 1px rgba(0, 0, 0, 0.05), 0px 2px 10px rgba(0, 0, 0, 0.04);
}

.md .page-content .tds-list:first-child > .list > ul:before {
  content: none;
}

.md .tds-list .smart-select {
  --f7-list-item-title-line-height: 34px;
}
`;function z(o,{$f7:e}){return function(t){var r=t.$,i=t.$h,n=t.$root,d=t.$f7,l=t.$f7route,c=t.$f7router,m=t.$theme,s=t.$update,u=t.$store;return i`
  <label class="tds-toggle toggle toggle-init">
    <input type="checkbox" checked />
    <span class="toggle-icon"></span>
  </label>
`}}z.id="00faef4e64";z.style=`
.md .tds-toggle {
  --f7-toggle-width: 30px;
  --f7-toggle-height: 13px;
  --f7-toggle-inactive-color: #b0afaf;
}
.md .tds-toggle .toggle-icon:after {
  border: 2px solid var(--f7-toggle-inactive-color);
  box-sizing: border-box;
  box-shadow: none;
}
.md .tds-toggle.toggle input[type='checkbox']:checked + .toggle-icon {
  background: var(--f7-toggle-active-color, var(--tds-theme-button-color));
}
.md .tds-toggle.toggle input[type='checkbox']:checked + .toggle-icon:after {
  background: var(--tds-theme-bg-color);
  border: 2px solid var(--f7-toggle-active-color, var(--tds-theme-button-color));
}
`;function U(o,{$f7:e,$el:t,$onBeforeUpdate:r}){r(()=>{const n=e.swiper.get(t.value),d=o.images.map(l=>`
      <div class="swiper-slide">
        <img src="${l}"/>
      </div>
    `);n.removeAllSlides(),n.appendSlide(d),n.slideTo(1)});function i(n){const d=e.swiper.get(t.value);n.offsetX/e.width>.3?d.slideNext():d.slidePrev()}return function(n){var d=n.$,l=n.$h,c=n.$root,m=n.$f7,s=n.$f7route,u=n.$f7router,p=n.$theme,X=n.$update,h=n.$store;return l`
  <div class="tds-swiper swiper swiper-init" data-pagination='{"el": ".swiper-pagination"}' data-loop="true" @click=${i}>
    <div class="swiper-pagination"></div>
    <div class="swiper-wrapper"></div>
  </div>
`}}U.id="5eba38e3af";U.style=`
.tds-swiper {
  height: 100vw;
}
.tds-swiper .swiper-slide img {
  width: 100%;
  height: 100%;
}
.tds-swiper .swiper-pagination {
  display: flex;
  top: 4px;
  bottom: auto;
  justify-content: space-between;
  padding: 0 4px;
  box-sizing: border-box;
  pointer-events: none;
}
.tds-swiper .swiper-pagination .swiper-pagination-bullet {
  flex: auto 1 1;
  height: 2px;
  border-radius: 1px;
  margin: 0 2px;
}
.tds-swiper .swiper-pagination .swiper-pagination-bullet.swiper-pagination-bullet-active {
  background-color: white;
}
`;function H(o){return function(e){var t=e.$,r=e.$h,i=e.$root,n=e.$f7,d=e.$f7route,l=e.$f7router,c=e.$theme,m=e.$update,s=e.$store;return r`
  <label class="tds-radio-color">
    <input type="radio" name=${o.name} value=${o.value} checked=${o.checked} style="color: ${o.color}" />
  </label>
`}}H.id="bf13fb13e8";H.style=`
.tds-radio-color {
  display: inline-block;
  margin: 3px 0;1
}
.tds-radio-color + .tds-radio-color {
  margin-left: 22px;
}
.tds-radio-color input[type="radio"] {
  appearance: none;
  background-color: currentColor;
  margin: 0;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: grid;
  place-content: center;
  box-shadow: 0 0 1px black;
  cursor: pointer;
}
.tds-radio-color input[type="radio"]::before {
  content: '';
  display: block;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  transform: scale(0);
  transition: 120ms transform ease-in-out;
  backdrop-filter: invert(1) brightness(5);
}
.ios .tds-radio-color input[value="White"][type="radio"]::before {
  background-color: black;
}
.ios .tds-radio-color input[value="Black"][type="radio"]::before {
  background-color: white;
}
.tds-radio-color input[type="radio"]:checked::before {
  transform: scale(1);
}
`;function R(o){return function(e){var t=e.$,r=e.$h,i=e.$root,n=e.$f7,d=e.$f7route,l=e.$f7router,c=e.$theme,m=e.$update,s=e.$store;return r`
  <label class="tds-radio-image">
    <div class="tds-radio-image__bg" style="background-image: url(${o.src})">
      <input type="radio" name=${o.name} value=${o.value} checked=${o.checked} style="color: ${o.accentColor}" />
    </div>
    <div class="tds-radio-image__caption">${o.caption}</div>
  </label>
`}}R.id="c2fc93fda7";R.style=`
.tds-radio-image {
  display: inline-block;
  width: 76px;
  height: 123px;
  cursor: pointer;
}
.tds-radio-image__bg {
  height: 97px;
  border-radius: 6px;
  background-position: top;
  background-size: contain;
  background-color: lightgray;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.08) inset;
  position: relative;
}
.tds-radio-image__caption {
  font-size: 13px;
  line-height: 15px;
  text-align: center;
  font-weight: 400;
  margin-top: 11px;
}
.tds-radio-image + .tds-radio-image {
  margin-left: 15px;
}
.tds-radio-image input[type="radio"] {
  appearance: none;
  margin: 0;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: grid;
  place-content: center;
  box-sizing: border-box;
  border: 2px solid #95999C;
  position: absolute;
  left: 28px;
  bottom: 12px;
  cursor: pointer;
}
.tds-radio-image input[type="radio"]:checked {
  border: 2px solid currentColor;
}
.tds-radio-image input[type="radio"]::before {
  content: '';
  display: block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  transform: scale(0);
  transition: 120ms transform ease-in-out;
  background-color: currentColor;
}
.tds-radio-image input[type="radio"]:checked::before {
  transform: scale(1);
}
`;function K(o){return function(e){var t=e.$,r=e.$h,i=e.$root,n=e.$f7,d=e.$f7route,l=e.$f7router,c=e.$theme,m=e.$update,s=e.$store;return r`
  <label class="tds-radio-chip">
    <input type="radio" name=${o.name} value=${o.value} checked=${o.checked}></input>
    <span class="tds-radio-chip-label">${o.title||o.value}</span>
  </label>
`}}K.id="dbb7c55c0b";K.style=`
.tds-radio-chip {
  display: grid;
  place-content: center;
  padding: 7px 18px;
  flex: auto 0 1;
  text-align: center;
  height: 32px;
  box-sizing: border-box;
  position: relative;
}
.tds-radio-chip input[type="radio"] {
  appearance: none;
  position: absolute;
  width: 100%;
  height: 100%;
  margin: 0;
  top: 0;
  left: 0;
  background-color: rgba(var(--f7-theme-color-rgb), 0.15);
  border-radius: 16px;
}
.tds-radio-chip input[type="radio"]:checked {
  background-color: rgba(var(--f7-theme-color-rgb), 0.3);
}
.tds-radio-chip-label {
  position: relative;
  z-index: 1;
  font-size: 15px;
  line-height: 18px;
  font-weight: 400;
  color: var(--f7-theme-color);
}
`;var Se=[{phone_code:"1876",country_code:"JM",country_name:"Jamaica",phone_mask:"XXX XXXX"},{phone_code:"1869",country_code:"KN",country_name:"Saint Kitts & Nevis",phone_mask:"XXX XXXX"},{phone_code:"1868",country_code:"TT",country_name:"Trinidad & Tobago",phone_mask:"XXX XXXX"},{phone_code:"1784",country_code:"VC",country_name:"Saint Vincent & the Grenadines",phone_mask:"XXX XXXX"},{phone_code:"1767",country_code:"DM",country_name:"Dominica",phone_mask:"XXX XXXX"},{phone_code:"1758",country_code:"LC",country_name:"Saint Lucia",phone_mask:"XXX XXXX"},{phone_code:"1721",country_code:"SX",country_name:"Sint Maarten",phone_mask:"XXX XXXX"},{phone_code:"1684",country_code:"AS",country_name:"American Samoa",phone_mask:"XXX XXXX"},{phone_code:"1671",country_code:"GU",country_name:"Guam",phone_mask:"XXX XXXX"},{phone_code:"1670",country_code:"MP",country_name:"Northern Mariana Islands",phone_mask:"XXX XXXX"},{phone_code:"1664",country_code:"MS",country_name:"Montserrat",phone_mask:"XXX XXXX"},{phone_code:"1649",country_code:"TC",country_name:"Turks & Caicos Islands",phone_mask:"XXX XXXX"},{phone_code:"1473",country_code:"GD",country_name:"Grenada",phone_mask:"XXX XXXX"},{phone_code:"1441",country_code:"BM",country_name:"Bermuda",phone_mask:"XXX XXXX"},{phone_code:"1345",country_code:"KY",country_name:"Cayman Islands",phone_mask:"XXX XXXX"},{phone_code:"1340",country_code:"VI",country_name:"US Virgin Islands",phone_mask:"XXX XXXX"},{phone_code:"1284",country_code:"VG",country_name:"British Virgin Islands",phone_mask:"XXX XXXX"},{phone_code:"1268",country_code:"AG",country_name:"Antigua & Barbuda",phone_mask:"XXX XXXX"},{phone_code:"1264",country_code:"AI",country_name:"Anguilla",phone_mask:"XXX XXXX"},{phone_code:"1246",country_code:"BB",country_name:"Barbados",phone_mask:"XXX XXXX"},{phone_code:"1242",country_code:"BS",country_name:"Bahamas",phone_mask:"XXX XXXX"},{phone_code:"998",country_code:"UZ",country_name:"Uzbekistan",phone_mask:"XX XXXXXXX"},{phone_code:"996",country_code:"KG",country_name:"Kyrgyzstan",phone_mask:"XXX XXXXXX"},{phone_code:"995",country_code:"GE",country_name:"Georgia",phone_mask:"XXX XXX XXX"},{phone_code:"994",country_code:"AZ",country_name:"Azerbaijan",phone_mask:"XX XXX XXXX"},{phone_code:"993",country_code:"TM",country_name:"Turkmenistan",phone_mask:"XX XXXXXX"},{phone_code:"992",country_code:"TJ",country_name:"Tajikistan",phone_mask:"XX XXX XXXX"},{phone_code:"977",country_code:"NP",country_name:"Nepal",phone_mask:"XX XXXX XXXX"},{phone_code:"976",country_code:"MN",country_name:"Mongolia",phone_mask:"XX XX XXXX"},{phone_code:"975",country_code:"BT",country_name:"Bhutan",phone_mask:"XX XXX XXX"},{phone_code:"974",country_code:"QA",country_name:"Qatar",phone_mask:"XX XXX XXX"},{phone_code:"973",country_code:"BH",country_name:"Bahrain",phone_mask:"XXXX XXXX"},{phone_code:"972",country_code:"IL",country_name:"Israel",phone_mask:"XX XXX XXXX"},{phone_code:"971",country_code:"AE",country_name:"United Arab Emirates",phone_mask:"XX XXX XXXX"},{phone_code:"970",country_code:"PS",country_name:"Palestine",phone_mask:"XXX XX XXXX"},{phone_code:"968",country_code:"OM",country_name:"Oman",phone_mask:"XXXX XXXX"},{phone_code:"967",country_code:"YE",country_name:"Yemen",phone_mask:"XXX XXX XXX"},{phone_code:"966",country_code:"SA",country_name:"Saudi Arabia",phone_mask:"XX XXX XXXX"},{phone_code:"965",country_code:"KW",country_name:"Kuwait",phone_mask:"XXXX XXXX"},{phone_code:"964",country_code:"IQ",country_name:"Iraq",phone_mask:"XXX XXX XXXX"},{phone_code:"963",country_code:"SY",country_name:"Syria",phone_mask:"XXX XXX XXX"},{phone_code:"962",country_code:"JO",country_name:"Jordan",phone_mask:"X XXXX XXXX"},{phone_code:"961",country_code:"LB",country_name:"Lebanon",phone_mask:""},{phone_code:"960",country_code:"MV",country_name:"Maldives",phone_mask:"XXX XXXX"},{phone_code:"886",country_code:"TW",country_name:"Taiwan",phone_mask:"XXX XXX XXX"},{phone_code:"883",country_code:"GO",country_name:"International Networks",phone_mask:""},{phone_code:"882",country_code:"GO",country_name:"International Networks",phone_mask:""},{phone_code:"881",country_code:"GO",country_name:"Global Mobile Satellite",phone_mask:""},{phone_code:"880",country_code:"BD",country_name:"Bangladesh",phone_mask:""},{phone_code:"856",country_code:"LA",country_name:"Laos",phone_mask:"XX XX XXX XXX"},{phone_code:"855",country_code:"KH",country_name:"Cambodia",phone_mask:""},{phone_code:"853",country_code:"MO",country_name:"Macau",phone_mask:"XXXX XXXX"},{phone_code:"852",country_code:"HK",country_name:"Hong Kong",phone_mask:"X XXX XXXX"},{phone_code:"850",country_code:"KP",country_name:"North Korea",phone_mask:""},{phone_code:"692",country_code:"MH",country_name:"Marshall Islands",phone_mask:""},{phone_code:"691",country_code:"FM",country_name:"Micronesia",phone_mask:""},{phone_code:"690",country_code:"TK",country_name:"Tokelau",phone_mask:""},{phone_code:"689",country_code:"PF",country_name:"French Polynesia",phone_mask:""},{phone_code:"688",country_code:"TV",country_name:"Tuvalu",phone_mask:""},{phone_code:"687",country_code:"NC",country_name:"New Caledonia",phone_mask:""},{phone_code:"686",country_code:"KI",country_name:"Kiribati",phone_mask:""},{phone_code:"685",country_code:"WS",country_name:"Samoa",phone_mask:""},{phone_code:"683",country_code:"NU",country_name:"Niue",phone_mask:""},{phone_code:"682",country_code:"CK",country_name:"Cook Islands",phone_mask:""},{phone_code:"681",country_code:"WF",country_name:"Wallis & Futuna",phone_mask:""},{phone_code:"680",country_code:"PW",country_name:"Palau",phone_mask:""},{phone_code:"679",country_code:"FJ",country_name:"Fiji",phone_mask:""},{phone_code:"678",country_code:"VU",country_name:"Vanuatu",phone_mask:""},{phone_code:"677",country_code:"SB",country_name:"Solomon Islands",phone_mask:""},{phone_code:"676",country_code:"TO",country_name:"Tonga",phone_mask:""},{phone_code:"675",country_code:"PG",country_name:"Papua New Guinea",phone_mask:""},{phone_code:"674",country_code:"NR",country_name:"Nauru",phone_mask:""},{phone_code:"673",country_code:"BN",country_name:"Brunei Darussalam",phone_mask:"XXX XXXX"},{phone_code:"672",country_code:"NF",country_name:"Norfolk Island",phone_mask:""},{phone_code:"670",country_code:"TL",country_name:"Timor-Leste",phone_mask:""},{phone_code:"599",country_code:"BQ",country_name:"Bonaire, Sint Eustatius & Saba",phone_mask:""},{phone_code:"599",country_code:"CW",country_name:"Cura\xE7ao",phone_mask:""},{phone_code:"598",country_code:"UY",country_name:"Uruguay",phone_mask:"X XXX XXXX"},{phone_code:"597",country_code:"SR",country_name:"Suriname",phone_mask:"XXX XXXX"},{phone_code:"596",country_code:"MQ",country_name:"Martinique",phone_mask:""},{phone_code:"595",country_code:"PY",country_name:"Paraguay",phone_mask:"XXX XXX XXX"},{phone_code:"594",country_code:"GF",country_name:"French Guiana",phone_mask:""},{phone_code:"593",country_code:"EC",country_name:"Ecuador",phone_mask:"XX XXX XXXX"},{phone_code:"592",country_code:"GY",country_name:"Guyana",phone_mask:""},{phone_code:"591",country_code:"BO",country_name:"Bolivia",phone_mask:"X XXX XXXX"},{phone_code:"590",country_code:"GP",country_name:"Guadeloupe",phone_mask:"XXX XX XX XX"},{phone_code:"509",country_code:"HT",country_name:"Haiti",phone_mask:""},{phone_code:"508",country_code:"PM",country_name:"Saint Pierre & Miquelon",phone_mask:""},{phone_code:"507",country_code:"PA",country_name:"Panama",phone_mask:"XXXX XXXX"},{phone_code:"506",country_code:"CR",country_name:"Costa Rica",phone_mask:"XXXX XXXX"},{phone_code:"505",country_code:"NI",country_name:"Nicaragua",phone_mask:"XXXX XXXX"},{phone_code:"504",country_code:"HN",country_name:"Honduras",phone_mask:"XXXX XXXX"},{phone_code:"503",country_code:"SV",country_name:"El Salvador",phone_mask:"XXXX XXXX"},{phone_code:"502",country_code:"GT",country_name:"Guatemala",phone_mask:"X XXX XXXX"},{phone_code:"501",country_code:"BZ",country_name:"Belize",phone_mask:""},{phone_code:"500",country_code:"FK",country_name:"Falkland Islands",phone_mask:""},{phone_code:"423",country_code:"LI",country_name:"Liechtenstein",phone_mask:""},{phone_code:"421",country_code:"SK",country_name:"Slovakia",phone_mask:"XXX XXX XXX"},{phone_code:"420",country_code:"CZ",country_name:"Czech Republic",phone_mask:"XXX XXX XXX"},{phone_code:"389",country_code:"MK",country_name:"Macedonia",phone_mask:"XX XXX XXX"},{phone_code:"387",country_code:"BA",country_name:"Bosnia & Herzegovina",phone_mask:"XX XXX XXX"},{phone_code:"386",country_code:"SI",country_name:"Slovenia",phone_mask:"XX XXX XXX"},{phone_code:"385",country_code:"HR",country_name:"Croatia",phone_mask:""},{phone_code:"383",country_code:"XK",country_name:"Kosovo",phone_mask:"XXXX XXXX"},{phone_code:"382",country_code:"ME",country_name:"Montenegro",phone_mask:""},{phone_code:"381",country_code:"RS",country_name:"Serbia",phone_mask:"XX XXX XXXX"},{phone_code:"380",country_code:"UA",country_name:"Ukraine",phone_mask:"XX XXX XX XX"},{phone_code:"378",country_code:"SM",country_name:"San Marino",phone_mask:"XXX XXX XXXX"},{phone_code:"377",country_code:"MC",country_name:"Monaco",phone_mask:"XXXX XXXX"},{phone_code:"376",country_code:"AD",country_name:"Andorra",phone_mask:"XX XX XX"},{phone_code:"375",country_code:"BY",country_name:"Belarus",phone_mask:"XX XXX XXXX"},{phone_code:"374",country_code:"AM",country_name:"Armenia",phone_mask:"XX XXX XXX"},{phone_code:"373",country_code:"MD",country_name:"Moldova",phone_mask:"XX XXX XXX"},{phone_code:"372",country_code:"EE",country_name:"Estonia",phone_mask:""},{phone_code:"371",country_code:"LV",country_name:"Latvia",phone_mask:"XXX XXXXX"},{phone_code:"370",country_code:"LT",country_name:"Lithuania",phone_mask:"XXX XXXXX"},{phone_code:"359",country_code:"BG",country_name:"Bulgaria",phone_mask:""},{phone_code:"358",country_code:"FI",country_name:"Finland",phone_mask:""},{phone_code:"357",country_code:"CY",country_name:"Cyprus",phone_mask:"XXXX XXXX"},{phone_code:"356",country_code:"MT",country_name:"Malta",phone_mask:"XX XX XX XX"},{phone_code:"355",country_code:"AL",country_name:"Albania",phone_mask:"XX XXX XXXX"},{phone_code:"354",country_code:"IS",country_name:"Iceland",phone_mask:"XXX XXXX"},{phone_code:"353",country_code:"IE",country_name:"Ireland",phone_mask:"XX XXX XXXX"},{phone_code:"352",country_code:"LU",country_name:"Luxembourg",phone_mask:""},{phone_code:"351",country_code:"PT",country_name:"Portugal",phone_mask:"X XXXX XXXX"},{phone_code:"350",country_code:"GI",country_name:"Gibraltar",phone_mask:"XXXX XXXX"},{phone_code:"299",country_code:"GL",country_name:"Greenland",phone_mask:"XXX XXX"},{phone_code:"298",country_code:"FO",country_name:"Faroe Islands",phone_mask:"XXX XXX"},{phone_code:"297",country_code:"AW",country_name:"Aruba",phone_mask:"XXX XXXX"},{phone_code:"291",country_code:"ER",country_name:"Eritrea",phone_mask:"X XXX XXX"},{phone_code:"290",country_code:"SH",country_name:"Saint Helena",phone_mask:"XX XXX"},{phone_code:"269",country_code:"KM",country_name:"Comoros",phone_mask:"XXX XXXX"},{phone_code:"268",country_code:"SZ",country_name:"Swaziland",phone_mask:"XXXX XXXX"},{phone_code:"267",country_code:"BW",country_name:"Botswana",phone_mask:"XX XXX XXX"},{phone_code:"266",country_code:"LS",country_name:"Lesotho",phone_mask:"XX XXX XXX"},{phone_code:"265",country_code:"MW",country_name:"Malawi",phone_mask:"77 XXX XXXX"},{phone_code:"264",country_code:"NA",country_name:"Namibia",phone_mask:"XX XXX XXXX"},{phone_code:"263",country_code:"ZW",country_name:"Zimbabwe",phone_mask:"XX XXX XXXX"},{phone_code:"262",country_code:"RE",country_name:"R\xE9union",phone_mask:"XXX XXX XXX"},{phone_code:"261",country_code:"MG",country_name:"Madagascar",phone_mask:"XX XX XXX XX"},{phone_code:"260",country_code:"ZM",country_name:"Zambia",phone_mask:"XX XXX XXXX"},{phone_code:"258",country_code:"MZ",country_name:"Mozambique",phone_mask:"XX XXX XXXX"},{phone_code:"257",country_code:"BI",country_name:"Burundi",phone_mask:"XX XX XXXX"},{phone_code:"256",country_code:"UG",country_name:"Uganda",phone_mask:"XX XXX XXXX"},{phone_code:"255",country_code:"TZ",country_name:"Tanzania",phone_mask:"XX XXX XXXX"},{phone_code:"254",country_code:"KE",country_name:"Kenya",phone_mask:"XXX XXX XXX"},{phone_code:"253",country_code:"DJ",country_name:"Djibouti",phone_mask:"XX XX XX XX"},{phone_code:"252",country_code:"SO",country_name:"Somalia",phone_mask:"XX XXX XXX"},{phone_code:"251",country_code:"ET",country_name:"Ethiopia",phone_mask:"XX XXX XXXX"},{phone_code:"250",country_code:"RW",country_name:"Rwanda",phone_mask:"XXX XXX XXX"},{phone_code:"249",country_code:"SD",country_name:"Sudan",phone_mask:"XX XXX XXXX"},{phone_code:"248",country_code:"SC",country_name:"Seychelles",phone_mask:"X XX XX XX"},{phone_code:"247",country_code:"SH",country_name:"Saint Helena",phone_mask:"XXXX"},{phone_code:"246",country_code:"IO",country_name:"Diego Garcia",phone_mask:"XXX XXXX"},{phone_code:"245",country_code:"GW",country_name:"Guinea-Bissau",phone_mask:"XXX XXXX"},{phone_code:"244",country_code:"AO",country_name:"Angola",phone_mask:"XXX XXX XXX"},{phone_code:"243",country_code:"CD",country_name:"Congo (Dem. Rep.)",phone_mask:"XX XXX XXXX"},{phone_code:"242",country_code:"CG",country_name:"Congo (Rep.)",phone_mask:"XX XXX XXXX"},{phone_code:"241",country_code:"GA",country_name:"Gabon",phone_mask:"X XX XX XX"},{phone_code:"240",country_code:"GQ",country_name:"Equatorial Guinea",phone_mask:"XXX XXX XXX"},{phone_code:"239",country_code:"ST",country_name:"S\xE3o Tom\xE9 & Pr\xEDncipe",phone_mask:"XX XXXXX"},{phone_code:"238",country_code:"CV",country_name:"Cape Verde",phone_mask:"XXX XXXX"},{phone_code:"237",country_code:"CM",country_name:"Cameroon",phone_mask:"XXXX XXXX"},{phone_code:"236",country_code:"CF",country_name:"Central African Rep.",phone_mask:"XX XX XX XX"},{phone_code:"235",country_code:"TD",country_name:"Chad",phone_mask:"XX XX XX XX"},{phone_code:"234",country_code:"NG",country_name:"Nigeria",phone_mask:""},{phone_code:"233",country_code:"GH",country_name:"Ghana",phone_mask:""},{phone_code:"232",country_code:"SL",country_name:"Sierra Leone",phone_mask:"XX XXX XXX"},{phone_code:"231",country_code:"LR",country_name:"Liberia",phone_mask:""},{phone_code:"230",country_code:"MU",country_name:"Mauritius",phone_mask:""},{phone_code:"229",country_code:"BJ",country_name:"Benin",phone_mask:"XX XXX XXX"},{phone_code:"228",country_code:"TG",country_name:"Togo",phone_mask:"XX XXX XXX"},{phone_code:"227",country_code:"NE",country_name:"Niger",phone_mask:"XX XX XX XX"},{phone_code:"226",country_code:"BF",country_name:"Burkina Faso",phone_mask:"XX XX XX XX"},{phone_code:"225",country_code:"CI",country_name:"C\xF4te d`Ivoire",phone_mask:"XX XXX XXX"},{phone_code:"224",country_code:"GN",country_name:"Guinea",phone_mask:"XXX XXX XXX"},{phone_code:"223",country_code:"ML",country_name:"Mali",phone_mask:"XXXX XXXX"},{phone_code:"222",country_code:"MR",country_name:"Mauritania",phone_mask:"XXXX XXXX"},{phone_code:"221",country_code:"SN",country_name:"Senegal",phone_mask:"XX XXX XXXX"},{phone_code:"220",country_code:"GM",country_name:"Gambia",phone_mask:"XXX XXXX"},{phone_code:"218",country_code:"LY",country_name:"Libya",phone_mask:"XX XXX XXXX"},{phone_code:"216",country_code:"TN",country_name:"Tunisia",phone_mask:"XX XXX XXX"},{phone_code:"213",country_code:"DZ",country_name:"Algeria",phone_mask:"XXX XX XX XX"},{phone_code:"212",country_code:"MA",country_name:"Morocco",phone_mask:"XX XXX XXXX"},{phone_code:"211",country_code:"SS",country_name:"South Sudan",phone_mask:"XX XXX XXXX"},{phone_code:"98",country_code:"IR",country_name:"Iran",phone_mask:"XXX XXX XXXX"},{phone_code:"95",country_code:"MM",country_name:"Myanmar",phone_mask:""},{phone_code:"94",country_code:"LK",country_name:"Sri Lanka",phone_mask:"XX XXX XXXX"},{phone_code:"93",country_code:"AF",country_name:"Afghanistan",phone_mask:"XXX XXX XXX"},{phone_code:"92",country_code:"PK",country_name:"Pakistan",phone_mask:"XXX XXX XXXX"},{phone_code:"91",country_code:"IN",country_name:"India",phone_mask:"XXXXX XXXXX"},{phone_code:"90",country_code:"TR",country_name:"Turkey",phone_mask:"XXX XXX XXXX"},{phone_code:"86",country_code:"CN",country_name:"China",phone_mask:"XXX XXXX XXXX"},{phone_code:"84",country_code:"VN",country_name:"Vietnam",phone_mask:""},{phone_code:"82",country_code:"KR",country_name:"South Korea",phone_mask:""},{phone_code:"81",country_code:"JP",country_name:"Japan",phone_mask:"XX XXXX XXXX"},{phone_code:"66",country_code:"TH",country_name:"Thailand",phone_mask:"X XXXX XXXX"},{phone_code:"65",country_code:"SG",country_name:"Singapore",phone_mask:"XXXX XXXX"},{phone_code:"64",country_code:"NZ",country_name:"New Zealand",phone_mask:""},{phone_code:"63",country_code:"PH",country_name:"Philippines",phone_mask:"XXX XXX XXXX"},{phone_code:"62",country_code:"ID",country_name:"Indonesia",phone_mask:""},{phone_code:"61",country_code:"AU",country_name:"Australia",phone_mask:"XXX XXX XXX"},{phone_code:"60",country_code:"MY",country_name:"Malaysia",phone_mask:""},{phone_code:"58",country_code:"VE",country_name:"Venezuela",phone_mask:"XXX XXX XXXX"},{phone_code:"57",country_code:"CO",country_name:"Colombia",phone_mask:"XXX XXX XXXX"},{phone_code:"56",country_code:"CL",country_name:"Chile",phone_mask:"X XXXX XXXX"},{phone_code:"55",country_code:"BR",country_name:"Brazil",phone_mask:"XX XXXXX XXXX"},{phone_code:"54",country_code:"AR",country_name:"Argentina",phone_mask:""},{phone_code:"53",country_code:"CU",country_name:"Cuba",phone_mask:"XXXX XXXX"},{phone_code:"52",country_code:"MX",country_name:"Mexico",phone_mask:""},{phone_code:"51",country_code:"PE",country_name:"Peru",phone_mask:"XXX XXX XXX"},{phone_code:"49",country_code:"DE",country_name:"Germany",phone_mask:""},{phone_code:"48",country_code:"PL",country_name:"Poland",phone_mask:"XXX XXX XXX"},{phone_code:"47",country_code:"NO",country_name:"Norway",phone_mask:"XXXX XXXX"},{phone_code:"46",country_code:"SE",country_name:"Sweden",phone_mask:"XX XXX XXXX"},{phone_code:"45",country_code:"DK",country_name:"Denmark",phone_mask:"XXXX XXXX"},{phone_code:"44",country_code:"GB",country_name:"United Kingdom",phone_mask:"XXXX XXXXXX"},{phone_code:"43",country_code:"AT",country_name:"Austria",phone_mask:""},{phone_code:"42",country_code:"YL",country_name:"Y-land",phone_mask:""},{phone_code:"41",country_code:"CH",country_name:"Switzerland",phone_mask:"XX XXX XXXX"},{phone_code:"40",country_code:"RO",country_name:"Romania",phone_mask:"XXX XXX XXX"},{phone_code:"39",country_code:"IT",country_name:"Italy",phone_mask:""},{phone_code:"36",country_code:"HU",country_name:"Hungary",phone_mask:"XXX XXX XXX"},{phone_code:"34",country_code:"ES",country_name:"Spain",phone_mask:"XXX XXX XXX"},{phone_code:"33",country_code:"FR",country_name:"France",phone_mask:"X XX XX XX XX"},{phone_code:"32",country_code:"BE",country_name:"Belgium",phone_mask:"XXX XX XX XX"},{phone_code:"31",country_code:"NL",country_name:"Netherlands",phone_mask:"X XX XX XX XX"},{phone_code:"30",country_code:"GR",country_name:"Greece",phone_mask:"XXX XXX XXXX"},{phone_code:"27",country_code:"ZA",country_name:"South Africa",phone_mask:"XX XXX XXXX"},{phone_code:"20",country_code:"EG",country_name:"Egypt",phone_mask:"XX XXXX XXXX"},{phone_code:"7",country_code:"KZ",country_name:"Kazakhstan",phone_mask:"XXX XXX XX XX"},{phone_code:"7",country_code:"RU",country_name:"Russian Federation",phone_mask:"XXX XXX XXXX"},{phone_code:"1",country_code:"PR",country_name:"Puerto Rico",phone_mask:"XXX XXX XXXX"},{phone_code:"1",country_code:"DO",country_name:"Dominican Rep.",phone_mask:"XXX XXX XXXX"},{phone_code:"1",country_code:"CA",country_name:"Canada",phone_mask:"XXX XXX XXXX"},{phone_code:"1",country_code:"US",country_name:"United States of America",phone_mask:"XXX XXX XXXX"}];function Z(o,{$f7:e,$el:t,$on:r,$onMounted:i,$f7router:n,$store:d}){const l=p=>p.country_code!=="GO"&&p.country_code!=="YL",c=Se.filter(l).map(p=>({code:p.country_code,name:p.country_name,flag:se(p.country_code)})).sort((p,X)=>p.name.localeCompare(X.name)).reduce((p,X)=>{const h=p.find(a=>{var f;return((f=a[0])==null?void 0:f.name[0])===X.name[0]});return h?h.push(X):p.push([X]),p},[]);let m;i(()=>s());function s(){m=e.smartSelect.create({el:t.value.find(".smart-select"),valueEl:e.theme==="md"?t.value.find(".smart-select .item-title"):t.value.find(".smart-select .item-input-wrap"),closeOnSelect:!0,searchbar:!0,cssClass:"tds-country-smart-select no-hairlines-between"})}e.on("smartSelectOpen",()=>{e.on("mainButton:click",u)}),e.on("smartSelectClose",()=>{e.off("mainButton:click",u)});function u(){console.log(m)}return function(p){var X=p.$,h=p.$h,a=p.$root,f=p.$f7,v=p.$f7route,b=p.$f7router,g=p.$theme,T=p.$update,B=p.$store;return h`
  <li class="tds-country-smart-select">
    <a class="item-link smart-select">
      <select>
        ${c.map(P=>h`
          <optgroup>
            ${P.map(k=>{var C;return h`
              <option value=${k.code} data-display-as=${k.name} selected=${k.code===((C=B.state.shippingAddress)==null?void 0:C.country_code)}>
                &nbsp;&nbsp;&nbsp;&nbsp;
                ${k.flag}
                &nbsp;&nbsp;&nbsp;&nbsp;
                ${k.name}
              </option>
            `})}
          </optgroup>
        `)}
      </select>
      <div class="item-content">
        <div class="item-inner">
          <div class="item-title if-md">Japan</div>

          <div class="item-title item-label if-ios">${f.$t("shipping:Country")}</div>
          <div class="item-input-wrap if-ios">Japan</div>
        </div>
      </div>
    </a>
  </li>
`}}Z.id="3850d7ac71";Z.style=`
.md .tds-country-smart-select {
  --f7-list-item-padding-horizontal: 20px;
  --f7-list-item-title-font-size: 15px;
  --f7-list-item-title-line-height: 18px;
  --f7-list-item-min-height: 50px;
  --f7-list-item-divider-height: 1px;
  --f7-navbar-height: 0px;
}
.md .tds-country-smart-select .icon-radio {
  display: none;
}
.md .tds-country-smart-select .item-divider:first-child {
  display: none;
}
.md .tds-country-smart-select .list .item-inner:after {
  display: none;
}
.ios {
  --f7-navbar-height: 0px;
}
.navbar-inner .left, .navbar-inner .title {
  display: none;
}
`;function V(o,{$f7:e,$store:t,$emit:r}){function i(){o.product.variants.length>1?e.emit("openQuikeOptionsSheet",o.product):(t.state.cart.push(o.product.variants[0]),e.emit("cartUpdated",t.state.cart),e.timerToast.show(()=>{t.state.cart.pop(),e.emit("cartUpdated",t.state.cart)}))}return function(n){var d=n.$,l=n.$h,c=n.$root,m=n.$f7,s=n.$f7route,u=n.$f7router,p=n.$theme,X=n.$update,h=n.$store;return l`
  <div class="app-product-item card no-shadow no-margin primary-bg-color">
    ${o.product?l`
      <a href="${o.product.id}/" data-transition="f7-parallax">
        <div class="app-product-item__image card-header" style="background-image:url(${o.product.image})">
        </div>

        <div class="app-product-item__title display-flex justify-content-space-between">
          <span class="tds-subtitle-3">${o.product.title}</span>
          <app-number class="tds-subtitle-2" type="currency" value=${o.product.price} currency=${o.product.currency}></app-number>
        </div>
      </a>
      <button class="button button-fill" @click=${i}>${m.$t("productItem:Add")}</button>
    `:l`
      <div class="app-product-item__image card-header skeleton-block skeleton-effect-wave"></div>
      <div class="app-product-item__title display-flex justify-content-space-between skeleton-text skeleton-effect-wave">
        <span>Product Title</span>
        <span>1000</span>
      </div>
      <div class="app-product-item__skeleton-button skeleton-block skeleton-effect-wave"></div>
    `}
  </div>
`}}V.id="245bf9b842";V.style=`
.app-product-item {
  border-radius: var(--f7-card-border-radius);
  box-shadow: var(--f7-card-box-shadow);
  width: calc((100vw - 16px * 3) / 2);
}
.app-product-item__image {
  --f7-card-border-radius: 8px;
  height: calc((100vw - var(--f7-grid-gap) * 3) / 2);
  background-size: cover;
  background-position: center;
  background-color: var(--tg-theme-secondary-bg-color, #F0F0F0);
  color: #fff;
  text-shadow: var(--f7-card-box-shadow);
  font-weight: 500;
  border-radius: var(--f7-card-border-radius);
}
.app-product-item__image::after {
  content: none;
}
.app-product-item__title {
  color: var(--f7-text-color);
  padding-top: 10px;
  padding-bottom: 10px;
}
.app-product-item__title .tds-subtitle-3 {
  max-width: calc(100% - 50px);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.app-product-item__skeleton-button {
  height: var(--f7-button-height);
  border-radius: var(--f7-button-border-radius);
}
`;function j(o,{$ref:e,$f7:t,$store:r,$emit:i,$tick:n}){const d=e(null),l=e([]),c=e(null);t.on("openQuikeOptionsSheet",v=>{d.value=v,l.value=d.value.variants,c.value=l.value.find(b=>b.is_default)||l.value[0],t.sheet.open(".app-quike-options-sheet")});function m(){if(c.value)return c.value.images[0];if(d.value)return d.value.image}function s(){const v=[];return l.value.forEach(b=>{for(const g in b.options)if(b.options.hasOwnProperty(g)){const T=v.findIndex(P=>P.name===g);let B;T<0?(B={name:g,values:new Set},v.push(B)):B=v[T],B.values.add(b.options[g])}}),v.forEach(b=>b.values=[...b.values]),v}function u(v,b){const g=Object.assign({},c.value.options,{[v]:b});c.value=l.value.find(T=>JSON.stringify(T.options)===JSON.stringify(g))}function p(){i("open"),n(h),t.timerToast.close()}function X(){a(),i("close")}function h(){t.on("mainButton:click",f),t.MainButton.setParams({text:t.$t("productItem:Add"),color:Telegram.WebApp.themeParams.button_color,text_color:Telegram.WebApp.button_text_color,is_active:!0,is_visible:!0})}function a(){t.off("mainButton:click",f)}function f(){r.state.cart.push(c.value),t.timerToast.show(()=>{r.state.cart.pop(),r.state.cart.length===0&&i("open"),t.emit("cartUpdated",r.state.cart)}),t.sheet.close(".app-quike-options-sheet"),t.emit("cartUpdated",r.state.cart)}return function(v){var b=v.$,g=v.$h,T=v.$root,B=v.$f7,P=v.$f7route,k=v.$f7router,C=v.$theme,q=v.$update,I=v.$store;return g`
  <div class="app-quike-options-sheet sheet-modal sheet-init" data-backdrop="true" data-swipe-to-close="true" @sheet:open=${p} @sheet:close=${X}>
    ${d.value&&g`
      <div class="sheet-modal-inner">
        <div class="swipe-handler"></div>
        <div class="app-quike-options-sheet__image" style="background-image: url('${m()}');"></div>
        <div class="app-quike-options-sheet__title-row tds-title-2 display-flex justify-content-space-between">
          <div class="app-quike-options-sheet__title">${d.value.title}</div>
          <div class="text-color-primary">
            <app-number type="currency" value=${c.value.price} currency=${c.value.currency}></app-number>
          </div>
        </div>
        <div class="app-quike-options-sheet__subtitle tds-subtitle-2 text-color-gray">${c.value.title}</div>

        <tds-list no-shadow>
          <span slot="header">${B.$t("product:OptionsHeader")}</span>
          ${s().map(S=>g`
            <li slot="items" class="item-content">
              <div class="item-inner item-cell">
                <div class="item-row">
                  ${S.name==="color"&&g`
                  <div class="item-cell">
                    ${S.values.map(x=>g`
                      <tds-radio-color name=${S.name} value=${x} color=${x} checked=${c.value.options[S.name]===x} @change=${()=>u(S.name,x)}></tds-radio-color>
                    `)}
                  </div>
                  `}
                  ${S.name==="size"&&g`
                    <div class="item-cell display-flex flex-wrap justify-content-space-between">
                      ${S.values.map(x=>g`
                        <tds-radio-chip name=${S.name} value=${x} title=${x} checked=${c.value.options[S.name]===x} @change=${()=>u(S.name,x)}></tds-radio-chip>
                      `)}
                    </div>
                  `}
                  ${!["color","size"].includes(S.name)&&g`
                    <div class="item-cell display-flex flex-wrap justify-content-space-between">
                      ${S.values.map(x=>g`
                        <tds-radio-chip name=${S.name} value=${x} title=${x} checked=${c.value.options[S.name]===x} @change=${()=>u(S.name,x)}></tds-radio-chip>
                      `)}
                    </div>
                  `}
                </div>
              </div>
            </li>
          `)}
        </tds-list>

        ${!1}
      </div>
    `}
  </div>
`}}j.id="683048b1f6";j.style=`
.app-quike-options-sheet .sheet-modal-inner {
  padding-top: 18px;
}
.app-quike-options-sheet .app-quike-options-sheet__image {
  position: absolute;
  width: 39px;
  height: 39px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  left: 20px;
  background-color: var(--tg-theme-secondary-bg-color);
}
.app-quike-options-sheet .app-quike-options-sheet__title-row, 
.app-quike-options-sheet .app-quike-options-sheet__subtitle {
  margin: 0 20px;
  margin-left: 69px;
}
.app-quike-options-sheet .swipe-handler {
  position: absolute;
  height: 4px;
  width: 34px;
  background: lightgrey;
  top: 10px;
  left: calc((100% - 34px) / 2);
  border-radius: 2px;
}
`;function J(o){var c,m;const e=(c=o.type)!=null?c:"number",t=(m=o.currency)!=null?m:"TON",r=new Intl.NumberFormat(o.locale,{style:"currency",currency:t}),i=new Intl.NumberFormat(o.locale,{style:"percent"}),n=new Intl.NumberFormat(o.locale,{minimumFractionDigits:2,maximumFractionDigits:2}),d=new Intl.NumberFormat(o.locale,{style:"currency",currency:t,currencyDisplay:"code"}).format(99).indexOf(t)===0?"before":"after";function l(){switch(o.type){case"currency":return t==="TON"?n.format(Number(o.value)):r.format(Number(o.value));case"percent":return i.format(Number(o.value));default:return n.format(Number(o.value))}}return function(s){var u=s.$,p=s.$h,X=s.$root,h=s.$f7,a=s.$f7route,f=s.$f7router,v=s.$theme,b=s.$update,g=s.$store;return p`
  <span class="app-number ${o.class}">
    ${e==="currency"&&t==="TON"&&d==="before"&&p`
      <svg width="0.7em" height="0.7em" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path fill="currentColor" d="M3.82978 0.000106005L20.2979 0C20.8805 0 21.4627 0.0855686 22.0711 0.369223C22.8004 0.709189 23.1872 1.24504 23.4581 1.64132C23.4792 1.67215 23.4989 1.70392 23.5172 1.73643C23.8357 2.30353 24 2.91582 24 3.57447C24 4.20029 23.8511 4.88211 23.5172 5.47637C23.514 5.48213 23.5108 5.48769 23.5075 5.49335L13.1032 23.3657C12.8738 23.7599 12.4515 24.0016 11.9955 24C11.5394 23.9984 11.1188 23.7536 10.8922 23.3578L0.678959 5.52366C0.676023 5.51883 0.673087 5.51401 0.67015 5.50908C0.436411 5.12392 0.074949 4.5283 0.0117166 3.75965C-0.0463774 3.05277 0.112489 2.34453 0.46766 1.73045C0.822831 1.11627 1.35753 0.625298 2.00065 0.324761C2.69023 0.00251672 3.38904 0.000106005 3.82978 0.000106005ZM10.7234 2.55321H3.82978C3.37687 2.55321 3.20301 2.5811 3.08147 2.63793C2.91338 2.71637 2.77223 2.84546 2.67786 3.00862C2.58348 3.1719 2.5408 3.36107 2.55632 3.55045C2.56523 3.65899 2.60949 3.78314 2.87049 4.2136C2.87594 4.22262 2.88129 4.23175 2.88653 4.24087L10.7234 17.9254V2.55321ZM13.2766 2.55321V17.993L21.2949 4.21916C21.3854 4.05474 21.4468 3.81712 21.4468 3.57447C21.4468 3.37764 21.406 3.20671 21.3147 3.03054C21.219 2.89286 21.1607 2.81998 21.1119 2.77006C21.0701 2.72738 21.0379 2.70452 20.9924 2.68334C20.8028 2.59494 20.6088 2.55321 20.2979 2.55321H13.2766Z"/>
      </svg>
    `}

    <span>${l()}</span>

    ${e==="currency"&&t==="TON"&&d==="after"&&p`
      <svg width="0.7em" height="0.7em" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path fill="currentColor" d="M3.82978 0.000106005L20.2979 0C20.8805 0 21.4627 0.0855686 22.0711 0.369223C22.8004 0.709189 23.1872 1.24504 23.4581 1.64132C23.4792 1.67215 23.4989 1.70392 23.5172 1.73643C23.8357 2.30353 24 2.91582 24 3.57447C24 4.20029 23.8511 4.88211 23.5172 5.47637C23.514 5.48213 23.5108 5.48769 23.5075 5.49335L13.1032 23.3657C12.8738 23.7599 12.4515 24.0016 11.9955 24C11.5394 23.9984 11.1188 23.7536 10.8922 23.3578L0.678959 5.52366C0.676023 5.51883 0.673087 5.51401 0.67015 5.50908C0.436411 5.12392 0.074949 4.5283 0.0117166 3.75965C-0.0463774 3.05277 0.112489 2.34453 0.46766 1.73045C0.822831 1.11627 1.35753 0.625298 2.00065 0.324761C2.69023 0.00251672 3.38904 0.000106005 3.82978 0.000106005ZM10.7234 2.55321H3.82978C3.37687 2.55321 3.20301 2.5811 3.08147 2.63793C2.91338 2.71637 2.77223 2.84546 2.67786 3.00862C2.58348 3.1719 2.5408 3.36107 2.55632 3.55045C2.56523 3.65899 2.60949 3.78314 2.87049 4.2136C2.87594 4.22262 2.88129 4.23175 2.88653 4.24087L10.7234 17.9254V2.55321ZM13.2766 2.55321V17.993L21.2949 4.21916C21.3854 4.05474 21.4468 3.81712 21.4468 3.57447C21.4468 3.37764 21.406 3.20671 21.3147 3.03054C21.219 2.89286 21.1607 2.81998 21.1119 2.77006C21.0701 2.72738 21.0379 2.70452 20.9924 2.68334C20.8028 2.59494 20.6088 2.55321 20.2979 2.55321H13.2766Z"/>
      </svg>
    `}

    ${o.strikethrough&&p`
      <div class="strikethrough-line"></div>
    `}
  </span>
`}}J.id="8976459392";J.style=`
.app-number {
  position: relative;
}
.app-number svg {
  margin-left: 0.2em;
  margin-right: 0;
}
.app-number svg:first-child {
  margin-left: 0;
  margin-right: 0.2em;
}
.app-number .strikethrough-line {
  position: absolute;
  width: 100%;
  height: 0.07em;
  background-color: currentColor;
  top: 50%;
  right: 0;
  border: 0.05em solid white;
  pointer-events: none;
}
`;function ie(o){return function(e){var t=e.$,r=e.$h,i=e.$root,n=e.$f7,d=e.$f7route,l=e.$f7router,c=e.$theme,m=e.$update,s=e.$store;return r`
  <li>
    <a class="item-link smart-select smart-select-init" data-open-in="sheet" data-close-on-select="true" data-sheet-backdrop="true">
      <select name=${o.option.name}>
        ${o.option.values.map((u,p)=>r`
          <option value=${u} selected=${p===0}>${u}</option>
        `)}
      </select>
      <div class="item-content">
        <div class="item-inner">
          <div class="item-title">${o.option.name}</div>
        </div>
      </div>
    </a>
  </li>
`}}ie.id="f5f63a6c13";A.registerComponent("tds-footer",F);A.registerComponent("tds-list",G);A.registerComponent("tds-toggle",z);A.registerComponent("tds-swiper",U);A.registerComponent("tds-radio-color",H);A.registerComponent("tds-radio-image",R);A.registerComponent("tds-radio-chip",K);A.registerComponent("tds-country-smart-select",Z);A.registerComponent("app-product-item",V);A.registerComponent("app-quike-options-sheet",j);A.registerComponent("app-number",J);A.registerComponent("app-option",ie);A.use([ce,de,le,pe,ue,me,Xe,he,_e,ve,ye,fe,ge,ke,be]);function Y(o,{$store:e,$f7:t,$on:r,$f7router:i}){e.dispatch("getProducts"),r("pageBeforeIn",()=>{n(),t.on("cartUpdated",c)});function n(){e.state.cart.length>0?(t.on("mainButton:click",l),t.MainButton.setParams({text:t.$t("mainButton:Cart"),color:"#55BE61",text_color:Telegram.WebApp.button_text_color,is_active:!0,is_visible:!0})):(d(),t.MainButton.setParams({is_visible:!1}))}function d(){t.off("mainButton:click",l)}function l(){i.navigate("/cart/")}function c(m){m.length>0?!Telegram.WebApp.MainButton.isVisible&&n():(Telegram.WebApp.MainButton.isVisible&&d(),t.MainButton.setParams({is_visible:!1}))}return r("pageBeforeOut",()=>{d(),t.off("cartUpdated",c),t.timerToast.close()}),function(m){var s=m.$,u=m.$h,p=m.$root,X=m.$f7,h=m.$f7route,a=m.$f7router,f=m.$theme,v=m.$update,b=m.$store;return u`
  <div class="page primary-bg-color" data-name="products">
    <div class="page-content">
      ${b.getters.products.value.length>0?u`
        <div class="block products-grid">
          ${b.getters.products.value.map(g=>u`
            <app-product-item product=${g}></app-product-item>
          `)}
        </div>
      `:u`
        <div class="block products-grid">
          ${[1,2,3,4].map(()=>u`
            <app-product-item></app-product-item>
          `)}
        </div>
      `}
    </div>

    <app-quike-options-sheet @open=${d} @close=${n}></app-quike-options-sheet>
  </div>
`}}Y.id="97ed3fe3e2";Y.style=`
.products-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  grid-auto-flow: row;
  gap: var(--f7-grid-gap) var(--f7-grid-gap);
}
`;function Q(o,{$store:e,$f7:t,$el:r,$ref:i,$on:n}){const d=i(null),l=i([]),c=i(null);n("pageBeforeIn",async()=>{const X=o.id;d.value=await e.dispatch("getProduct",X),l.value=d.value.variants,c.value=l.value.find(h=>h.is_default)||l.value[0],t.on("mainButton:click",p),t.MainButton.setParams({text:t.$t("productItem:Add"),color:Telegram.WebApp.themeParams.button_color,text_color:Telegram.WebApp.button_text_color,is_active:!0,is_visible:!0})});function m(){return c.value?c.value.images:d.value?[d.value.image]:[]}function s(){const X=[];return l.value.forEach(h=>{for(const a in h.options)if(h.options.hasOwnProperty(a)){const f=X.findIndex(b=>b.name===a);let v;f<0?(v={name:a,values:new Set},X.push(v)):v=X[f],v.values.add(h.options[a])}}),X.forEach(h=>h.values=[...h.values]),X}function u(X,h){const a=Object.assign({},c.value.options,{[X]:h});c.value=l.value.find(f=>JSON.stringify(f.options)===JSON.stringify(a))}function p(){e.state.cart.push(c.value),t.emit("cartUpdated",e.state.cart),t.timerToast.show(()=>{e.state.cart.pop(),t.emit("cartUpdated",e.state.cart)})}return n("pageBeforeOut",()=>{t.off("mainButton:click",p),t.timerToast.close()}),function(X){var h=X.$,a=X.$h,f=X.$root,v=X.$f7,b=X.$f7route,g=X.$f7router,T=X.$theme,B=X.$update,P=X.$store;return a`
  <div class="page" data-name="product">
    <div class="page-content position-relative">
      <tds-swiper images=${m()}></tds-swiper>

      <tds-list class="media-list">
        <li slot="items" class="item-content">
          <div class="item-inner">
            <div class="item-title-row">
              <div class="item-title tds-text-color">
                ${d.value?a`
                  <span class="tds-title-2">${d.value.title}</span>
                `:a`
                  <span class="tds-title-2 skeleton-text skeleton-effect-wave">Product Title</span>
                `}
              </div>
              <div class="item-after">
                <span class="tds-title-2 tds-button-color">
                  ${c.value?a`
                    <app-number type="currency" value=${c.value.price} currency=${c.value.currency}></app-number>
                  `:a`
                    <span class="skeleton-text skeleton-effect-wave">1000</span>
                  `}
                </span>
              </div>
            </div>
            <div class="item-subtitle display-flex justify-content-space-between tds-hint-color tds-headline-2">
              ${c.value?a`
                <span>${c.value.title}</span>
              `:a`
                <span class="skeleton-text skeleton-effect-wave">Variant Title</span>
              `}
            </div>
            <div class="item-text tds-text ${d.value?"tds-text-color":"skeleton-text skeleton-effect-wave"}" innerHTML=${d.value?d.value.description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, at dolor eius, assumenda ducimus eaque placeat consequuntur molestias dicta repellat sed facilis dolorum cumque consectetur, alias eligendi a quos asperiores!"}></div>
          </div>
        </li>
      </tds-list>

      ${s().map(k=>a`
        <tds-list>
          <span slot="header">${v.$t("product:"+k.name)}</span>
          <li slot="items" class="item-content">
            <div class="item-inner item-cell">
              <div class="item-row">
                ${k.name==="color"&&a`
                  <div class="item-cell">
                    ${k.values.map(C=>a`
                      <tds-radio-color name=${k.name} value=${C} color=${C} checked=${c.value.options[k.name]===C} @change=${()=>u(k.name,C)}></tds-radio-color>
                    `)}
                  </div>
                `}
                ${k.name==="size"&&a`
                  <div class="item-cell display-flex flex-wrap justify-content-space-between">
                    ${k.values.map(C=>a`
                      <tds-radio-chip name=${k.name} value=${C} title=${C} checked=${c.value.options[k.name]===C} @change=${()=>u(k.name,C)}></tds-radio-chip>
                    `)}
                  </div>
                `}
                ${!["color","size"].includes(k.name)&&a`
                  <div class="item-cell display-flex flex-wrap justify-content-space-between">
                    ${k.values.map(C=>a`
                      <tds-radio-chip name=${k.name} value=${C} title=${C} checked=${c.value.options[k.name]===C} @change=${()=>u(k.name,C)}></tds-radio-chip>
                    `)}
                  </div>
                `}
              </div>
            </div>
          </li>
        </tds-list>
      `)}

      ${!1}
    </div>
  </div>
`}}Q.id="3fd66916fd";Q.style=`
.page[data-name="product"] {
  --f7-list-item-text-max-lines: 100;
}
`;function ee(o,{$ref:e,$f7:t,$on:r,$f7router:i,$el:n,$:d,$store:l}){r("pageBeforeIn",()=>{t.form.fillFromData(n.value.find("form")[0],l.state.shippingAddress),t.on("mainButton:click",c),t.MainButton.setParams({text:t.$t("mainButton:Done"),color:Telegram.WebApp.themeParams.button_color,text_color:Telegram.WebApp.themeParams.button_text_color,is_active:!0,is_visible:!0})});function c(){m(),i.back()}function m(){s(),l.state.shippingAddress=t.form.convertToData(n.value.find("form")[0]),l.state.shippingAddress.country_code=n.value.find("select").val(),n.value.find(".toggle input")[0].checked?localStorage.setItem("shipping_address",JSON.stringify(l.state.shippingAddress)):localStorage.removeItem("shipping_address")}function s(){n.value.find("input[required][validate]").each(u=>{if(!t.input.validate(u))throw Telegram.WebApp.isVersionAtLeast("6.1")&&(d(u).addClass("shake"),t.utils.nextTick(()=>d(u).removeClass("shake"),400),Telegram.WebApp.HapticFeedback.notificationOccurred("error")),new Error("Fill all required validate fields")})}return r("pageBeforeOut",()=>{t.off("mainButton:click",c)}),function(u){var p=u.$,X=u.$h,h=u.$root,a=u.$f7,f=u.$f7route,v=u.$f7router,b=u.$theme,g=u.$update,T=u.$store;return X`
  <div class="page" data-name="shipping">
    <form class="page-content">
      <tds-list class="inline-labels no-chevron">
        <span slot="header">${a.$t("shipping:AddressTitle")}</span>
        <li slot="items" class="item-content ${a.device.ios&&"item-input"}">
          <div class="item-inner">
            <div class="item-title item-label if-ios">${a.$t("shipping:Address1Ios")}</div>
            <div class="item-input-wrap">
              <input type="text" name="street_line1" placeholder="${a.$t(a.theme==="md"?"shipping:Address1":"shipping:AddressIos")}" required validate />
            </div>
          </div>
        </li>
        <li slot="items" class="item-content ${a.device.ios&&"item-input"}">
          <div class="item-inner">
            <div class="item-title item-label if-ios">${a.$t("shipping:Address2Ios")}</div>
            <div class="item-input-wrap">
              <input type="text" name="street_line2" placeholder="${a.$t(a.theme==="md"?"shipping:Address2":"shipping:AddressIos")}" />
            </div>
          </div>
        </li>
        <li slot="items" class="item-content ${a.device.ios&&"item-input"}">
          <div class="item-inner">
            <div class="item-title item-label if-ios">${a.$t("shipping:City")}</div>
            <div class="item-input-wrap">
              <input type="text" name="city" placeholder="${a.$t("shipping:City")}" required validate />
            </div>
          </div>
        </li>
        <li slot="items" class="item-content ${a.device.ios&&"item-input"}">
          <div class="item-inner">
            <div class="item-title item-label if-ios">${a.$t("shipping:State")}</div>
            <div class="item-input-wrap">
              <input type="text" name="state" placeholder="${a.$t("shipping:State")}" required validate />
            </div>
          </div>
        </li>
        <tds-country-smart-select slot="items"></tds-country-smart-select>
        <li slot="items" class="item-content ${a.device.ios&&"item-input"}">
          <div class="item-inner">
            <div class="item-title item-label if-ios">${a.$t("shipping:Postcode")}</div>
            <div class="item-input-wrap">
              <input type="text" name="post_code" placeholder="${a.$t("shipping:Postcode")}" required validate />
            </div>
          </div>
        </li>
      </tds-list>

      <tds-list class="inline-labels">
        <span slot="header">${a.$t("shipping:ReciverTitle")}</span>
        <li slot="items" class="item-content ${a.device.ios&&"item-input"}">
          <div class="item-inner">
            <div class="item-title item-label if-ios">${a.$t("shipping:NameIos")}</div>
            <div class="item-input-wrap">
              <input type="text" name="full_name" placeholder="${a.$t(a.theme==="md"?"shipping:FullName":"shipping:FullNameIos")}" required validate />
            </div>
          </div>
        </li>
        <li slot="items" class="item-content ${a.device.ios&&"item-input"}">
          <div class="item-inner">
            <div class="item-title item-label if-ios">${a.$t("shipping:PhoneIos")}</div>
            <div class="item-input-wrap">
              <input type="tel" name="phone_number" placeholder="${a.$t(a.theme==="md"?"shipping:Phone":"shipping:PhoneIos")}" required validate />
            </div>
          </div>
        </li>
      </tds-list>

      <tds-list class="simple-list">
        <li slot="items">
          <span>${a.$t("shipping:SaveShippingInfo")}</span>
          <tds-toggle id="save-data"></tds-toggle>
        </li>
      </tds-list>

      <tds-footer>
        ${a.$t("shipping:SaveShippingInfoDescription")}
      </tds-footer>

      ${!1}
    </form>
  </div>
`}}ee.id="fec0c64220";ee.style=`
.shake {
  animation: shake 0.4s cubic-bezier(.36,.07,.19,.97) both;
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
  perspective: 1000px;
}

@keyframes shake {
  10%, 90% {
    transform: translate3d(-1px, 0, 0);
  }

  20%, 80% {
    transform: translate3d(2px, 0, 0);
  }

  30%, 50%, 70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%, 60% {
    transform: translate3d(4px, 0, 0);
  }
}
`;function te(o,{$f7:e,$on:t,$ref:r,$store:i,$f7router:n,$request:d,$theme:l,$:c,$el:m}){const s=i.getters.shippingAddress,u=i.getters.cart,p=r(null),X=Math.trunc((Date.now()-new Date("2022-01-01"))/100),h=!1,a=r(!1);let f;t("pageBeforeIn",()=>{e.on("mainButton:click",g),e.MainButton.setParams({text:e.$t("mainButton:Pay",{total:I()}),color:"#55BE61",text_color:Telegram.WebApp.button_text_color,is_active:!s.value,is_visible:!0}),l.ios&&c(".navbars").remove()}),t("pageAfterIn",()=>{s.value&&v()});async function v(){const _=b(),{data:w}=await e.request.postJSON("/orders/shipping",_);p.value=w[0],e.MainButton.setParams({text:e.$t("mainButton:Pay",{total:I()}),is_active:!0})}function b(){var y,M;const _={external_id:String(X),items:i.getters.cart.value.map($=>({product_id:$.product.id,variant_id:$.variant.id,quantity:$.quantity})),shipping_id:(y=p.value)==null?void 0:y.id,shipping_address:i.state.shippingAddress},w=((M=e.form.convertToData(m.value.find("form")[0]))==null?void 0:M.code)||(f==null?void 0:f.promotion_code);return w&&(_.promotion_code=w),_}async function g(){if(!s.value)return n.navigate("/shipping/");try{await T(),Telegram.WebApp.MainButton.showProgress();const _=b(),{data:w}=await e.request.postJSON("/orders",_)}catch(_){console.error(_)}finally{Telegram.WebApp.MainButton.hideProgress()}}function T(){return new Promise((_,w)=>{const y=[{id:"continue",type:"default",text:e.$t("checkout:ConfirmDialogButton")},{type:"cancel"}];l.ios&&y.reverse(),Telegram.WebApp.showPopup({title:e.$t("checkout:ConfirmDialogTitle"),message:e.$t("checkout:ConfirmDialogText",{orderId:X,total:I()}),buttons:y},M=>{M==="continue"?_():w()})})}function B(){var _;return s.value?`${s.value.street_line1} ${(_=s.value.street_line2)!=null?_:""}, ${s.value.city}, ${s.value.state}, ${s.value.country_code}, ${s.value.post_code}`:""}function P(){return u.value.reduce((_,w)=>_+=w.variant.price*w.quantity,0)}function k(){var w,y;const _=(y=(w=Telegram.WebApp.initDataUnsafe)==null?void 0:w.user)!=null&&y.is_premium?-.05:0;return 0}async function C(_){_.preventDefault();const{code:w}=e.form.convertToData(_.target),y=b();try{a.value=!0;const{data:M}=await e.request.postJSON("/orders/discount",y);f=M}catch(M){switch(M.message){case"Not Found":Telegram.WebApp.showAlert(e.$t("checkout:ErrorPromoCodeInvalid"));break;case"Promo code has expired":Telegram.WebApp.showAlert(e.$t("checkout:ErrorPromoCodeExpired"));break;case"Promo code already used":Telegram.WebApp.showAlert(e.$t("checkout:ErrorPromoCodeUsed"));break;case"Invalid promo code":Telegram.WebApp.showAlert(e.$t("checkout:ErrorPromoCodeInvalid"));break;default:Telegram.WebApp.showAlert(e.$t("checkout:ErrorPromoCodeInvalid")),console.error(M.message)}}finally{a.value=!1}}function q(){if(!f)return 0;if(f.type==="amount")return f.value*-1;if(f.type==="percent")return P()*f.value*-1}function I(){var _,w;return P()+q()+((w=(_=p.value)==null?void 0:_.cost)!=null?w:0)}function S(){return I()*i.getters.tonusd.value}function x(){const _=u.value.sort((w,y)=>y.variant.price*y.quantity-w.variant.price*w.quantity)[0];return _==null?void 0:_.variant.images[0]}return t("pageBeforeOut",()=>{e.off("mainButton:click",g)}),function(_){var w=_.$,y=_.$h,M=_.$root,$=_.$f7,et=_.$f7route,tt=_.$f7router,L=_.$theme,ot=_.$update,nt=_.$store;return y`
  <div class="page" data-name="checkout">
    <div class="page-content">
      <tds-list class="order media-list no-hairlines-between-md">
        <li slot="items">
          <div class="item-content" style="padding-left: var(--f7-list-item-padding-vertical)">
            <div class="item-media">
              <img class="lazy order-img" data-src=${x()} />
            </div>
            <div class="item-inner justify-content-flex-start no-hairlines" style="margin-left: var(--f7-list-item-padding-vertical)">
              <div class="item-title"><b>Order #${X}</b></div>
              <div class="item-subtitle">Amazing merch of TON project</div>
              <div class="item-text no-margin-top tds-hint-color">TON Merch</div>
            </div>
          </div>
        </li>

        <li slot="items" class="item-divider if-md">
          <div></div> <!-- Shadow  -->
          <div></div> <!-- Shadow  -->
        </li>

        ${u.value.map(N=>y`
          <li slot="items" class="order-item">
            <div class="item-content">
              <div class="item-inner">
                <div class="item-title-row">
                  <div class="item-title tds-hint-color">${N.product.title} (${N.variant.title}) x${N.quantity}</div>
                  <div class="item-after tds-hint-color">
                    <app-number type="currency" value=${N.variant.price*N.quantity} currency="TON"></app-number>
                  </div>
                </div>
              </div>
            </div>
          </li>
        `)}

        ${h&&y`
          <li slot="items" class="order-item ${a.value&&"disabled"}">
            ${f?y`
              <div class="item-content item-input">
                <div class="item-inner">
                  <div class="item-title-row">
                    <div class="item-title tds-hint-color">${$.$t("checkout:Discount")}</div>
                    <div class="item-after tds-hint-color">
                      <app-number type="currency" value=${q()} currency="USD"></app-number>
                    </div>
                  </div>
                </div>
              </div>
              `:y`
              <form class="item-content item-input" @submit=${C}>
                <div class="item-inner" style="padding-top: 3px; padding-bottom: 3px;">
                  <div class="item-title-row">
                    <div class="item-input-wrap">
                      <input type="text" name="code" maxlength="6" placeholder="${$.$t("checkout:PromoCode")}" required validate pattern="([A-z]|[0-9]){6}" autocomplete="off" />
                    </div>
                    <div class="item-after">
                      ${a.value?y`
                        <span class="preloader color-primary" style="width: 24px; height: 24px"></span>
                      `:y`
                        <button type="submit" class="button buttom-small">${$.$t("checkout:Apply")}</button>
                      `}
                    </div>
                  </div>
                </div>
              </form>
            `}
          </li>
        `}

        ${k()<0&&y`
          <li slot="items" class="order-item">
            <div class="item-content">
              <div class="item-inner">
                <div class="item-title-row">
                  <div class="item-title tds-hint-color premium">Premium (-5%)</div>
                  <div class="item-after tds-hint-color">
                    <app-number type="currency" value=${k()} currency="USD"></app-number>
                  </div>
                </div>
              </div>
            </div>
          </li>
        `}

        ${s.value&&y`
          <li slot="items" class="order-item">
            <div class="item-content">
              <div class="item-inner">
                <div class="item-title-row">
                  <div class="item-title tds-hint-color">${$.$t("checkout:Delivery")}</div>
                  <div class="item-after tds-hint-color">
                    ${p.value?y`
                      <app-number type="currency" value=${p.value.cost} currency=${p.value.currency}></app-number>
                    `:y`
                      <span class="skeleton-text skeleton-effect-wave">10000</span>
                    `}
                  </div>
                </div>
              </div>
            </div>
          </li>
        `}

        <li slot="items" class="order-total">
          <div class="item-content">
            <div class="item-inner">
              <div class="item-title-row">
                <div class="item-title"><b>${$.$t("checkout:Total")}</b></div>
                <div class="item-after display-block text-align-right">
                  <b class="display-block">
                    <app-number type="currency" value=${I()} currency="TON"></app-number>
                  </b>
                  <div class="margin-top-half tds-hint-color">
                    ≈ <app-number type="currency" value=${S()} currency="USD"></app-number>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>
      </tds-list>

      ${s.value&&y`
        <tds-list class="${$.theme==="md"&&"media-list"}">
          <li slot="items">
            <a href="#" class="item-link item-content ${$.theme==="md"&&"no-chevron"}">
              ${L.md&&y`
                <div class="item-media">
                  <img src="/assets/icons/payment.svg" />
                </div>
              `}
              <div class="item-inner">
                <div class="item-title if-ios">${$.$t("checkout:PaymentMethodIos")}</div>
                <div class="item-after if-ios">TON Wallet</div>
                <div class="item-title if-md">TON Wallet</div>
                <div class="item-text tds-hint-color if-md">${$.$t("checkout:PaymentMethod")}</div>
              </div>
            </a>
          </li>

          <li slot="items">
            <a href="/shipping/" class="item-link item-content ${$.theme==="md"&&"no-chevron"}">
              ${L.md&&y`
                <div class="item-media">
                  <img src="/assets/icons/map_point.svg" />
                </div>
              `}
              <div class="item-inner">
                <div class="item-title flex-shrink-0 if-ios">${$.$t("checkout:ShippingAddressIos")}</div>
                <div class="item-after flex-shrink-1 if-ios" style="white-space: var(--f7-list-item-title-white-space); overflow: hidden; text-overflow: ellipsis;">${B()}</div>
                <div class="item-title if-md">${B()}</div>
                <div class="item-text tds-hint-color if-md">${$.$t("checkout:ShippingAddress")}</div>
              </div>
            </a>
          </li>

          <li slot="items">
            <a href="/shipping/" class="item-link item-content ${$.theme==="md"&&"no-chevron"}">
              ${L.md&&y`
                <div class="item-media">
                  <img src="/assets/icons/user.svg" />
                </div>
              `}
              <div class="item-inner">
                <div class="item-title if-ios">${$.$t("shipping:NameIos")}</div>
                <div class="item-after if-ios">${s.value.full_name}</div>
                <div class="item-title if-md">${s.value.full_name}</div>
                <div class="item-text tds-hint-color if-md">${$.$t("shipping:Name")}</div>
              </div>
            </a>
          </li>

          <li slot="items">
            <a href="/shipping/" class="item-link item-content ${$.theme==="md"&&"no-chevron"}">
              ${L.md&&y`
                <div class="item-media">
                  <img src="/assets/icons/phone.svg" />
                </div>
              `}
              <div class="item-inner">
                <div class="item-title if-ios">${$.$t("shipping:PhoneIos")}</div>
                <div class="item-after if-ios">${s.value.phone_number}</div>
                <div class="item-title if-md">${s.value.phone_number}</div>
                <div class="item-text tds-hint-color if-md">${$.$t("shipping:Phone")}</div>
              </div>
            </a>
          </li>
        </tds-list>
      `}

      ${!1}
    </div>
  </div>
`}}te.id="49ed534882";te.style=`
.md .order .order-img {
  width: 100px;
  height: 100px;
  border-radius: 8px;
}
.ios .order .order-img {
  width: 128px;
  height: 128px;
  border-radius: 4px;
}
[data-name="checkout"] .order .premium {
  position: relative;
  overflow: visible;
  padding-left: 23px;
}
[data-name="checkout"] .order .premium:before {
  content: '';
  width: 20px;
  height: 20px;
  background-image: url(/assets/icons/premium_star.png);
  background-size: cover;
  background-position: center;
  display: block;
  position: absolute;
  left: 0;
  top: 0;
}
[data-name="checkout"] .order-item {
  --f7-list-media-item-title-font-weight: var(--f7-list-item-after-font-weight);
  --f7-list-item-title-text-color: var(--f7-list-item-after-text-color);
}
[data-name="checkout"] .order-item .item-inner:after, .no-hairlines.item-inner:after {
  content: none;
}
[data-name="checkout"] .order-item:nth-last-child(-n+2) .item-inner:after {
  content: '';
}
[data-name="checkout"] .order-total {
  --f7-list-item-after-text-color: var(--f7-list-item-title-text-color);
  --f7-list-item-after-font-weight: var(--f7-list-media-item-title-font-weight);
}
[data-name="checkout"] .order-item:nth-child(-n+2) .item-inner:before {
  content: '';
  position: absolute;
  background-color: var(--f7-list-item-border-color);
  display: block;
  z-index: 15;
  top: 0;
  right: auto;
  bottom: auto;
  left: 0;
  height: 1px;
  width: 100%;
  transform-origin: 50% 100%;
  transform: scaleY(calc(1 / var(--f7-device-pixel-ratio)));
}
`;function oe(o,{$f7:e,$on:t,$store:r,$f7router:i,$update:n,$theme:d}){t("pageBeforeIn",()=>{e.on("mainButton:click",l),e.MainButton.setParams({text:e.$t("mainButton:Checkout"),color:"#55BE61",text_color:Telegram.WebApp.button_text_color,is_active:!0,is_visible:!0})});function l(){i.navigate("/checkout/")}function c(s){return s.variant.images[0]}function m(s,u){if(u>0)r.state.cart.push(s.variant);else{const p=r.state.cart.findLastIndex(X=>X.sku===s.variant.sku);r.state.cart.splice(p,1)}r.state.cart.length>0?n():i.navigate("/products/"),e.emit("cartUpdated",r.state.cart),Telegram.WebApp.HapticFeedback.impactOccurred("light")}return t("pageBeforeOut",()=>{e.off("mainButton:click",l)}),function(s){var u=s.$,p=s.$h,X=s.$root,h=s.$f7,a=s.$f7route,f=s.$f7router,v=s.$theme,b=s.$update,g=s.$store;return p`
  <div class="page" data-name="cart">
    <div class="page-content">
      <tds-list class="cart media-list no-hairlines-between">
        ${g.getters.cart.value.map(T=>p`
          <li slot="items" class="order-item">
            <div class="item-content ${v.ios&&"margin-right"}">
              <div class="item-media">
                <img src=${c(T)} width="38" height="38"/>
              </div>
              <div class="item-inner">
                <div class="item-title tds-headline">${T.product.title} <span class="text-color-primary">x${T.quantity}</span></div>
                <div class="item-subtitle tds-caption text-color-gray">
                  ${T.variant.title}
                </div>
              </div>
              <div class="stepper stepper-fill stepper-small stepper-raised">
                <div class="stepper-button-minus" @click=${()=>m(T,-1)}></div>
                <div class="stepper-button-plus" @click=${()=>m(T,1)}></div>
              </div>
            </div>
          </li>
        `)}
      </tds-list>

      ${!1}
    </div>
  </div>
`}}oe.id="f10bddd052";oe.style=`
.md .cart {
  --f7-list-item-padding-horizontal: 15px !important;
}

.md .cart .item-media img {
  border-radius: 4px;
  overflow: hidden;
}

.md .cart .stepper {
  margin-right: var(--f7-list-item-padding-horizontal) !important;
}
`;var xe=[{path:"/",redirect:"/products/"},{path:"/products/",component:Y,routes:[{path:":id/",component:Q}]},{path:"/shipping/",async({resolve:o,reject:e}){this.app.store.state.cart.length===0?(e(),this.navigate("/products/")):o({component:ee})}},{path:"/checkout/",async({resolve:o,reject:e}){this.app.store.state.cart.length===0?(e(),this.navigate("/products/")):o({component:te})}},{path:"/cart/",async({resolve:o,reject:e}){this.app.store.state.cart.length===0?(e(),this.navigate("/products/")):o({component:oe})}}];const Be=$e({state:{shippingAddress:null,products:[],variants:[],cart:[],tonusd:1},getters:{shippingAddress({state:o}){return o.shippingAddress},products({state:o}){return o.products},product({state:o}){return e=>o.products.find(t=>t.id==e)},productByVariantId({state:o}){return e=>o.products.find(t=>t.variants.some(r=>r.id===e))},cart({state:o}){return o.cart.reduce((e,t)=>{const r=e.find(i=>i.variant.sku===t.sku);return r?r.quantity++:e.push({variant:t,product:o.products.find(i=>i.id===t.product_id),quantity:1}),e},[])},tonusd({state:o}){return o.tonusd}},actions:{init({state:o,dispatch:e}){const t=localStorage.getItem("shipping_address");t&&(o.shippingAddress=JSON.parse(t)),setInterval(()=>e("getTonUsd"),6e4*5),e("getTonUsd")},async getProducts({state:o}){const{data:e}=await D.json("/products");o.products=e},async getProduct({state:o},e){let t=o.products.find(r=>r.id===e);if(!t){const{data:r}=await D.json(`/products/${e}`);t=r,o.products.push(t)}return t},async getProductVariants({state:o},e){let t=o.variants.filter(r=>r.product_id===e);if(t.length===0){const{data:r}=await D.json(`/products/${e}/variants`);t=r,o.variants.push(t)}return t},async getTonUsd({state:o}){const{data:e}=await D.json("https://api.coingecko.com/api/v3/simple/price?ids=the-open-network&vs_currencies=usd");o.tonusd=e["the-open-network"].usd}}});function ne(){const o=/^test-tonmerch\.web\.app$/.test(window.location.host)?"https://t.me/tonmerch_test_bot":"https://t.me/tonmerch_bot";return function(e){var t=e.$,r=e.$h,i=e.$root,n=e.$f7,d=e.$f7route,l=e.$f7router,c=e.$theme,m=e.$update,s=e.$store;return r`
  <div id="app">
    <div class="view view-main view-init safe-areas"
      data-url="/products/"
      data-browser-history="true"
      data-browser-history-separator=""
      data-browser-history-root=${window.location.origin}
    ></div>

    <div class="lottie-popup popup popup-init popup-tablet-fullscreen display-flex justify-content-center align-items-center">
      <div class="text-align-center">
        <tgs-player data-name="utya" src="/assets/lottie/utya_unacceptable.tgs" width="100" height="100"></tgs-player>
        <div class="block">
          <span innerHTML=${n.$t("app:UnacceptablePlatform",{link:o})}></span>
        </div>
      </div>
    </div>
  </div>
`}}ne.id="aff69c9482";ne.style=`
.lottie-popup {
  background: var(--tds-theme-bg-color);
}
`;const Me={name:"WebAppBackButton",create(){Telegram.WebApp.isVersionAtLeast("6.1")&&Telegram.WebApp.BackButton.onClick(()=>{this.view.main.history.length>1&&this.view.main.router.back()})},on:{viewInit:function(o){o.router.clearPreviousHistory()},routeChanged:function(o,e,t){Telegram.WebApp.isVersionAtLeast("6.1")&&(t.history.length>=1&&!Telegram.WebApp.BackButton.isVisible&&Telegram.WebApp.BackButton.show(),t.history.length===1&&Telegram.WebApp.BackButton.isVisible&&Telegram.WebApp.BackButton.hide())}}};A.use(Me);const Pe={name:"WebAppClosingConfirmation",on:{cartUpdated:function(o){Telegram.WebApp.isVersionAtLeast("6.1")&&(o.length>0?!Telegram.WebApp.isClosingConfirmationEnabled&&Telegram.WebApp.enableClosingConfirmation():Telegram.WebApp.isClosingConfirmationEnabled&&Telegram.WebApp.disableClosingConfirmation())}}};A.use(Pe);const Ie={name:"WebAppMainButton",create(){Telegram.WebApp.MainButton.onClick(()=>this.emit("mainButton:click"))},instance:{MainButton:{setParams(o){Telegram.WebApp.MainButton.setParams(o)}}}};A.use(Ie);let W,E;const Ne={name:"TimerToast",create(){W=this},instance:{timerToast:{show(o,e=5e3){let t;E=W.toast.create({closeTimeout:e,closeButton:!0,render:()=>`
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
                  <span style="margin-left: 7px;">${W.$t("product:ToastText")}</span>
                </div>
                <a class="toast-button button color-primary display-flex align-items-center">
                  <svg width="19" height="19" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.01299 15.25C4.59877 15.25 4.26299 15.5858 4.26299 16C4.26299 16.4142 4.59877 16.75 5.01299 16.75V15.25ZM4 7.45205L3.51362 6.88115C3.34636 7.02365 3.25 7.23232 3.25 7.45205C3.25 7.67178 3.34636 7.88046 3.51362 8.02296L4 7.45205ZM8.53833 4.5709C8.85363 4.30228 8.89147 3.82892 8.62285 3.51362C8.35423 3.19832 7.88087 3.16047 7.56557 3.4291L8.53833 4.5709ZM7.56557 11.475C7.88087 11.7436 8.35423 11.7058 8.62285 11.3905C8.89147 11.0752 8.85363 10.6018 8.53833 10.3332L7.56557 11.475ZM16.25 11.726C16.25 13.6535 14.6395 15.25 12.6104 15.25V16.75C15.4299 16.75 17.75 14.5194 17.75 11.726H16.25ZM12.6104 8.20205C14.6395 8.20205 16.25 9.79854 16.25 11.726H17.75C17.75 8.93262 15.4299 6.70205 12.6104 6.70205V8.20205ZM12.6104 15.25H5.01299V16.75H12.6104V15.25ZM12.6104 6.70205H4V8.20205H12.6104V6.70205ZM4.48638 8.02296L8.53833 4.5709L7.56557 3.4291L3.51362 6.88115L4.48638 8.02296ZM3.51362 8.02296L7.56557 11.475L8.53833 10.3332L4.48638 6.88115L3.51362 8.02296Z" fill="currentColor"/>
                  </svg>
                  <span style="margin-left: 7px;">${W.$t("product:ToastButtonText")}</span>
                </a>
              </div>
            </div>
          `,on:{closeButtonClick:()=>{Telegram.WebApp.HapticFeedback.impactOccurred("light"),o==null||o()},close:i=>clearInterval(t)}}).open(),Telegram.WebApp.HapticFeedback.impactOccurred("light");let r=4;t=setInterval(()=>{r>=0?document.querySelector("tspan").innerHTML=r--:clearInterval(t)},1e3)},close(){E==null||E.close()}}}};A.use(Ne);const Le={Total:"Total",PaymentMethod:"Payment method",PaymentMethodIos:"Payment Method",ShippingAddress:"Shipping address",ShippingAddressIos:"Shipping Information",Delivery:"Delivery",ConfirmDialogTitle:"Create Order",ConfirmDialogText:"Confirm creating of Order #{{orderId}} and proceed to payment",ConfirmDialogButton:"Continue",PromoCode:"Promo code",Apply:"Apply",Discount:"Discount",ErrorPromoCodeExpired:"Promo code has expired",ErrorPromoCodeUsed:"Promo code already used",ErrorPromoCodeInvalid:"Invalid promo code"},De={AddressTitle:"Shipping address",Address1:"Address 1 (Street)",Address1Ios:"Address 1",Address2:"Address 2 (Street)",Address2Ios:"Address 2",AddressIos:"Address",City:"City",State:"State",Country:"Country",Postcode:"Postcode",ReciverTitle:"Reciver",Name:"Name",NameIos:"Name",FullName:"Full Name",FullNameIos:"First and Last Name",Phone:"Phone",PhoneIos:"Phone",SaveShippingInfo:"Save Shipping Information",SaveShippingInfoDescription:"You can save your shipping info for future use.",MainButtonText:"Done"},Oe={OptionsHeader:"Options",ToastText:'Product added to the <a class="link" href="/cart/">Cart</a>',ToastButtonText:"Undo",color:"Color",size:"Size",surface:"Surface"},We={Done:"Done",Cart:"View Cart",Checkout:"Checkout",Pay:"Create Order"},Ee={UnacceptablePlatform:"Access denied"},qe={Add:"Add to Cart"};var Fe={checkout:Le,shipping:De,product:Oe,mainButton:We,app:Ee,productItem:qe};const Ge={Total:"\u0418\u0442\u043E\u0433\u043E",PaymentMethod:"\u0421\u043F\u043E\u0441\u043E\u0431 \u043E\u043F\u043B\u0430\u0442\u044B",PaymentMethodIos:"\u0421\u043F\u043E\u0441\u043E\u0431 \u043E\u043F\u043B\u0430\u0442\u044B",ShippingAddress:"\u0410\u0434\u0440\u0435\u0441 \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0438",ShippingAddressIos:"\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F \u043E \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0435",Delivery:"\u0414\u043E\u0441\u0442\u0430\u0432\u043A\u0430",ConfirmDialogTitle:"\u041E\u0444\u043E\u0440\u043C\u0438\u0442\u044C \u0437\u0430\u043A\u0430\u0437",ConfirmDialogText:"\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044C \u043E\u0444\u043E\u0440\u043C\u043B\u0435\u043D\u0438\u0435 \u0437\u0430\u043A\u0430\u0437\u0430 #{{orderId}} \u043D\u0430 \u0441\u0443\u043C\u043C\u0443 {{total, number(minimumFractionDigits: 2; maximumFractionDigits: 2)}} TON \u0438 \u043F\u0435\u0440\u0435\u0439\u0442\u0438 \u043A \u043E\u043F\u043B\u0430\u0442\u0435",ConfirmDialogButton:"\u041F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u044C",PromoCode:"\u041F\u0440\u043E\u043C\u043E\u043A\u043E\u0434",Apply:"\u041F\u0440\u0438\u043C\u0435\u043D\u0438\u0442\u044C",Discount:"\u0421\u043A\u0438\u0434\u043A\u0430",ErrorPromoCodeExpired:"\u0421\u0440\u043E\u043A \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F \u043F\u0440\u043E\u043C\u043E\u043A\u043E\u0434\u0430 \u0438\u0441\u0442\u0435\u043A",ErrorPromoCodeUsed:"\u041F\u0440\u043E\u043C\u043E\u043A\u043E\u0434 \u0443\u0436\u0435 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D",ErrorPromoCodeInvalid:"\u041D\u0435\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0439 \u043F\u0440\u043E\u043C\u043E\u043A\u043E\u0434"},ze={AddressTitle:"\u0410\u0434\u0440\u0435\u0441 \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0438",Address1:"\u0410\u0434\u0440\u0435\u0441 1 (\u0443\u043B\u0438\u0446\u0430)",Address1Ios:"\u0410\u0434\u0440\u0435\u0441 1",Address2:"\u0410\u0434\u0440\u0435\u0441 2 (\u0443\u043B\u0438\u0446\u0430)",Address2Ios:"\u0410\u0434\u0440\u0435\u0441 2",AddressIos:"\u0410\u0434\u0440\u0435\u0441",City:"\u0413\u043E\u0440\u043E\u0434",State:"\u041E\u0431\u043B\u0430\u0441\u0442\u044C",Country:"\u0421\u0442\u0440\u0430\u043D\u0430",Postcode:"\u0418\u043D\u0434\u0435\u043A\u0441",ReciverTitle:"\u041F\u043E\u043B\u0443\u0447\u0430\u0442\u0435\u043B\u044C",Name:"\u0418\u043C\u044F",NameIos:"\u0418\u043C\u044F",FullName:"\u0418\u043C\u044F \u043F\u043E\u043B\u043D\u043E\u0441\u0442\u044C\u044E",FullNameIos:"\u0418\u043C\u044F \u0438 \u0444\u0430\u043C\u0438\u043B\u0438\u044F",Phone:"\u041D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430",PhoneIos:"\u0422\u0435\u043B\u0435\u0444\u043E\u043D",SaveShippingInfo:"\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0430\u0434\u0440\u0435\u0441 \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0438",SaveShippingInfoDescription:"\u0412\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u0441\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u044D\u0442\u0438 \u0434\u0430\u043D\u043D\u044B\u0435, \u0447\u0442\u043E\u0431\u044B \u0432 \u0431\u0443\u0434\u0443\u0449\u0435\u043C \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u0438\u0445 \u0434\u043B\u044F \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0438.",MainButtonText:"\u0413\u043E\u0442\u043E\u0432\u043E"},Ue={OptionsHeader:"\u041E\u043F\u0446\u0438\u0438",ToastText:'\u0422\u043E\u0432\u0430\u0440 \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D \u0432 <a class="link" href="/cart/">\u043A\u043E\u0440\u0437\u0438\u043D\u0443</a>',ToastButtonText:"\u041E\u0442\u043C\u0435\u043D\u0430",color:"\u0426\u0432\u0435\u0442",size:"\u0420\u0430\u0437\u043C\u0435\u0440",surface:"\u0424\u043E\u043D"},He={Done:"\u0413\u043E\u0442\u043E\u0432\u043E",Cart:"\u041A\u043E\u0440\u0437\u0438\u043D\u0430",Checkout:"\u041F\u0435\u0440\u0435\u0439\u0442\u0438 \u043A \u043E\u0444\u043E\u0440\u043C\u043B\u0435\u043D\u0438\u044E",Pay:"\u041E\u0444\u043E\u0440\u043C\u0438\u0442\u044C \u0437\u0430\u043A\u0430\u0437"},Re={UnacceptablePlatform:"\u0414\u043E\u0441\u0442\u0443\u043F \u0437\u0430\u043F\u0440\u0435\u0449\u0435\u043D"},Ke={Add:"\u0412 \u043A\u043E\u0440\u0437\u0438\u043D\u0443"};var Ze={checkout:Ge,shipping:ze,product:Ue,mainButton:He,app:Re,productItem:Ke},Ve={en:Fe,ru:Ze};const je={name:"i18n",create(){we.init({lng:Je(),fallbackLng:"en",debug:!1,resources:Ve},(o,e)=>{o?console.error(o):this.$t=e})}};function Je(){try{return Telegram.WebApp.initDataUnsafe.user.language_code}catch{return navigator.language.substr(0,2)}}A.use(je);let Ye;const ae={},Qe={name:"Lottie",create(){Ye=this},instance:{initLottie(o){return new Promise((e,t)=>{const r=o.getAttribute("src"),i=o.getAttribute("data-name"),n=Number(o.getAttribute("width")),d=Number(o.getAttribute("height")),l=new XMLHttpRequest;l.responseType="arraybuffer",l.onreadystatechange=function(){if(l.readyState===4)if(l.status===200){const c=document.createElement("canvas");c.setAttribute("width",n*window.devicePixelRatio),c.setAttribute("height",d*window.devicePixelRatio),c.style.width=n+"px",c.style.height=d+"px",o.appendChild(c);const m=c.getContext("2d"),s=JSON.parse(new TextDecoder("utf-8").decode(Ce.inflate(l.response)));ae[i]={ctx:m,player:Ae.loadAnimation({renderer:"canvas",loop:!0,autoplay:!1,animationData:s,rendererSettings:{context:m,scaleMode:"noScale",clearCanvas:!0}})},m.clearRect(0,0,1e3,1e3),e(ae[i])}else t()},l.open("GET",r,!0),l.send(null)})},async initLotties(){const o=document.querySelectorAll("tgs-player");for(let e=0;e<o.length;e++)try{(await this.initLottie(o[e])).player.play()}catch(t){console.error(t)}}},on:{init(){this.initLotties()}}};A.use(Qe);var re=new A({name:"TON Merch",theme:"auto",el:"#app",component:ne,store:Be,routes:xe,touch:{tapHold:!0},on:{init(){var t,r,i,n,d,l,c,m,s,u,p,X;const o=(i=(r=(t=window.Telegram)==null?void 0:t.WebApp)==null?void 0:r.themeParams)==null?void 0:i.button_color;if(o){const h=re.utils.colorThemeCSSProperties(o);O("body").attr("style",`--f7-theme-color: ${h["--f7-theme-color"]}; --f7-theme-color-rgb: ${h["--f7-theme-color-rgb"]}; --f7-theme-color-shade: ${h["--f7-theme-color-shade"]}; --f7-theme-color-tint: ${h["--f7-theme-color-tint"]};`)}if(O("html").addClass(Telegram.WebApp.colorScheme),(d=(n=window.Telegram)==null?void 0:n.WebApp)==null||d.ready(),!((c=(l=window.Telegram)==null?void 0:l.WebApp)!=null&&c.initData)){this.popup.open(".lottie-popup",!1),O(".view-main").remove();return}(s=(m=window.Telegram)==null?void 0:m.WebApp)==null||s.onEvent("viewportChanged",h=>{h&&(document.querySelector("html").scrollTop=1)});const e=(u=window.Telegram)==null?void 0:u.WebApp.initData;this.request.setup({headers:{authorization:`Bearer ${window.btoa(e)}`},beforeCreate:h=>{const a=/^test-tonmerch\.web\.app$/.test(window.location.host)?"/api/test":"/api/v1";h.url=/^http/.test(h.url)?h.url:a+h.url},statusCode:{401:()=>{this.popup.open(".lottie-popup",!1),O(".view-main").remove()}}}),this.store.dispatch("init"),re.utils.nextTick((X=(p=window.Telegram)==null?void 0:p.WebApp)==null?void 0:X.expand)}}});
