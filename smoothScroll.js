const scrollButtonNode = document.getElementById('scrollBtn');

scrollButtonNode.addEventListener('click', (event) => {
    const button = event.target.closest('#scrollBtn');
    if (!button) return;

    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
    });
});
