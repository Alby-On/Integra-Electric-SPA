
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
