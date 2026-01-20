document.addEventListener('DOMContentLoaded', () => {
    // Reveal text on scroll
    const reveals = document.querySelectorAll('.reveal-text, .skill-card');

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const elementVisible = 50;

        reveals.forEach((reveal) => {
            const elementTop = reveal.getBoundingClientRect().top;
            if (elementTop < windowHeight - elementVisible) {
                reveal.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);

    // Trigger once on load
    revealOnScroll();

    // Dynamic year
    const yearSpan = document.querySelector('#year');
    if (yearSpan) yearSpan.innerText = new Date().getFullYear();
});
