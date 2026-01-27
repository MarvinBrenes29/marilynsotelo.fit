export async function initPricing(containerId = 'pricingContainer') {
  const container = document.getElementById(containerId);
  if (!container) return;

  try {
    const response = await fetch('assets/data/pricing.json');
    if (!response.ok) {
      throw new Error('No se pudo cargar pricing.json');
    }

    const plans = await response.json();

    container.innerHTML = plans.map(plan => `
      <div class="w-full max-w-[300px] h-[525px] bg-white rounded-xl shadow-md border border-gray-100 hover:shadow-xl transition-shadow overflow-hidden flex flex-col">
        
        <div class="py-5 border-b border-gray-100 text-center">
          <h2 class="text-xl font-bold text-primary">${plan.title}</h2>
          <h4 class="text-sm text-grayx-800">${plan.subtitle}</h2>
        </div>

        <div class="p-6 flex flex-col flex-grow">
          
          <div class="flex items-baseline justify-center mb-6 mt-2">
            <span class="text-5xl font-bold text-cherry">$${plan.price}</span>
            <span class="text-gray-400 ml-2 text-xs uppercase tracking-widest font-medium">/ ${plan.period}</span>
          </div>

          <p class="text-gray-600 text-sm leading-relaxed mb-6 text-center">
            ${plan.description}
          </p>

          <ul class="space-y-4 mb-8 flex-grow">
            ${plan.features.map(feature => `
              <li class="flex items-start text-gray-600">
                <span class="text-cherry mr-3 text-lg leading-none">✔</span>
                <span class="text-sm leading-snug">${feature}</span>
              </li>
            `).join('')}
          </ul>

          <a href="${plan.link}" class="block w-full py-3 px-4 bg-cherry text-white text-center font-bold rounded-lg hover:brightness-110 transition-all shadow-md active:scale-95">
            ${plan.buttonText}
          </a>

        </div>
      </div>
    `).join('');

  } catch (error) {
    console.error('Error cargando pricing:', error);
  }
}
