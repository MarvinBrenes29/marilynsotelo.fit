import { initMenu } from './menu.js';
import { initFAQ } from './components/faqs.js';
import { initPlans } from './components/plans.js';
import { initPricing } from './components/pricing.js';
import { initProducts } from './components/products.js';

document.addEventListener('DOMContentLoaded', () => {
  initMenu();
  initFAQ();
  initPlans();
  initPricing();
  initProducts();
});
