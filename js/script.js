// Botão do menu (versão mobile)
let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
};

// Fechar menu ao rolar a página
window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
};

// Troca de imagem da seção "Início"
document.querySelectorAll('.image-slider img').forEach(img => {
    img.onclick = () => {
        let src = img.getAttribute('src');
        document.querySelector('.main-inicio-image').src = src;
    };
});

// Slider das matérias / avaliações
var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    loop: true,
    grabCursor: true,

    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },

    breakpoints: {
        0: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
    },
});