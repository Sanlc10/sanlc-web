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

    // Language Switcher
    const btnEs = document.getElementById('btn-es');
    const btnEn = document.getElementById('btn-en');

    // Check local storage or default to 'es'
    let currentLang = localStorage.getItem('lang') || 'es';

    const updateLanguage = (lang) => {
        currentLang = lang;
        localStorage.setItem('lang', lang);

        // Update styling
        if (lang === 'es') {
            btnEs.classList.add('active');
            btnEn.classList.remove('active');
            document.documentElement.lang = 'es';
        } else {
            btnEn.classList.add('active');
            btnEs.classList.remove('active');
            document.documentElement.lang = 'en';
        }

        // Update Text
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang][key]) {
                el.innerText = translations[lang][key];
            }
        });
    };

    if (btnEs && btnEn) {
        btnEs.addEventListener('click', () => updateLanguage('es'));
        btnEn.addEventListener('click', () => updateLanguage('en'));

        // Initialize
        updateLanguage(currentLang);
    }
});
