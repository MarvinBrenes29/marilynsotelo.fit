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
  if (!hash) return;

  const target = document.querySelector(hash);
  const nav = document.querySelector("nav");

  if (!target || !nav) return;

  const offset = nav.offsetHeight;
  const y = target.getBoundingClientRect().top + window.scrollY - offset - 20;

  window.scrollTo({
    top: y,
    behavior: "smooth"
  });
});
