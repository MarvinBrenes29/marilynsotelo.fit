export async function initProducts(containerId = 'productsContainer') {
  const container = document.getElementById(containerId);
  if (!container) return;

  try {
    const response = await fetch('assets/data/products.json');
    if (!response.ok) {
      throw new Error('No se pudo cargar products.json');
    }

    const products = await response.json();

    container.innerHTML = products.map(product => {
      const baseText = `Hola Marilyn 👋 Estoy interesado en el *${product.name}*. ¿Me podrías brindar más información? 😊`;
      const waLink = `https://wa.me/50670034188?text=${encodeURIComponent(baseText)}`;

      return `
      <div class="max-w-xs overflow-hidden border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow bg-white">

        <img class="w-full aspect-[4/3] object-cover hover:scale-105 transition-transform duration-300" src="${product.image}" alt="${product.name}" />

        <div class="p-4 space-y-3">
          
          <div>
            <h4 class="text-xl font-bold text-primary">${product.name}</h4>
            <p class="text-sm text-gray-600 line-clamp-2">${product.description}</p>
          </div>

        <div class="flex flex-wrap gap-1.5">
            ${product.badges.map(badge => {
            const colorMap = {
            'proteína': 'bg-emerald-50 text-emerald-700 ring-emerald-600/20',
            'semana': 'bg-amber-50 text-amber-700 ring-amber-600/20',
            'grasas': 'bg-blue-50 text-blue-700 ring-blue-600/20',
            'calorías': 'bg-rose-50 text-rose-700 ring-rose-600/20',
            'carbo': 'bg-slate-50 text-slate-700 ring-slate-600/20' };

            const badgeKey = Object.keys(colorMap).find(key =>
            badge.toLowerCase().includes(key)
          );
            const colorClass = badgeKey ? colorMap[badgeKey] : 'bg-gray-50 text-gray-600 ring-gray-500/10';

          return `
            <span class="inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-bold ring-1 ring-inset ${colorClass} whitespace-nowrap">
              ${badge}
            </span>
            `;

        }).join('')}
      </div>

          <div class="flex items-center text-gray-500">
            <img src="assets/img/ui/portion.png" class="h-4 w-4 mr-1.5 opacity-70" alt="icon person">
            <small class="text-xs font-medium">${product.portion}</small>
          </div>

          <div class="border-t border-gray-100 pt-3 flex items-center justify-between">

          <div class="flex flex-col leading-tight"> 

          <p class="text-[10px] uppercase tracking-wider text-gray-400 ">
              ${product.priceNote}
            </p>
           <p class="text-2xl font-semibold text-cherry">
              ${product.currency}${product.price.toLocaleString("es-CR")}
            </p>
           

          </div>
        
            <a href="${waLink}" class="bg-cherry text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors">
              ${product.ctaText}
            </a>
          </div>

        </div>
      </div>
    `;
  }).join('');

  } catch (error) {
    console.error('Error cargando productos:', error);
  }
}
