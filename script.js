



document.querySelectorAll('.menu-buttons a').forEach(anchor => {
    anchor.addEventListener('click', function (event) {
        event.preventDefault(); // Evita el comportamiento predeterminado del enlace
        const targetId = this.getAttribute('href').substring(1); // Obtiene el ID del destino
        const targetElement = document.getElementById(targetId); // Busca el elemento con el ID
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' }); // Desplazamiento suave
        }
    });
});



                    
                    
                    
                    

