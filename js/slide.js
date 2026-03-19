document.addEventListener('DOMContentLoaded', () => {
    // Seleccionamos el contenedor de slides de la sección Nosotros
    const aboutSlider = document.querySelector('#nosotros .slider-container');
    
    if (aboutSlider) {
        const slides = aboutSlider.querySelectorAll('.slide');
        let currentSlide = 0;

        // Función para cambiar a la siguiente imagen
        const nextAboutSlide = () => {
            // Quitamos la clase active a la actual
            slides[currentSlide].classList.remove('active');
            
            // Calculamos la siguiente (vuelve al inicio al terminar)
            currentSlide = (currentSlide + 1) % slides.length;
            
            // Agregamos active a la nueva
            slides[currentSlide].classList.add('active');
        };

        // Iniciamos el intervalo automático cada 4 segundos
        let aboutInterval = setInterval(nextAboutSlide, 4000);

        // Pausar cuando el mouse está encima para que el cliente vea bien la foto
        aboutSlider.addEventListener('mouseenter', () => {
            clearInterval(aboutInterval);
        });

        // Reanudar cuando el mouse sale
        aboutSlider.addEventListener('mouseleave', () => {
            aboutInterval = setInterval(nextAboutSlide, 4000);
        });
    }
});
