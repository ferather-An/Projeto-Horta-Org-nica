document.addEventListener('DOMContentLoaded', function() {
    // Atualizar ano atual no footer
    document.getElementById('current-year').textContent = new Date().getFullYear();

    // Menu mobile toggle
    const menuToggle = document.getElementById('menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    const mainMenu = document.getElementById('main-menu');

    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            mainNav.classList.toggle('menu-open');
            const isOpen = mainNav.classList.contains('menu-open');
            menuToggle.setAttribute('aria-expanded', isOpen);

            if (isOpen) {
                document.addEventListener('click', function closeMenu(e) {
                    if (!mainMenu.contains(e.target) && !menuToggle.contains(e.target)) {
                        mainNav.classList.remove('menu-open');
                        menuToggle.setAttribute('aria-expanded', false);
                        document.removeEventListener('click', closeMenu);
                    }
                });
            }
        });
    }

    // Smooth scrolling para links de navegação
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70, // Ajuste para o cabeçalho fixo
                    behavior: 'smooth'
                });

                // Fechar menu mobile após clicar
                if (window.innerWidth <= 768) {
                    mainNav.classList.remove('menu-open');
                    menuToggle.setAttribute('aria-expanded', false);
                }
            }
        });
    });
});

// Código relacionado ao cabeçalho
// Função para alternar o menu mobile
document.querySelector('.menu-toggle').addEventListener('click', function () {
    document.querySelector('.navigation').classList.toggle('active');
});