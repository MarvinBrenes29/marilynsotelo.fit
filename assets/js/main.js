import { initMenu } from './menu.js';
import { initFAQ } from './components/faqs.js';
import { initPlans } from './components/plans.js';
import { initPricing } from './components/pricing.js';

document.addEventListener('DOMContentLoaded', () => {
  initMenu();
  initFAQ();
  initPlans();
  initPricing();
});
