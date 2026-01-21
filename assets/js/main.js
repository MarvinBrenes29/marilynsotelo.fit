import { initMenu } from './menu.js';
import { initFAQ } from './components/faqs.js';
import { initPlans } from './components/plans.js';

document.addEventListener('DOMContentLoaded', () => {
  initMenu();
  initFAQ();
  initPlans();
});
