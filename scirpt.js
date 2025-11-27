//animaçao geral 

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, {
    threshold: 0.15
});

// Seleciona todas as sections automaticamente
document.querySelectorAll('section').forEach(sec => observer.observe(sec));

// Animação em cascata para .service-card
const serviceCards = document.querySelectorAll('.service-card');

serviceCards.forEach((card, index) => {
    observer.observe(card); // 
    card.style.animationDelay = `${index * 0.5}s`;
});


//mobile menu
        document.querySelector('.menu-toggle').addEventListener('click', () => {
            document.querySelector('.nav-links').classList.toggle('active');
        });

    
