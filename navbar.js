// Récupère le bouton burger dans le GTML via son id
const burger = document.getElementById('burger');

// Récupère la liste des liens de navigation via son id
const links = document.getElementById('nav-links');

// Extrait le nom du fichier de la page actuelle depuis l'URL
const currentPage = window.location.pathname.split('/').pop();

// Parcourt tous les liens de la navbar
document.querySelectorAll('.navbar-links a').forEach(link => {
  // Retire la classe 'active' de tous les liens (remise à zéro)
  link.classList.remove('active');
  // Si le href correspond à la page actuelle...
  if (link.getAttribute('href') === currentPage) {
    // ...on lui attribue la classe 'active' pour le mettre en surbrillance
    link.classList.add('active');
  }
});

// Ecoute le bouton burger
burger.addEventListener('click', () => {
  // Bascule la classe 'open' sur le menu : l'ajoute si absente, la retire si présente
  const open = links.classList.toggle('open');
  // Met à jour l'attribut d'accessibilité pour les lecteurs d'écran
  burger.setAttribute('aria-expanded', open);
});