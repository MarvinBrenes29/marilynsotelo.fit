console.log('main.js cargado');

import { initMenu } from './menu.js';
import { initFAQ } from './components/faqs.js';

document.addEventListener('DOMContentLoaded', () => {
  initMenu();
  initFAQ();
});
