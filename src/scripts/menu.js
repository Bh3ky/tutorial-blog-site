const menu = document.querySelector('.menu');

menu?.addEventListener('click', () => {
    const isExpanded = menu.getAttribute('aria-expannded') === 'true';
    menu.setAttribute('aria-expanded', `${!isExpanded}`);
});