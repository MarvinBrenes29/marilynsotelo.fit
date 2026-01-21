export async function initFAQ(containerId = 'faqContainer') {
  const faqContainer = document.getElementById(containerId);
  if (!faqContainer) return;

  try {
    const response = await fetch('assets/data/faqs.json');
    if (!response.ok) {
      throw new Error('No se pudo cargar el archivo JSON');
    }

    const faqsData = await response.json();

    faqContainer.innerHTML = faqsData.map((faq) => `
      <div class="faq-item flex flex-col items-start w-full">
        <div class="faq-header flex items-center justify-between w-full cursor-pointer bg-white border border-slate-200 p-4 rounded transition-all">
          <h2 class="text-base">${faq.question}</h2>
          <svg class="faq-icon transition-all duration-500 ease-in-out" width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="m4.5 7.2 3.793 3.793a1 1 0 0 0 1.414 0L13.5 7.2"
              stroke="#1D293D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>

        <p class="faq-answer text-base text-slate-800 px-4 overflow-hidden max-h-0 opacity-0 -translate-y-2 transition-all duration-500 ease-in-out">
          ${faq.answer}
        </p>
      </div>
    `).join('');

    const headers = faqContainer.querySelectorAll('.faq-header');

    headers.forEach((header, index) => {
      header.addEventListener('click', () => {
        const allAnswers = faqContainer.querySelectorAll('.faq-answer');
        const allIcons = faqContainer.querySelectorAll('.faq-icon');

        allAnswers.forEach((el, i) => {
          const isTarget = i === index;
          const isOpen = el.classList.contains('opacity-100');

          el.classList.toggle('opacity-100', isTarget && !isOpen);
          el.classList.toggle('max-h-[300px]', isTarget && !isOpen);
          el.classList.toggle('translate-y-0', isTarget && !isOpen);
          el.classList.toggle('pt-4', isTarget && !isOpen);

          if (!isTarget || isOpen) {
            el.classList.add('max-h-0', '-translate-y-2');
            allIcons[i].classList.remove('rotate-180');
          }

          if (isTarget && !isOpen) {
            el.classList.remove('max-h-0', '-translate-y-2');
            allIcons[i].classList.add('rotate-180');
          }
        });
      });
    });

  } catch (error) {
    console.error('Error cargando FAQs:', error);
  }
}
