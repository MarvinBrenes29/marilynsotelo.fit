export async function initPlans(containerId = 'plansContainer') {
  const container = document.getElementById(containerId);
  if (!container) return;

  try {
    const response = await fetch('assets/data/plans.json');
    if (!response.ok) {
      throw new Error('No se pudo cargar plans.json');
    }

    const plans = await response.json();

    container.innerHTML = plans.map(plan => `
      <div class="max-w-sm flex flex-col items-center text-center bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-xl transition-shadow">
        
        <div class="mb-4">
          <img src="${plan.icon}" class="h-12" alt="${plan.title}">
        </div>

        <div>
          <h4 class="font-semibold text-xl mb-2 text-primary">${plan.title}</h4>
          <p class="text-gray-600">${plan.description}</p>
        </div>

      </div>
    `).join('');

  } catch (error) {
    console.error('Error cargando planes:', error);
  }
}
