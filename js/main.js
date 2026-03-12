function incluirComponentes() {
            // Cargar Header
            fetch('header.html')
                .then(response => response.text())
                .then(data => {
                    document.getElementById('header-placeholder').innerHTML = data;
                });

            // Cargar Footer
            fetch('footer.html')
                .then(response => response.text())
                .then(data => {
                    document.getElementById('footer-placeholder').innerHTML = data;
                });
        }

        // Ejecutar la función al cargar la página
        window.onload = incluirComponentes;
