// JS para el uso del menu solo en version mobile mobile
// Menu mobile
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navLinks = document.getElementById('navLinks');
const mobileOverlay = document.getElementById('mobileOverlay');

mobileMenuBtn.addEventListener('click', function() {
    // toggle para añadir la clase tal.. en el icono de abrir y cerrar el menu mobile
    navLinks.classList.toggle('nav-active');
    mobileMenuBtn.classList.toggle('hamburger-active');
    mobileOverlay.classList.toggle('active');
});

// Cerrar el menu al hacer clic en las navs
mobileOverlay.addEventListener('click', function() {
    // aqui solo se remueven las clases ya establecidas
    navLinks.classList.remove('nav-active');
    mobileMenuBtn.classList.remove('hamburger-active');
    mobileOverlay.classList.remove('active');
});

// Cerrar menu al hacer clic en un enlace como inicio, mapas , etc..
const navLinksItems = navLinks.querySelectorAll('a');
navLinksItems.forEach(link => {
    link.addEventListener('click', function() {
        navLinks.classList.remove('nav-active');
        mobileMenuBtn.classList.remove('hamburger-active');
        mobileOverlay.classList.remove('active');
    });
});

// Cerrar menu al redimensionar la ventana como al cambiar a desktop, cerrando la version mobile, usado en el navegador y aplicados en mobiles
window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
        navLinks.classList.remove('nav-active');
        mobileMenuBtn.classList.remove('hamburger-active');
        mobileOverlay.classList.remove('active');
    }
}); 