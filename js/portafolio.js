function moveSlide(sliderId, direction) {
    const container = document.getElementById(sliderId);
    const slides = container.querySelectorAll('.p-slide');
    let activeIndex = Array.from(slides).findIndex(s => s.classList.contains('active'));
    
    slides[activeIndex].classList.remove('active');
    
    activeIndex += direction;
    
    if (activeIndex >= slides.length) activeIndex = 0;
    if (activeIndex < 0) activeIndex = slides.length - 1;
    
    slides[activeIndex].classList.add('active');
}
