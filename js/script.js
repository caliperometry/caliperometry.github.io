// ===== КАРУСЕЛЬ =====
(function() {
    const slides = document.querySelectorAll('.carousel-slide');
    const dots = document.querySelectorAll('.slide-dots span');
    let current = 0;
    let interval = 3000;

    function goTo(index) {
        slides.forEach((s, i) => {
            s.classList.toggle('active', i === index);
        });
        dots.forEach((d, i) => {
            d.classList.toggle('active-dot', i === index);
        });
        current = index;
    }

    function nextSlide() {
        const next = (current + 1) % slides.length;
        goTo(next);
    }

    let timer = setInterval(nextSlide, interval);

    dots.forEach((dot, idx) => {
        dot.addEventListener('click', function(e) {
            e.stopPropagation();
            clearInterval(timer);
            goTo(idx);
            timer = setInterval(nextSlide, interval);
        });
    });

    const phone = document.querySelector('.phone-mockup');
    if (phone) {
        phone.addEventListener('mouseenter', () => clearInterval(timer));
        phone.addEventListener('mouseleave', () => {
            clearInterval(timer);
            timer = setInterval(nextSlide, interval);
        });
    }
})();

// ===== АККОРДЕОН =====
document.querySelectorAll('.accordion-item').forEach(item => {
    const header = item.querySelector('.accordion-header');
    header.addEventListener('click', function() {
        const isActive = item.classList.contains('active');
        document.querySelectorAll('.accordion-item').forEach(el => el.classList.remove('active'));
        if (!isActive) {
            item.classList.add('active');
        }
    });
});

// ===== ПРЕМИУМ КНОПКА =====
document.getElementById('premiumBtn').addEventListener('click', function() {
    alert('🔥 Премиум-доступ через Woap (демо). Интеграция будет настроена.');
});
