export async function initPlans(containerId = "plansContainer") {
const container = document.getElementById(containerId);
  if (!container) return;

  try {
    const response = await fetch("assets/data/plans.json");
    if (!response.ok) throw new Error("No se pudo cargar plans.json");

    const plans = await response.json();

    container.innerHTML = plans
      .map((plan, index) => {
        const centerClass = index === 2 ? "md:col-span-2 lg:col-span-1 md:w-1/2 md:mx-auto lg:w-full" : "";

        return `
        <div class="flex flex-col items-center text-center bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow h-full ${centerClass}">
          
          <div class="mb-4">
            <img src="${plan.icon}" class="h-12" alt="${plan.title}">
          </div>

          <div class="flex flex-col flex-grow">
            <h4 class="font-semibold text-xl mb-2 text-primary">${plan.title}</h4>
            <p class="text-gray-600">${plan.description}</p>
          </div>

        </div>
      `;
      
      })
      .join("");
  } catch (error) {
    console.error("Error cargando planes:", error);
  }
}
