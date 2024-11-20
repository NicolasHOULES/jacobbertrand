// Sélection des sections à animer
const sections = document.querySelectorAll('section');

// Options de l'observateur : déclenche l'animation lorsque 30% de la section est visible
const options = {
    root: null,
    threshold: 0.3
};

// Création de l'observateur d'intersection
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Ajout de la classe d'animation en fonction de la section
            if (entry.target.id === 'home') {
                entry.target.classList.add('fade-in');
            } else if (entry.target.id === 'projects') {
                entry.target.classList.add('slide-in-left');
            } else if (entry.target.id === 'skills') {
                entry.target.classList.add('slide-in-right');
            } else {
                entry.target.classList.add('fade-in');
            }
        }
    });
}, options);

// Observation des sections
sections.forEach(section => {
    observer.observe(section);
});


// Sélection du point qui suit le curseur
const cursor = document.getElementById('cursor');

// Suivre la position du curseur
document.addEventListener('mousemove', (e) => {
    const x = e.clientX;
    const y = e.clientY;

    // Déplacer le point au niveau du curseur
    cursor.style.left = `${x}px`;
    cursor.style.top = `${y}px`;
});

// Cibler les éléments nécessaires
const projectCards = document.querySelector('.project-cards');
const scrollRight = document.getElementById('scrollRight');

// Fonction pour déplacer les projets à gauche
scrollRight.addEventListener('click', function() {
    // Décalage horizontal du conteneur de projets
    projectCards.scrollBy({
        left: 350, // Déplace le conteneur de 350px à chaque clic
        behavior: 'smooth' // Ajoute un effet de défilement fluide
    });
});
