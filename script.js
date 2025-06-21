window.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('.reveal');
    const message = document.querySelector('.message');
    const container = document.querySelector('.floating-items');

    if (!button || !message || !container) return;

    button.addEventListener('click', () => {
        message.classList.remove('hidden');
        message.classList.add('visible');

        // Конфетти!
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
        });
    });

    for (let i = 0; i < 20; i++) {
        const balloon = document.createElement('div');
        balloon.className = 'balloon';
        balloon.style.left = Math.random() * 100 + '%';
        balloon.style.top = 90 + Math.random() * 10 + '%';
        balloon.style.animationDelay = Math.random() * 5 + 's';
        balloon.style.background = ['#ff4d4d', '#4d94ff', '#ffcc00', '#00cc66', '#ff99cc'][i % 5];
        container.appendChild(balloon);
    }
});
