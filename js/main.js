
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
