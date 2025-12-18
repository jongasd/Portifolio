/* --- Menu Mobile --- */
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
const navLinksItems = document.querySelectorAll('.nav-link, .nav-btn');
const icon = hamburger.querySelector('i');

function toggleMenu() {
    navLinks.classList.toggle('active');
    // Troca o ícone entre menu hamburguer e 'X'
    if (navLinks.classList.contains('active')) {
        icon.classList.remove('ph-list');
        icon.classList.add('ph-x');
    } else {
        icon.classList.remove('ph-x');
        icon.classList.add('ph-list');
    }
}

hamburger.addEventListener('click', toggleMenu);

// Fecha o menu ao clicar em um link
navLinksItems.forEach(item => {
    item.addEventListener('click', () => {
        if (navLinks.classList.contains('active')) {
            toggleMenu();
        }
    });
});

/* --- Mudar Navbar ao Rolar --- */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.background = "rgba(10, 10, 12, 0.95)"; // Mais escuro ao rolar
        navbar.style.boxShadow = "0 4px 20px rgba(0,0,0,0.4)";
    } else {
        navbar.style.background = "rgba(10, 10, 12, 0.7)"; // Volta ao glass inicial
        navbar.style.boxShadow = "none";
    }
});

/* --- Animação de Scroll (Reveal Elements) --- */
// Usa Intersection Observer para alta performance
const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-up');

const revealOptions = {
    threshold: 0.15, // Dispara quando 15% do elemento está visível
    rootMargin: "0px 0px -50px 0px" // Um pouco antes de entrar totalmente na tela
};

const revealOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        
        // Adiciona a classe 'active' que dispara a transição CSS
        entry.target.classList.add('active');
        
        // Para de observar o elemento depois que ele animou uma vez
        observer.unobserve(entry.target);
    });
}, revealOptions);

revealElements.forEach(el => {
    revealOnScroll.observe(el);
});