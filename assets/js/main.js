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

window.addEventListener("load", () => {
  const hash = window.location.hash;
  if (hash) {
    setTimeout(() => {
      const target = document.querySelector(hash);
      const nav = document.querySelector("nav");
      
      if (target) {
        const offset = nav ? nav.offsetHeight : 0;
        const y = target.getBoundingClientRect().top + window.scrollY - offset - 20;

        window.scrollTo({
          top: y,
          behavior: "smooth"
        });
      }
    }, 100); 
  }
});