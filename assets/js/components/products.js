export async function initProducts(containerId = 'productsContainer') {
  const container = document.getElementById(containerId);
  if (!container) return;

  try {
    const response = await fetch('assets/data/products.json');
    if (!response.ok) {
      throw new Error('No se pudo cargar products.json');
    }

    const products = await response.json();

    container.innerHTML = products.map(product => `
      <div class="max-w-xs overflow-hidden border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow bg-white">

        <img class="w-full aspect-[4/3] object-cover hover:scale-105 transition-transform duration-300" src="${product.image}" alt="${product.name}" />

        <div class="p-4 space-y-3">
          
          <div>
            <h4 class="text-xl font-bold text-primary">${product.name}</h4>
            <p class="text-sm text-gray-600 line-clamp-2">${product.description}</p>
          </div>

          <div class="flex flex-wrap gap-1.5">
            ${product.badges.map(badge => `
              <span class="inline-flex items-center rounded-full bg-indigo-50 px-2 py-0.5 text-xs font-semibold text-indigo-700 ring-1 ring-inset ring-indigo-700/10">
                ${badge}
              </span>
            `).join('')}
          </div>

          <div class="flex items-center text-gray-500">
            <img src="assets/icons/ui/person.png" class="h-4 w-4 mr-1.5 opacity-70" alt="icon person">
            <small class="text-xs font-medium">${product.portion}</small>
          </div>

          <div class="border-t border-gray-100 pt-3 flex items-center justify-between">

          <div class="flex flex-col leading-tight"> 

          <p class="text-[10px] uppercase tracking-wider text-gray-400 ">
              ${product.priceNote}
            </p>
           <p class="text-2xl font-semibold text-cherry">
              ${product.currency}${product.price.toLocaleString('es-CR')}
            </p>
           

          </div>
        
            <a href="${product.link}" class="bg-cherry text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors">
              ${product.ctaText}
            </a>
          </div>

        </div>
      </div>
    `).join('');

  } catch (error) {
    console.error('Error cargando productos:', error);
  }
}
