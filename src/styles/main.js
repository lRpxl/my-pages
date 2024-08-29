document.addEventListener('DOMContentLoaded', () => {
    // Mensagem de boas-vindas//
    alert('Bem-vindo ao portfólio de Julio de Oliveira!');
});

// Animação nos links
const projecLinks = document.querySelectorAll('.projects-list-item a');

projecLinks.forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.color = '#ff6347'; //muda a cor do link ao passar o mouse
    });

    link.addEventListener('mouseout', () => {
        link.style.color = ''; //volta a cor original quando o mouse sai do link
    });
});
