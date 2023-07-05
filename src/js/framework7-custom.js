
import Framework7, { request, utils, getDevice, createStore } from 'framework7';
import Skeleton from 'framework7/components/skeleton';
import Swiper from 'framework7/components/swiper';
import Accordion from 'framework7/components/accordion';
import SmartSelect from 'framework7/components/smart-select';
import Sheet from 'framework7/components/sheet';
import Radio from 'framework7/components/radio';
import Toggle from 'framework7/components/toggle';
import Input from 'framework7/components/input';
import Lazy from 'framework7/components/lazy';
import Form from 'framework7/components/form';
import Searchbar from 'framework7/components/searchbar';
import Toast from 'framework7/components/toast';
import Stepper from 'framework7/components/stepper';
import Popup from 'framework7/components/popup';
import Preloader from 'framework7/components/preloader';

import './tds-components.js';

Framework7.use([
  Skeleton,
  Swiper,
  Accordion,
  SmartSelect,
  Sheet,
  Radio,
  Toggle,
  Input,
  Lazy,
  Form,
  Searchbar,
  Toast,
  Stepper,
  Popup,
  Preloader,
]);

export default Framework7;
export { request, utils, getDevice, createStore };
