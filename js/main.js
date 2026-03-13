
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


document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector("#hamburger");
    const navMenu = document.querySelector("#nav-menu");

    if (hamburger && navMenu) {
        hamburger.addEventListener("click", (e) => {
            e.preventDefault(); // Evita comportamientos extraños
            navMenu.classList.toggle("active");
            
            // Log para que pruebes en la consola del móvil si está funcionando
            console.log("Menú clickeado, clase active:", navMenu.classList.contains("active"));
        });

        // Cerrar al hacer clic en un enlace
        const navLinks = document.querySelectorAll(".nav-menu a");
        navLinks.forEach(link => {
            link.addEventListener("click", () => {
                navMenu.classList.remove("active");
            });
        });
    }
});
