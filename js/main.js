
    async function cargarComponentes() {
        try {
            // Cargar Header desde la carpeta components
            const resHeader = await fetch('components/header.html');
            const htmlHeader = await resHeader.text();
            document.getElementById('header-placeholder').innerHTML = htmlHeader;

            // Cargar Footer desde la carpeta components
            const resFooter = await fetch('components/footer.html');
            const htmlFooter = await resFooter.text();
            document.getElementById('footer-placeholder').innerHTML = htmlFooter;
            
        } catch (error) {
            console.error("Error cargando los componentes:", error);
        }
    }

    // Ejecutar al cargar el DOM
    document.addEventListener("DOMContentLoaded", cargarComponentes);

window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section'); // Asegúrate de que tus secciones usen la etiqueta <section>
    const navLinks = document.querySelectorAll('nav ul li a');

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        // Ajuste de 150px para que el cambio ocurra un poco antes de llegar arriba
        if (pageYOffset >= (sectionTop - 150)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});


function initNosotrosSlider() {
    const slides = document.querySelectorAll('.slider-container .slide');
    let current = 0;

    if (slides.length > 0) {
        setInterval(() => {
            slides[current].classList.remove('active');
            current = (current + 1) % slides.length;
            slides[current].classList.add('active');
        }, 4000); // Cambia cada 4 segundos
    }
}

// Se ejecuta cuando la web termina de cargar
document.addEventListener('DOMContentLoaded', initNosotrosSlider);


function startHeroSlider() {
    const slides = document.querySelectorAll('.hero-slide');
    let current = 0;

    setInterval(() => {
        slides[current].classList.remove('active');
        current = (current + 1) % slides.length;
        slides[current].classList.add('active');
    }, 5000); // 5000ms = 5 segundos
}

document.addEventListener('DOMContentLoaded', startHeroSlider);


document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.getElementById("hamburger");
    const navMenu = document.getElementById("nav-menu");

    // Verificación de seguridad en consola
    if (!hamburger || !navMenu) {
        console.warn("Error: No se encontró el ID 'hamburger' o 'nav-menu' en el HTML.");
        return;
    }

    hamburger.addEventListener("click", function(e) {
        e.preventDefault();
        // Alterna la clase para mostrar el menú
        navMenu.classList.toggle("active");
        // Alterna la animación de la X (opcional según el CSS anterior)
        hamburger.classList.toggle("is-active");
        
        console.log("Menú activado:", navMenu.classList.contains("active"));
    });

    // Cerrar el menú automáticamente al hacer clic en una opción
    const links = document.querySelectorAll(".nav-menu a");
    links.forEach(link => {
        link.addEventListener("click", () => {
            navMenu.classList.remove("active");
            hamburger.classList.remove("is-active");
        });
    });
});
