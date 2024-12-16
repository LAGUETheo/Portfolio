// Toggle des projets
document.getElementById('toggleProjects').addEventListener('click', () => {
    const projects = document.getElementById('projects');
    const arrow = document.getElementById('arrowIcon');
    projects.classList.toggle('hidden');
    arrow.classList.toggle('rotate-180'); // Animation de la flèche
  });
  