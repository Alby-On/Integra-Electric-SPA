// Objeto para almacenar los intervalos de cada slider de forma independiente
const projectIntervals = {};

document.addEventListener('DOMContentLoaded', () => {
    // 1. Inicializar indicadores (puntos) y el movimiento automático
    document.querySelectorAll('.project-slider').forEach(slider => {
        const sliderId = slider.id;
        
        // Generar puntos (dots) dinámicamente
        const slides = slider.querySelectorAll('.p-slide');
        const dotsContainer = slider.querySelector('.slider-dots');
        
        if (dotsContainer) {
            slides.forEach((_, index) => {
                const dot = document.createElement('span');
                dot.classList.add('dot');
                if (index === 0) dot.classList.add('active');
                dot.onclick = () => jumpToSlide(sliderId, index);
                dotsContainer.appendChild(dot);
            });
        }

        // 2. Iniciar el auto-cambio cada 5 segundos
        startAutoSlide(sliderId);

        // 3. Pausar al pasar el mouse (opcional, mejora UX)
        slider.addEventListener('mouseenter', () => stopAutoSlide(sliderId));
        slider.addEventListener('mouseleave', () => startAutoSlide(sliderId));
    });
});

function moveSlide(sliderId, direction) {
    const container = document.getElementById(sliderId);
    const slides = container.querySelectorAll('.p-slide');
    const dots = container.querySelectorAll('.dot');
    let currentIndex = Array.from(slides).findIndex(s => s.classList.contains('active'));

    slides[currentIndex].classList.remove('active');
    if (dots.length > 0) dots[currentIndex].classList.remove('active');

    currentIndex = (currentIndex + direction + slides.length) % slides.length;

    slides[currentIndex].classList.add('active');
    if (dots.length > 0) dots[currentIndex].classList.add('active');

    // Reiniciar el contador automático para que no cambie de inmediato
    resetAutoSlide(sliderId);
}

function jumpToSlide(sliderId, index) {
    const container = document.getElementById(sliderId);
    const slides = container.querySelectorAll('.p-slide');
    const dots = container.querySelectorAll('.dot');
    
    slides.forEach(s => s.classList.remove('active'));
    dots.forEach(d => d.classList.remove('active'));
    
    slides[index].classList.add('active');
    dots[index].classList.add('active');
    
    resetAutoSlide(sliderId);
}

// --- FUNCIONES DE AUTOMATIZACIÓN ---

function startAutoSlide(sliderId) {
    // Cambia cada 5000ms (5 segundos). Puedes ajustarlo.
    projectIntervals[sliderId] = setInterval(() => {
        moveSlide(sliderId, 1);
    }, 5000);
}

function stopAutoSlide(sliderId) {
    clearInterval(projectIntervals[sliderId]);
}

function resetAutoSlide(sliderId) {
    stopAutoSlide(sliderId);
    startAutoSlide(sliderId);
}
